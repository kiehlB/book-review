import useCreateCommentWrite from './hooks/useCommentWrite';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { Button } from '../common/Button';

export type CommentsWriteProps = {
  postId?: any;
  comment?: any;
  onChange?: any;
  onWrite?: any;
};

function CommentsWrite({ postId, comment, onChange, onWrite }: CommentsWriteProps) {
  return (
    <div className="flex items-end flex-col">
      <StyledTextarea
        value={comment}
        onChange={e => onChange(e)}
        placeholder="댓글을 작성하세요"
      />

      <div className="flex">
        <button className="mr-4 text-sm py-[10px] rounded-3xl text-[#181A20] cursor-pointer hover:text-[#5b646d] font-semibold">
          취소
        </button>
        <button
          onClick={onWrite}
          className="text-sm px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] cursor-pointer hover:text-[#5b646d] font-semibold">
          완료
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
  border: 1px solid #f1f3f5;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  line-height: 1.75;
  background-color: #0000000d;
`;
