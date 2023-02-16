import useCreateCommentWrite from './hooks/useCommentWrite';

export type CommentsWriteProps = {
  postId: any;
};

function CommentsWrite({ postId }: CommentsWriteProps) {
  const { onWrite, comment, onChange } = useCreateCommentWrite(postId);

  return (
    <>
      <input value={comment} onChange={e => onChange(e)} />

      <button onClick={onWrite}>ㄱㄱ</button>
    </>
  );
}

export default CommentsWrite;
