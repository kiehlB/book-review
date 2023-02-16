import { Button, Spinner, Table as EvergreenTable, SearchIcon } from 'evergreen-ui';
import _ from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Heading, Menu, Pane, Popover } from 'evergreen-ui';
import defaultRowRenderer, { DEFAULT_TABLE_ROW_HEIGHT } from './DefaultTableRow';
import { BASE_SIZE, SPINNER_SIZE } from '../../lib/constants';
import FindBook from '../../svg/findBook';
import NoData from '../../svg/noData';
import TableContent from './TableContent';
import ErrorSVG from '../../svg/error';

const DEFAULT_FILTER_PLACEHOLDER = 'No entries';
const DEFAULT_LOADING_FOOTER_PLACEHOLDER = 'Loading entries...';
const FOOTER_HEIGHT = BASE_SIZE * 4;
const HEADER_HEIGHT = BASE_SIZE * 4;
const INITIAL_ROW_COUNT = 50;
const ROWS_TO_LOAD_PER_BATCH = 300;

function defaultFormatEntries(count: number) {
  return `${count.toLocaleString('en-US')} ${count > 1 ? 'entries' : 'entry'}`;
}

export function Table({
  autoFocus,
  data,
  defaultSortOrder = null,
  disabled = false,
  filterFn,
  filterPlaceholder = DEFAULT_FILTER_PLACEHOLDER,
  formatEntries = defaultFormatEntries,
  isLoading,
  onRowClick,
  rowHeight = DEFAULT_TABLE_ROW_HEIGHT,
  rowRenderer,
  selectedIds,
  sortOptions,
  status,
}) {
  const [rowCount, setRowCount] = useState(INITIAL_ROW_COUNT);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);
  const [debouncedFilter] = useDebounce(filter, 500);
  const [clicked, setClicked] = useState(null);

  const handleClick = (e, datum) => {
    setClicked(datum);
  };

  const activities = useMemo(() => {
    let result = data;

    if (filterFn) {
      result = filterFn(data, debouncedFilter.trim().toLowerCase());
    }

    const sortOption = _.find(sortOptions, o => sortOrder === o.value);
    if (sortOption) {
    }

    return result;
  }, [data, debouncedFilter, filterFn, sortOptions, sortOrder]);
  const visibleActivities = useMemo(() => {
    return activities?.slice(0, rowCount);
  }, [activities, rowCount]);

  let tableContent = null;
  const isDebounceActive = debouncedFilter !== filter;
  const tableBodyHeight = 600 - HEADER_HEIGHT - FOOTER_HEIGHT;

  switch (true) {
    case isDebounceActive:

    case status === 'idle':
      tableContent = (
        <TableContent
          title="  책을 검색해보세요"
          subtitle=" 새로운 책을 발견하고, 새로운 세상을 접해보세요. 새로운 책들이 여러분을
                기다리고 있습니다"
          svg={<FindBook className="w-[100%] h-[100%]" />}
        />
      );
      break;
    case status === 'pending':
      tableContent = (
        <div
          className="flex items-center justify-center"
          style={{ height: tableBodyHeight }}>
          <Spinner size={SPINNER_SIZE * 3} />
        </div>
      );
      break;

    case status === 'rejected':
      tableContent = (
        <TableContent
          title="에러가 발생했습니다. 다음에 다시 시도해주세요"
          subtitle="내일 다시 시도 해보세요"
          svg={<ErrorSVG className="w-[100%] h-[100%]" />}
        />
      );
      break;

    case data.length == 0:
      tableContent = (
        <TableContent
          title="찾으시는 책이 없습니다"
          subtitle="더 짧은 검색어로 검색해 보세요!"
          svg={<NoData className="w-[100%] h-[100%]" />}
        />
      );
      break;

    default: {
      const tableRowRenderer = rowRenderer ? rowRenderer : defaultRowRenderer;
      const isSelectable = !disabled && selectedIds !== undefined;
      tableContent = (
        <div>
          {visibleActivities?.map(datum =>
            tableRowRenderer({
              datum,
              isSelectable,
              onRowClick,
              selectedIds,
              clicked,
              handleClick,
            }),
          )}
        </div>
      );
    }
  }

  let footerText;
  const entriesWithUnit = formatEntries(data?.length);

  switch (true) {
    case isDebounceActive:
      footerText = `Sifting through ${entriesWithUnit}...`;
      break;
    case isLoading:
      footerText = DEFAULT_LOADING_FOOTER_PLACEHOLDER;
      break;
    case filter !== '': {
      const matchedRecords = formatEntries(activities.length);
      footerText = `Found ${matchedRecords} out of ${entriesWithUnit}`;
      break;
    }
    default:
      footerText = `Found ${data?.length == undefined ? 0 : data?.length}`;
  }

  return (
    <div className="h-full">
      <div className="h-full">{tableContent}</div>
      <div className="flex justify-end pr-4 font-semibold text-base"></div>
    </div>
  );
}
// flex justify-end font-semibold text-xs dark:text-neutral-400
export default React.memo(Table);

const DEFAULT_BUTTON_TEXT = 'Sort';
const DEFAULT_POPOVER_HEADER = 'Sort Order';

function TableSortButton<U, V>({ disabled, onSelect, sortOptions, sortOrder }) {
  let buttonText = DEFAULT_BUTTON_TEXT;
  const sortOption = _.find(sortOptions, option => sortOrder === option.value);
  if (sortOption) {
    buttonText = sortOption.buttonLabel;
  }

  return (
    <Popover
      isShown={disabled ? false : undefined}
      position="bottom-right"
      content={({ close }) => {
        return (
          <Menu>
            <Pane>
              <Heading size={100} className="px-14 py-4">
                {DEFAULT_POPOVER_HEADER}
              </Heading>
              <Pane>
                {_.map(sortOptions, option => (
                  <Menu.Option
                    key={option.value}
                    isSelected={option.value === sortOrder}
                    onSelect={() => {
                      close();
                      onSelect(option.value);
                    }}
                    secondaryText={option.optionSublabel}>
                    {option.optionLabel}
                  </Menu.Option>
                ))}
              </Pane>
            </Pane>
          </Menu>
        );
      }}
      statelessProps={{ className: 'table__sort-button--popover' }}>
      <Button
        appearance="minimal"
        disabled={disabled}
        iconBefore={SearchIcon}
        isActive={true}
        className="table__sort-button">
        <div className="mmd:hidden">{buttonText}</div>
      </Button>
    </Popover>
  );
}
