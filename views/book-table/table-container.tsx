import React, { useId } from 'react';
import { BASE_SIZE } from '@/lib/constants';
import { Table } from './table';
import { BookData } from '@/store/book';

interface HistoryTableProps {
  data?: BookData[] | null;
  autoFocus?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  selectedRecordIds?: number[];
  onRowClick?: () => void;
  status: string;
}

enum HistoryTableSortOrder {
  DurationAscending = 'DURATION_ASCENDING',
  DurationDescending = 'DURATION_DESCENDING',
  TimeAscending = 'TIME_ASCENDING',
  TimeDescending = 'TIME_DESCENDING',
}

const ROW_HEIGHT = BASE_SIZE * 20;
const DEFAULT_SORT_ORDER = 'TIME_DESCENDING' as HistoryTableSortOrder;

const BooksTableContainer = ({
  disabled,
  isLoading,
  onRowClick,
  selectedRecordIds,
  data,
  status,
}: HistoryTableProps) => {
  return (
    <Table
      data={data}
      defaultSortOrder={DEFAULT_SORT_ORDER}
      disabled={disabled}
      filterPlaceholder="검색 결과가 없습니다"
      isLoading={isLoading}
      rowHeight={ROW_HEIGHT}
      onRowClick={onRowClick}
      status={status}
    />
  );
};

export default React.memo(BooksTableContainer);
