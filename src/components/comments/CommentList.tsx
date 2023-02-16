import CommentItem from './CommentItem';

export type CommentListProps = {
  comments: any;
};

function CommentList({ comments }: CommentListProps) {
  return (
    <>
      {comments.map(comment => (
        <CommentItem comment={comment} />
      ))}
    </>
  );
}

export default CommentList;
