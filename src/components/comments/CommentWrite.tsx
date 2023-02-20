import useCreateCommentWrite from './hooks/useCommentWrite';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { Button } from '../common/Button';
import { useSelector } from 'react-redux';

export type CommentsWriteProps = {
  postId?: any;
  comment?: any;
  onChange?: any;
  onWrite?: any;
  onCancel?: any;
  edit?: any;
};

function CommentsWrite({
  postId,
  comment,
  onChange,
  onWrite,
  onCancel,
  edit,
}: CommentsWriteProps) {
  const { auth } = useSelector((state: any) => state.auth);
  return (
    <div className="flex items-end flex-col">
      <StyledTextarea
        value={comment}
        onChange={e => onChange(e)}
        placeholder="댓글을 작성하세요"
        className="border border-[#f1f3f5] dark:border-none bg-[#0000000d] dark:bg-[#2b2d31] dark:text-[#ececec] w-full"
      />

      <div className="flex">
        {onCancel && (
          <button
            onClick={onCancel}
            className="mr-4 text-sm py-[10px] rounded-3xl text-[#181A20] cursor-pointer hover:text-[#5b646d] font-semibold">
            취소
          </button>
        )}

        <button
          onClick={() => {
            {
              onCancel && auth ? onCancel() : '';
            }
            onWrite();
          }}
          className="text-sm px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] cursor-pointer hover:text-[#5b646d] font-semibold">
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
