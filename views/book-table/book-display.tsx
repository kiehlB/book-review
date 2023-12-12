import { BookData } from '@/store/book';
import React from 'react';
import { MdClose } from 'react-icons/md';

interface BookDisplayProps {
  book: BookData | null;
  onClearBook: (e: BookData | null) => void;
  isMobile: boolean;
}

const BookDisplay: React.FC<BookDisplayProps> = ({ book, onClearBook, isMobile }) => {
  return (
    <div className="ml-2 flex">
      {book?.cover && (
        <img
          src={book.cover}
          width="45px"
          height={isMobile ? '60px' : '70px'}
          className={isMobile ? 'mxs:hidden' : ''}
        />
      )}
      <div className={`ml-2 ${isMobile ? 'w-full max-w-[100px] truncate text-sm' : ''}`}>
        {book?.title}
      </div>
      {book?.title && (
        <MdClose
          onClick={() => onClearBook(null)}
          tabIndex={1}
          size={20}
          color="#f31260"
          className="ml-1 rounded-full transition-all hover:bg-[#cfd2e2] hover:p-1"
        />
      )}
    </div>
  );
};

export default BookDisplay;
