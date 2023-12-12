import React from 'react';
import { BookData } from '@/store/book';
import { ArrowLink } from '@/components/arrow-button';

interface BookNavigationProps {
  book: BookData | null;
  onClearBook: (e: BookData | null) => void;
  onSkip: () => void;
  onNext: () => void;
  nextLink: string;
  isMobile?: boolean;
}

const BookNavigation: React.FC<BookNavigationProps> = ({
  book,
  onNext,
  nextLink,
  isMobile = false,
}) => (
  <>
    <div className="flex">
      {book?.title ? (
        <ArrowLink
          onClick={onNext}
          href={nextLink}
          className={isMobile ? 'mr-2 pl-6 mxs:pl-2' : ''}>
          다음
        </ArrowLink>
      ) : (
        <span className={isMobile ? 'mr-2 pl-6 text-gray-500 mxs:pl-2' : 'text-gray-500'}>
          다음
        </span>
      )}
    </div>
  </>
);

export default BookNavigation;
