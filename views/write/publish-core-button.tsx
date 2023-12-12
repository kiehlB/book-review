import React from 'react';
import useBookStore, { BookData } from '@/store/book';
import useCreatePost from './hooks/use-create-post';
import useModalStore from '@/store/modal';
import { Button } from '@/components/button';

export type PublishCoreButtonProps = {
  fileInputState: string;
  isPrivate: boolean;
  book: BookData | null;
};

function PublishCoreButton({ fileInputState, isPrivate, book }: PublishCoreButtonProps) {
  const { publishClose, setPublishClose } = useModalStore();

  const { body, tags, postId, title, thumbnail, setIsOpen } = useBookStore(state => ({
    body: state.body,
    tags: state.tags,
    postId: state.postId,
    title: state.title,
    thumbnail: state.thumbnail,
    setIsOpen: state.setIsOpen,
  }));

  const { handleSubmit } = useCreatePost();

  return (
    <div className="flex justify-end">
      <Button
        size="medium"
        className="font-bold text-[#191919] dark:text-darkText"
        onClick={() => setPublishClose(!publishClose)}>
        취소
      </Button>
      <Button
        size="medium"
        className="rounded border border-[#FCd545] bg-[#FCd545] font-semibold text-[#191919] shadow-sm"
        onClick={e => {
          handleSubmit(
            e,
            postId,
            title,
            body,
            tags,
            fileInputState,
            isPrivate,
            book,
            thumbnail,
          );
        }}>
        작성 완료
      </Button>
    </div>
  );
}

export default React.memo(PublishCoreButton);
