import { Sub } from '../../types/apolloComponent';
import CommentItem from './CommentItem';

export type CommentListProps = {
  comments: Sub[];
  onRemove: (id: string) => void;
  isMine: boolean;
  currentId: string;
};

function CommentList({ comments, onRemove, isMine, currentId }: CommentListProps) {
  return (
    <>
      {comments &&
        [...comments]
          .sort((a, b) => b.upvotes - a.upvotes)
          ?.map(comment => (
            <CommentItem
              comment={comment}
              key={comment.id}
              ownComment={currentId}
              onRemove={onRemove}
              isMine={isMine}
            />
          ))}
    </>
  );
}

export default CommentList;
