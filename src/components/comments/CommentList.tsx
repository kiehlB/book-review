import CommentItem from './CommentItem';

export type CommentListProps = {
  comments: any;
  onRemove: any;
};

function CommentList({ comments, onRemove }: CommentListProps) {
  return (
    <>
      {comments &&
        comments?.map(comment => (
          <CommentItem comment={comment} key={comment.id} onRemove={onRemove} />
        ))}
    </>
  );
}

export default CommentList;
