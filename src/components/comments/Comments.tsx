import { Sub } from '../../types/apolloComponent';
import PopUpContainer from '../common/PopupContainer';
import CommentList from './CommentList';
import CommentsWrite from './CommentWrite';
import useCreateCommentWrite from './hooks/useCommentWrite';

export type CommentsProps = {
  commentCount: number;
  comments: Sub[];
  postId: string;
  isMine: boolean;
};

function Comments({ commentCount, postId, comments }: CommentsProps) {
  const {
    onWrite,
    comment,
    onChange,
    onConfirmRemove,
    onRemove,
    askRemove,
    onToggleAskRemove,
  } = useCreateCommentWrite(postId);

  return (
    <div className="mt-24">
      <div className="text-[#212529] text-lg font-bold mb-4">{commentCount}개의 댓글</div>
      <CommentsWrite
        postId={postId}
        comment={comment}
        onChange={onChange}
        onWrite={onWrite}
      />
      <div className="mt-[4rem]">
        <CommentList comments={comments} onRemove={onRemove} />
      </div>

      <PopUpContainer
        visible={askRemove}
        title="댓글 삭제"
        onConfirm={onConfirmRemove}
        onCancel={onToggleAskRemove}>
        댓글을 삭제하시겠습니까?
      </PopUpContainer>
    </div>
  );
}

export default Comments;
