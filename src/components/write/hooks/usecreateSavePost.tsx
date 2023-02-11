import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Create_Post,
  Edit_Post,
  GET_Posts,
  Remove_Post,
} from '../../../lib/graphql/posts';

export default function useCreateSavePost() {
  const { auth } = useSelector((state: any) => state.auth);
  const [writePost] = useMutation(Create_Post, {});
  const [removePost] = useMutation(Remove_Post);
  const [editPost] = useMutation(Edit_Post, {});
  const client = useApolloClient();

  const { data, loading, fetchMore } = useQuery(GET_Posts, {
    variables: {
      username: auth.username,
      istemp: true,
    },
    skip: !auth,
    notifyOnNetworkStatusChange: true,
  });

  const posts = data?.posts;

  const onConfirmSave = async (id, title, body, tags = [], book) => {
    if (!title) {
      toast.error('제목 또는 내용이 비어있습니다.');
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
            proxy?.writeQuery({
              query: GET_Posts,
              variables: {
                username: auth.username,
                istemp: true,
              },
              data: {
                posts: [createPost?.createPost, ...posts],
              },
            });
          },
        });
        toast.success('포스트 저장 성공');
      } catch (e) {
        toast.error('포스트 저장 실패');
      }
    } else if (id) {
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
            const findData = posts.find(el => el.id == id);

            proxy?.writeQuery({
              query: GET_Posts,
              variables: {
                username: auth.username,
                temp_only: true,
              },
              data: {
                posts: [findData == editPost.editPost],
              },
            });
          },
        });
        toast.success('포스트 저장 성공');
      } catch (e) {
        toast.error('포스트 저장 실패');
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
          username: auth.username,
          istemp: true,
        },
        data: {
          posts: data.posts.filter(p => p.id !== id),
        },
      });
      toast.success('포스트가 삭제되었습니다.');
    } catch (e) {
      toast.error('포스트 삭제 실패');
    }
  };

  return {
    onConfirmRemove,
    onConfirmSave,
    posts,
    loading,
  };
}
