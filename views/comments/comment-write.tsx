'use client';

import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { Maybe } from '@/types/apolloComponent';

export type CommentsWriteProps = {
  postId?: Maybe<string> | undefined;
  comment?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onWrite?: () => void;
  onCancel?: () => void;
  edit?: boolean;
};

function CommentsWrite({
  postId,
  comment,
  onChange,
  onWrite,
  onCancel,

  edit,
}: CommentsWriteProps) {
  return (
    <div className="mt-2 flex flex-col items-end">
      <StyledTextarea
        value={comment}
        onChange={onChange}
        placeholder="댓글을 작성하세요"
        className="w-full border border-[#f1f3f5] bg-[#0000000d] dark:border-none dark:bg-[#2b2d31] dark:text-[#ececec]"
      />

      <div className="flex">
        {onCancel && (
          <button
            onClick={onCancel}
            className="mr-4 cursor-pointer rounded-3xl py-[10px] text-sm font-semibold text-[#181A20] hover:text-[#5b646d] dark:text-[#cfcfcf]">
            취소
          </button>
        )}

        <button
          onClick={onWrite}
          className="cursor-pointer rounded-3xl bg-[#FCD535] px-[20px] py-[10px] text-sm font-semibold text-[#181A20] hover:text-[#5b646d]">
          {edit ? '수정' : '작성'}
        </button>
      </div>
    </div>
  );
}

export default CommentsWrite;
const StyledTextarea = styled(TextareaAutosize)`
  resize: none;
  padding: 1rem;
  padding-bottom: 1.5rem;
  outline: none;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  line-height: 1.75;
`;
