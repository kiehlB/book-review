import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post, Edit_Post } from '../../../lib/graphql/posts';
import { useDispatch } from 'react-redux';
import {
  getBookInfoSuccess,
  getIsOpenSuccess,
  getPostBody,
  getPostId,
  getPostTags,
  getPostTitle,
  getThumbnail,
} from '../../../store/book';
import { toast } from 'react-toastify';
import { checkEmpty } from '../../../lib/utils';

export default function useCreatePost() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [editPost] = useMutation(Edit_Post, {
    onCompleted({}) {
      dispatch(getIsOpenSuccess());
      dispatch(getPostTitle(''));
      dispatch(getPostBody(''));
      dispatch(getPostTags([]));
      dispatch(getPostId(''));
      dispatch(getThumbnail(''));
      dispatch(getBookInfoSuccess(null));

      router.push('/');
    },
  });
  const [createPost] = useMutation(Create_Post, {
    onCompleted({}) {
      dispatch(getIsOpenSuccess());
      dispatch(getBookInfoSuccess(null));
      dispatch(getPostTitle(''));
      dispatch(getPostBody(''));
      dispatch(getPostTags([]));
      dispatch(getPostId(''));
      dispatch(getThumbnail(''));
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
    thumbnail,
  ) => {
    e.preventDefault();

    const postBodyReplace = body?.replace(/<[^>]+>/g, ' ')?.slice(0, 400);

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
            id,
            title: title,
            body: body,
            tags: tags,
            is_temp: false,
            thumbnail: fileInputState ? fileInputState : thumbnail,
            is_private: isPrivate,
            postbody: postBodyReplace,
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
            thumbnail: fileInputState ? fileInputState : thumbnail,
            is_private: isPrivate,
            postbody: postBodyReplace,
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
