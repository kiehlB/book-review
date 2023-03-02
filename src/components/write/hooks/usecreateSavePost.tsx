import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';
import {
  Create_Post,
  Edit_Post,
  GET_Posts,
  Remove_Post,
} from '../../../lib/graphql/posts';
import { getPostBody, getPostId, getPostTitle } from '../../../store/book';

export default function useCreateSavePost() {
  const { auth } = useSelector((state: any) => state.auth);
  const [writePost] = useMutation(Create_Post, {});
  const [removePost] = useMutation(Remove_Post);
  const [editPost] = useMutation(Edit_Post, {});
  const client = useApolloClient();
  const dispatch = useDispatch();

  const { data, loading, fetchMore, refetch } = useQuery(GET_Posts, {
    variables: {
      username: auth?.username,
      istemp: true,
    },
    skip: !auth,
  });

  const posts = data?.posts;

  const ConfirmSave = async (id, title, body, tags, book) => {
    if (!title) {
      toast.error('제목 또는 내용이 비어있습니다.', {
        position: 'bottom-right',
      });
      return;
    }
    if (!id) {
      try {
        await writePost({
          variables: {
            id: id,
            title,
            body,
            tags: tags,
            is_temp: true,

            bookTitle: book?.title,
            bookContent: book?.contents,
            bookUrl: book?.thumbnail,
            bookIsbn: book?.isbn,
            bookAuthors: book?.authors,
          },

          update: async (proxy, { data: createPost }) => {
            dispatch(getPostId(createPost?.createPost.id));

            proxy?.writeQuery({
              query: GET_Posts,
              variables: {
                username: auth?.username,
                istemp: true,
              },
              data: {
                posts: [createPost?.createPost, ...posts],
              },
            });
          },
        });
        toast.success('포스트 저장 성공', {
          position: 'bottom-right',
        });
      } catch (e) {
        toast.error('포스트 저장 실패', {
          position: 'bottom-right',
        });
      }
    } else if (id && posts?.length !== 0) {
      try {
        await editPost({
          variables: {
            id: id,
            title,
            body,
            tags: tags,
            is_temp: true,

            bookTitle: book?.title,
            bookContent: book?.contents,
            bookUrl: book?.thumbnail,
            bookIsbn: book?.isbn,
            bookAuthors: book?.authors,
          },

          update: async (proxy, { data: editPost }) => {
            await refetch();
          },
        });
        toast.success('포스트 저장 성공', {
          position: 'bottom-right',
        });
      } catch (e) {
        toast.error('포스트 저장 실패', {
          position: 'bottom-right',
        });
      }
    } else if (id && posts?.length == 0) {
      try {
        await writePost({
          variables: {
            id: id,
            title,
            body,
            tags: tags,
            is_temp: true,

            bookTitle: book?.title,
            bookContent: book?.contents,
            bookUrl: book?.thumbnail,
            bookIsbn: book?.isbn,
            bookAuthors: book?.authors,
          },

          update: async (proxy, { data: createPost }) => {
            dispatch(getPostId(createPost?.createPost.id));

            proxy?.writeQuery({
              query: GET_Posts,
              variables: {
                username: auth?.username,
                istemp: true,
              },
              data: {
                posts: [createPost?.createPost, ...posts],
              },
            });
          },
        });
        toast.success('포스트 저장 성공', {
          position: 'bottom-right',
        });
      } catch (e) {
        toast.error('포스트 저장 실패', {
          position: 'bottom-right',
        });
      }
    }
  };

  const onConfirmRemove = async id => {
    if (!id) return;
    try {
      await removePost({
        variables: {
          id: id,
        },
      });
      client.writeQuery({
        query: GET_Posts,
        variables: {
          username: auth?.username,
          istemp: true,
        },
        data: {
          posts: data.posts.filter(p => p.id !== id),
        },
      });
      toast.success('포스트가 삭제되었습니다.', {
        position: 'bottom-right',
      });
    } catch (e) {
      toast.error('포스트 삭제 실패', {
        position: 'bottom-right',
      });
    }
  };

  const onConfirmSave = useDebouncedCallback(ConfirmSave, 200);

  return {
    onConfirmRemove,
    onConfirmSave,
    posts,
    loading,
  };
}
