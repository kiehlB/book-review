import { useMutation, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { CreateComment, GET_SubComment } from '../../lib/graphql/comments';
import { RootState } from '../../store/rootReducer';
import { Sub } from '../../types/apolloComponent';
import CommentItem from './CommentItem';
import useCommentUpvote from './hooks/useCommentUpvote';
import useDeleteComment from './hooks/useDeleteSub';

export type CommentListProps = {
  comments: Sub[];
  onRemove?: (id: string) => void;
  isMine: boolean;
  currentId: string;
};

function CommentList({ comments, onRemove, isMine, currentId }: CommentListProps) {
  const { onLikeToggle } = useCommentUpvote();

  return (
    <>
      {comments &&
        [...comments]
          .sort((a, b) => b.upvotes - a.upvotes)
          ?.map(comment => (
            <CommentItem
              onLikeToggle={onLikeToggle}
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
