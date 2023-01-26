import classNames from 'classnames';
import { Avatar, Table as EvergreenTable } from 'evergreen-ui';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { BASE_SIZE, ICON_SIZE_MD } from '../../lib/constants';
import Table from './Table';

interface HistoryTableProps {
  data?: any;
  autoFocus?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  selectedRecordIds?: number[];
  onRowClick?: any;
}

enum HistoryTableSortOrder {
  DurationAscending = 'DURATION_ASCENDING',
  DurationDescending = 'DURATION_DESCENDING',
  TimeAscending = 'TIME_ASCENDING',
  TimeDescending = 'TIME_DESCENDING',
}

const ROW_HEIGHT = BASE_SIZE * 20;
const DEFAULT_SORT_ORDER = 'TIME_DESCENDING' as HistoryTableSortOrder;
const SORT_OPTIONS = [
  {
    buttonLabel: '정확도순 (accuracy)',
    optionLabel: '정확도순',
    optionSublabel: 'Ascending',
    value: 'DURATION_ASCENDING' as HistoryTableSortOrder,
    sortFn: data =>
      data
        .slice()
        .sort((a, b) => (a.endTime - a.startTime > b.endTime - b.startTime ? 1 : -1)),
  },
  {
    buttonLabel: '최신순 (recency)',
    optionLabel: '최신순',
    optionSublabel: 'Descending',
    value: 'DURATION_DESCENDING' as HistoryTableSortOrder,
    sortFn: data =>
      data
        .slice()
        .sort((a, b) => (a.endTime - a.startTime > b.endTime - b.startTime ? -1 : 1)),
  },
  {
    buttonLabel: '기본값 (accuracy)',
    optionLabel: '기본값',
    optionSublabel: 'Ascending',
    value: 'TIME_ASCENDING' as HistoryTableSortOrder,
    sortFn: data => data.slice().sort((a, b) => (a.startTime > b.startTime ? 1 : -1)),
  },
];
const TITLE_PLACEHOLDER = '-';

function filterActivityRecords(data, filter: string) {
  return data?.filter(
    record =>
      record.url.toLowerCase().includes(filter) ||
      record.title.toLowerCase().includes(filter),
  );
}

function formatRecordString(count: number) {
  return `${count?.toLocaleString('en-US')} ${count > 1 ? 'records' : 'record'}`;
}

export const HistoryTableRow = ({ datum, isSelectable, onRowClick, selectedIds }) => {
  return (
    <EvergreenTable.Row
      className=""
      data-activity-id={datum.title}
      height={ROW_HEIGHT}
      key={datum.title}
      onClick={isSelectable && onRowClick ? () => onRowClick(datum) : undefined}>
      <EvergreenTable.Cell
        display="flex"
        alignItems="center"
        flexGrow={80}
        className="dark:bg-[#1E1E1E]">
        <img src={datum.thumbnail} width="82px" height={116} />

        <div className="ml-3 flex flex-col text-xs truncate whitespace-nowrap overflow-hidden dark:text-[#D9D9D9] ">
          <strong className=" ">{datum.title || TITLE_PLACEHOLDER}</strong>
          <ExternalLink url={datum.url} />
        </div>
      </EvergreenTable.Cell>
      <EvergreenTable.Cell
        display="flex"
        alignItems="center"
        flexGrow={20}
        className="flex justify-end text-xs dark:bg-[#1E1E1E]">
        <div className="flex flex-col truncate whitespace-nowrap overflow-hidden dark:text-[#D9D9D9] "></div>
      </EvergreenTable.Cell>
    </EvergreenTable.Row>
  );
};

const BooksTableContainer = ({
  autoFocus,
  disabled,
  isLoading,
  onRowClick,
  selectedRecordIds,
  data,
}: HistoryTableProps) => {
  return (
    <Table
      autoFocus={autoFocus}
      data={data}
      defaultSortOrder={DEFAULT_SORT_ORDER}
      disabled={disabled}
      filterFn={filterActivityRecords}
      filterPlaceholder="검색 결과가 없습니다"
      formatEntries={formatRecordString}
      isLoading={isLoading}
      rowHeight={ROW_HEIGHT}
      rowRenderer={HistoryTableRow}
      onRowClick={onRowClick}
      selectedIds={selectedRecordIds}
      sortOptions={SORT_OPTIONS}
    />
  );
};

const ExternalLink = props => {
  return (
    <span className={classNames('external-link', props.className)} style={props.style}>
      {props.iconSrc && (
        <img className="external-link__icon" alt={props.iconAlt} src={props.iconSrc} />
      )}
      <a href={props.url} title={props.title || props.url} target="none">
        {props.children || props.url}
      </a>
    </span>
  );
};

export default React.memo(BooksTableContainer);
