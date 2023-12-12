import { formatDate } from '@/lib/utils';
import { BookData } from '@/store/book';
import clsx from 'clsx';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface HistoryTableRowProps {
  datum: BookData;
  clicked: BookData | null;
  handleClick: (item: BookData) => void;
  setBook: (book: BookData) => void;
}
const TITLE_PLACEHOLDER = '-';

const HistoryTableRow: React.FC<HistoryTableRowProps> = ({
  datum,
  clicked,
  handleClick,
  setBook,
}) => {
  return (
    <div
      className={clsx(
        'border-b border-[#BDC1C6] p-4 transition-all dark:border-[#4B4B4B]',
        clicked?.isbn == datum?.isbn
          ? 'bg-[#E9E9E8] dark:bg-dark-300'
          : 'bg-[#fff] hover:bg-[#E9E9E9] dark:bg-dark-400 dark:hover:bg-dark-300',
      )}
      data-activity-id={datum.isbn}
      key={uuidv4()}
      onClick={() => {
        setBook(datum);
        handleClick(datum);
      }}>
      <div className="flex">
        {datum.cover ? (
          <img src={datum.cover} width="82px" height="116px" className="min-h-[116px]" />
        ) : (
          <div className="flex h-[116px] w-[92px] items-center justify-center border-2 text-xs text-[#121212] dark:text-[#fff]">
            이미지없음
          </div>
        )}

        <div className="ml-5 flex w-full flex-col overflow-hidden truncate whitespace-nowrap text-xs">
          <div className="flex w-full justify-between">
            <strong className="text-xl dark:text-[#e4e5e7] mmd:text-base">
              {datum.title || TITLE_PLACEHOLDER}
            </strong>
            <div className="mr-2 dark:text-[#e4e5e7] mxs:hidden">
              {formatDate(datum.pubDate)}
            </div>
          </div>
          <div className="py-[0.5rem] dark:text-[#e4e5e7]">저자: {datum.author}</div>
          <div className="">
            <div className="dark:text-[#e4e5e7]">{datum.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HistoryTableRow);
