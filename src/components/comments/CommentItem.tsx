export type CommentItemProps = {
  comment: any;
};

function CommentItem({ comment }: CommentItemProps) {
  return (
    <>
      <div>{comment.text}</div>
    </>
  );
}

export default CommentItem;
