import { Sub } from '../../types/apolloComponent';
import PopUpContainer from '../common/PopupContainer';
import CommentList from './CommentList';
import CommentsWrite from './CommentWrite';
import useCommentUpvote from './hooks/useCommentUpvote';
import useCreateCommentWrite from './hooks/useCommentWrite';

export type CommentsProps = {
  commentCount: number;
  comments: Sub[];
  postId: string;
  isMine: boolean;
  currentId: string;
};

function Comments({ commentCount, postId, comments, isMine, currentId }: CommentsProps) {
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
      <div className="text-[#212529] text-lg font-bold mb-4 dark:text-[#ececec]">
        {commentCount}개의 댓글
      </div>
      <CommentsWrite
        postId={postId}
        comment={comment}
        onChange={onChange}
        onWrite={onWrite}
      />
      <div className="mt-[4rem]">
        <CommentList
          comments={comments}
          onRemove={onRemove}
          isMine={isMine}
          currentId={currentId}
        />
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
