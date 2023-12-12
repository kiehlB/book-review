'use client';

import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import CommentsWrite from './comment-write';
import useInput from '@/hooks/use-intput';
import { EditComments } from '@/lib/graphql/comments';

export interface CommentEditProps {
  id: string;
  defaultText: string;
  onCancel: () => void;
}

const CommentEdit: React.FC<CommentEditProps> = ({ id, defaultText, onCancel }) => {
  const [comment, onChange] = useInput(defaultText);
  const [editComment] = useMutation(EditComments, {
    onCompleted({}) {
      onCancel();
    },
  });

  const onWrite = async () => {
    await editComment({
      variables: {
        id,
        text: comment,
      },
    });
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
