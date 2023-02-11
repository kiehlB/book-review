import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post } from '../../../lib/graphql/posts';
import { useDispatch } from 'react-redux';
import { getIsOpenSuccess } from '../../../store/book';

export default function useCreatePost() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [createPost] = useMutation(Create_Post, {
    onCompleted({ signUp }) {
      dispatch(getIsOpenSuccess());
      router.push('/');
    },
  });

  const client = useApolloClient();

  const handleSubmit = async (e, title, body, tags, fileInputState, isPrivate, book) => {
    e.preventDefault();

    createPost({
      variables: {
        title: title,
        body: body,
        tags: tags,
        is_temp: false,
        thumbnail: fileInputState,
        is_private: isPrivate,

        bookTitle: book?.title,
        bookContent: book?.contents,
        bookUrl: book?.thumbnail,
        bookIsbn: book?.isbn,
        bookAuthors: book?.authors,
      },
    });
    await client.resetStore();
  };

  return {
    handleSubmit,
  };
}
