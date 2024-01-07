'use client';

import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';
import {
  Create_Post,
  Edit_Post,
  GET_Posts,
  Remove_Post,
} from '../../../lib/graphql/posts';
import {
  CreatePostMutation,
  EditPostMutation,
  Post,
  RemovePostMutation,
} from '../../../types/apolloComponent';
import useBookStore, { BookData } from '@/store/book';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

export default function useCreateSavePost(userId: string | null) {
  const { setPostId } = useBookStore(state => ({
    postId: state.postId,
    setPostId: state.setPostId,
  }));

  const [writePost] = useMutation<CreatePostMutation>(Create_Post, {});
  const [removePost] = useMutation<RemovePostMutation>(Remove_Post);
  const [editPost] = useMutation<EditPostMutation>(Edit_Post, {});
  const client = useApolloClient();

  const { data, refetch } = useSuspenseQuery(GET_Posts, {
    variables: {
      id: userId,
      istemp: true,
    },
    skip: !userId,
  });

  const posts = (data as { posts: Post[] })?.posts;

  const ConfirmSave = async (
    id: string | null,
    title: string,
    body: string,
    tags: string[],
    book: BookData | null,
  ) => {
    if (!title) {
      toast.error('제목 또는 내용이 비어있습니다.', {
        position: 'bottom-right',
      });
      return;
    }

    if (!id) {
      try {
        writePost({
          variables: {
            id: id,
            title,
            body,
            tags: tags,
            is_temp: true,
            bookTitle: book?.title,
            bookContent: book?.description,
            bookUrl: book?.cover,
            bookIsbn: book?.isbn,
            bookAuthors: book?.author,
            publisher: book?.publisher,
            pubDate: book?.pubDate,
            customerReviewRank: book?.customerReviewRank,
            priceStandard: book?.priceStandard,
            categoryName: book?.categoryName,
            categoryId: book?.categoryId,
          },

          update: async (proxy, { data: createPost }) => {
            if (createPost && createPost.createPost && createPost.createPost.id) {
              setPostId(createPost.createPost.id);
            }

            proxy?.writeQuery({
              query: GET_Posts,
              variables: {
                id: userId,
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
            bookContent: book?.description,
            bookUrl: book?.cover,
            bookIsbn: book?.isbn,
            bookAuthors: book?.author,
            publisher: book?.publisher,
            pubDate: book?.pubDate,
            customerReviewRank: book?.customerReviewRank,
            priceStandard: book?.priceStandard,
            categoryName: book?.categoryName,
            categoryId: book?.categoryId,
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
            bookContent: book?.description,
            bookUrl: book?.cover,
            bookIsbn: book?.isbn,
            bookAuthors: book?.author,
            publisher: book?.publisher,
            pubDate: book?.pubDate,
            customerReviewRank: book?.customerReviewRank,
            priceStandard: book?.priceStandard,
            categoryName: book?.categoryName,
            categoryId: book?.categoryId,
          },

          update: async (proxy, { data: createPost }) => {
            if (createPost && createPost.createPost && createPost.createPost.id) {
              setPostId(createPost.createPost.id);
            }

            proxy?.writeQuery({
              query: GET_Posts,
              variables: {
                id: userId,
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

  const onConfirmRemove = async (id: string) => {
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
          id: userId,
          istemp: true,
        },
        data: {
          posts: (data as { posts: { id: string }[] }).posts.filter(
            (p: { id: string }) => p.id !== id,
          ),
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
  };
}
