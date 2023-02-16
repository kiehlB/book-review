import CommentList from './CommentList';
import CommentsWrite from './CommentWrite';

export type CommentsProps = {
  commentCount: any;
  comments: any;
  postId: any;
  isMine: any;
};

function Comments({ commentCount, postId, comments }: CommentsProps) {
  return (
    <>
      <CommentsWrite postId={postId} />
      <div>{commentCount}개의 댓글</div>
      <CommentList comments={comments} />
    </>
  );
}

export default Comments;
