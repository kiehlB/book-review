import { Button, Spinner, Table as EvergreenTable, SearchIcon } from 'evergreen-ui';
import _ from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import useClientDimensions from '../../hooks/useClientDimensions';
import { Heading, Menu, Pane, Popover } from 'evergreen-ui';

import defaultRowRenderer, { DEFAULT_TABLE_ROW_HEIGHT } from './DefaultTableRow';
import { BASE_SIZE, SPINNER_SIZE } from '../../lib/constants';

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
}) {
  console.log('render');

  const [rowCount, setRowCount] = useState(INITIAL_ROW_COUNT);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);
  const [debouncedFilter] = useDebounce(filter, 500);
  const handleFilterChange = useCallback(setFilter, []);
  const handleScroll = useCallback(
    (scrollTop: number) => {
      const visibleRowCount = 600 / rowHeight;
      const viewedRowCount = scrollTop / rowHeight + visibleRowCount;
      if (viewedRowCount + visibleRowCount >= rowCount) {
        setRowCount(rowCount + ROWS_TO_LOAD_PER_BATCH);
      }
    },
    [rowCount, rowHeight, setRowCount],
  ) as any;
  const activities = useMemo(() => {
    let result = data;

    if (filterFn) {
      result = filterFn(data, debouncedFilter.trim().toLowerCase());
    }

    const sortOption = _.find(sortOptions, o => sortOrder === o.value);
    if (sortOption) {
      result = sortOption.sortFn(result);
    }

    return result;
  }, [data, debouncedFilter, filterFn, sortOptions, sortOrder]);
  const visibleActivities = useMemo(() => {
    return activities.slice(0, rowCount);
  }, [activities, rowCount]);

  let tableContent = null;
  const isDebounceActive = debouncedFilter !== filter;
  const tableBodyHeight = 600 - HEADER_HEIGHT - FOOTER_HEIGHT;

  switch (true) {
    case isDebounceActive:
    case isLoading:
      tableContent = (
        <div className="" style={{ height: tableBodyHeight }}>
          <Spinner size={SPINNER_SIZE} />
        </div>
      );
      break;
    case visibleActivities.length === 0:
      tableContent = (
        <div className="" style={{ height: tableBodyHeight }}>
          {filter === '' ? filterPlaceholder : 'No matches found'}
        </div>
      );
      break;
    default: {
      const tableRowRenderer = rowRenderer ? rowRenderer : defaultRowRenderer;
      const isSelectable = !disabled && selectedIds !== undefined;
      tableContent = (
        <EvergreenTable.VirtualBody
          allowAutoHeight={false}
          className=""
          estimatedItemSize={rowHeight}
          height={tableBodyHeight}
          onScroll={handleScroll}
          overscanCount={Math.round(600 / rowHeight) * 2}
          useAverageAutoHeightEstimation={false}>
          {visibleActivities.map(datum =>
            tableRowRenderer({
              datum,
              isSelectable,
              onRowClick,
              selectedIds,
            }),
          )}
        </EvergreenTable.VirtualBody>
      );
    }
  }

  let footerText;
  const entriesWithUnit = formatEntries(data.length);
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
      footerText = `Found ${entriesWithUnit}`;
  }

  return (
    <div className="h-full border shadow-md  rounded-md bg-white dark:bg-[#1E1E1E]">
      <EvergreenTable>
        <EvergreenTable.Head height={HEADER_HEIGHT}>
          {filterFn && (
            <EvergreenTable.SearchHeaderCell
              autoFocus={autoFocus}
              flexGrow={100}
              onChange={!disabled ? handleFilterChange : undefined}
              value={filter}
            />
          )}
          {sortOptions && sortOptions.length > 0 && (
            <TableSortButton
              disabled={disabled}
              onSelect={setSortOrder}
              sortOrder={sortOrder}
              sortOptions={sortOptions}
            />
          )}
        </EvergreenTable.Head>
        <div className="">{tableContent}</div>
        <EvergreenTable.Cell
          height={FOOTER_HEIGHT}
          className="flex justify-end font-semibold text-xs dark:text-neutral-400">
          <div>{footerText}</div>
        </EvergreenTable.Cell>
      </EvergreenTable>
    </div>
  );
}

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
