import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post } from '../../../lib/graphql/posts';

export default function useEditor2() {
  const router = useRouter();
  const [createPost] = useMutation(Create_Post);

  const handleSubmit = async (e, a) => {
    e.preventDefault();

    createPost({
      variables: {
        title: 'HELLO',
        body: a,
        tags: ['asd'],
      },
    });
  };

  return {
    handleSubmit,
  };
}
