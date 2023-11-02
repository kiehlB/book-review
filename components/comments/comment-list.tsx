import { Sub } from '../../types/apolloComponent';
import CommentItem from './comment-item';
import useCommentUpvote from './hooks/use-comment-upvote';

export type CommentListProps = {
  comments: Sub[];
  onRemove: (id: string) => void;
  isMine: boolean;
  currentId: string;
};

function CommentList({ comments, onRemove, isMine, currentId }: CommentListProps) {
  const { getId, onLikeToggle } = useCommentUpvote() as any;

  return (
    <>
      {(comments as any) &&
        [...comments]
          .sort((a: any, b: any) => b.upvotes - a.upvotes)
          ?.map(comment => (
            <CommentItem
              comment={comment}
              key={comment.id}
              ownComment={currentId}
              onRemove={onRemove}
              isMine={isMine}
              getId={getId}
              onLikeToggle={onLikeToggle}
            />
          ))}
    </>
  );
}

export default CommentList;
