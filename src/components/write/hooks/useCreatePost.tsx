import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post, Edit_Post } from '../../../lib/graphql/posts';
import { useDispatch } from 'react-redux';
import { getIsOpenSuccess } from '../../../store/book';
import { toast } from 'react-toastify';
import { checkEmpty } from '../../../lib/utils';

export default function useCreatePost() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [editPost] = useMutation(Edit_Post, {
    onCompleted({}) {
      dispatch(getIsOpenSuccess());
      router.push('/');
    },
  });
  const [createPost] = useMutation(Create_Post, {
    onCompleted({ signUp }) {
      dispatch(getIsOpenSuccess());
      router.push('/');
    },
  });

  const client = useApolloClient();

  const handleSubmit = async (
    e,
    id,
    title,
    body,
    tags,
    fileInputState,
    isPrivate,
    book,
  ) => {
    e.preventDefault();

    if (checkEmpty(title)) {
      toast.error('제목 또는 내용이 비어있습니다.', {
        position: 'bottom-right',
      });
      return;
    }

    if (id) {
      try {
        await editPost({
          variables: {
            id: id,
            title,
            body,
            tags: tags,
            is_temp: false,

            bookTitle: book?.title,
            bookContent: book?.contents,
            bookUrl: book?.thumbnail,
            bookIsbn: book?.isbn,
            bookAuthors: book?.authors,
          },
        });
        await client.resetStore();
      } catch (e) {
        toast.error('포스트 저장 실패', {
          position: 'bottom-right',
        });
      }
    } else if (!id) {
      try {
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
      } catch (e) {
        toast.error('포스트 저장 실패', {
          position: 'bottom-right',
        });
      }
    }
  };

  return {
    handleSubmit,
  };
}
