'use client';

import { Comments, CommentsTypes, Maybe } from '@/types/apolloComponent';
import CommentList from './comment-list';
import CommentsWrite from './comment-write';
import useCreateCommentWrite from './hooks/use-comment-write';
import PopUpContainer from '@/components/popup-container';

export type CommentsProps = {
  commentCount: number;
  comments: Maybe<Comments>[];
  postId: string;
  isMine: boolean;
  currentId: string | undefined;
  handleRefetch: () => void;
};

function Comments({
  commentCount,
  postId,
  comments,
  isMine,
  currentId,
  handleRefetch,
}: CommentsProps) {
  const {
    onWrite,
    comment,
    onChange,
    onConfirmRemove,
    onRemove,
    askRemove,
    onToggleAskRemove,
  } = useCreateCommentWrite(postId, handleRefetch, currentId);

  return (
    <div className="mt-32">
      <span className="mb-4 text-lg font-bold text-[#212529] dark:text-[#ececec]">
        {commentCount}개의 댓글
      </span>
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
          handleRefetch={handleRefetch}
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
