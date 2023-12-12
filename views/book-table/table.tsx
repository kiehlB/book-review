import { BASE_SIZE } from '@/lib/constants';
import React, { useCallback, useId, useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import TableContent from './table-content';
import HistoryTableRow from './history-table-row';
import useBookStore, { BookData } from '@/store/book';
import { ErrorSVG, FindBook, NoData } from '@/components/icons';

interface TableProps<T> {
  data: BookData[] | null | undefined;
  defaultSortOrder?: string | null;
  disabled?: boolean;
  filterFn?: (data: T[], filter: string) => T[];
  filterPlaceholder?: string;
  isLoading?: boolean;
  onRowClick?: (item: T) => void;
  rowHeight?: number;
  status?: string;
}

const DEFAULT_LOADING_FOOTER_PLACEHOLDER = 'Loading entries...';
const FOOTER_HEIGHT = BASE_SIZE * 4;
const HEADER_HEIGHT = BASE_SIZE * 4;
const INITIAL_ROW_COUNT = 50;

export function Table<T>({ data, status }: TableProps<T>) {
  const [rowCount, setRowCount] = useState(INITIAL_ROW_COUNT);
  const { setBook } = useBookStore();
  const [filter, setFilter] = useState('');
  const [debouncedFilter] = useDebounce(filter, 500);
  const [clicked, setClicked] = useState<BookData | null>(null);

  const handleClick = (datum: BookData | null) => {
    setClicked(datum);
  };

  const activities = useMemo(() => {
    let result = data;

    return result;
  }, [data, debouncedFilter]);

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
          svg={<FindBook className="h-[100%] w-[100%]" />}
        />
      );
      break;
    case status === 'pending':
      tableContent = (
        <div
          className="flex items-center justify-center"
          style={{ height: tableBodyHeight }}>
          <div className="bookshelf_wrapper">
            <ul className="books_list">
              <li className="book_item first"></li>
              <li className="book_item second"></li>
              <li className="book_item third"></li>
              <li className="book_item fourth"></li>
              <li className="book_item fifth"></li>
              <li className="book_item sixth"></li>
            </ul>
            <div className="loadingShelf"></div>
          </div>
        </div>
      );
      break;

    case status === 'rejected':
      tableContent = (
        <TableContent
          title="에러가 발생했습니다. 다음에 다시 시도해주세요"
          subtitle="내일 다시 시도 해보세요"
          svg={<ErrorSVG className="h-[100%] w-[100%]" />}
        />
      );
      break;

    case data?.length == 0:
      tableContent = (
        <TableContent
          title="찾으시는 책이 없습니다"
          subtitle="더 짧은 검색어로 검색해 보세요!"
          svg={<NoData className="h-[100%] w-[100%]" />}
        />
      );
      break;

    default: {
      tableContent = (
        <div className="w-[1190px] pb-14">
          {visibleActivities?.map((datum: BookData) => (
            <HistoryTableRow
              key={datum.isbn}
              datum={datum}
              clicked={clicked}
              handleClick={handleClick}
              setBook={setBook}
            />
          ))}
        </div>
      );
    }
  }

  return (
    <div className="h-full">
      <div className="h-full">{tableContent}</div>{' '}
    </div>
  );
}
// flex justify-end font-semibold text-xs dark:text-neutral-400
export default React.memo(Table);
