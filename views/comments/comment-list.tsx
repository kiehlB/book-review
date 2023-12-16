'use client';

import CommentItem from './comment-item';
import useCommentUpvote from './hooks/use-comment-upvote';
import { Comments, Maybe } from '@/types/apolloComponent';

export type CommentListProps = {
  comments: Maybe<Comments>[];
  onRemove: (id: string) => void;
  isMine: boolean;
  currentId: string | undefined;
  handleRefetch: () => void;
};

function CommentList({
  comments,
  onRemove,
  isMine,
  currentId,
  handleRefetch,
}: CommentListProps) {
  const { getId, onLikeToggle } = useCommentUpvote();

  return (
    <>
      {comments &&
        [...comments]
          .sort((a, b) => b!.upvotes! - a!.upvotes!)
          ?.map(comment => (
            <CommentItem
              comment={comment}
              key={comment!.id}
              ownComment={currentId}
              onRemove={onRemove}
              isMine={isMine}
              getId={getId}
              onLikeToggle={onLikeToggle}
              handleRefetch={handleRefetch}
            />
          ))}
    </>
  );
}

export default CommentList;
