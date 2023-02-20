import { useMutation } from '@apollo/client';
import React from 'react';
import useInput from '../../hooks/useIntput';
import { EditSub } from '../../lib/graphql/comments';
import CommentsWrite from './CommentWrite';

export interface CommentEditProps {
  id: string;
  defaultText: string;
  onCancel: () => any;
}

const CommentEdit: React.FC<CommentEditProps> = ({ id, defaultText, onCancel }) => {
  const [comment, onChange] = useInput(defaultText);
  const [editComment] = useMutation(EditSub);

  const onWrite = async () => {
    await editComment({
      variables: {
        id,
        text: comment,
      },
    });
    onCancel();
  };

  return (
    <CommentsWrite
      comment={comment}
      onChange={onChange}
      onWrite={onWrite}
      onCancel={onCancel}
      edit
    />
  );
};

export default CommentEdit;
