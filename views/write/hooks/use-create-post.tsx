import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Create_Post, Edit_Post } from '../../../lib/graphql/posts';
import { toast } from 'react-toastify';
import { checkEmpty } from '../../../lib/utils';
import { CreatePostMutation, EditPostMutation } from '../../../types/apolloComponent';
import useBookStore from '@/store/book';
import useModalStore from '@/store/modal';

export default function useCreatePost() {
  const router = useRouter();
  const { setIsOpen, setTitle, setBody, setTags, setPostId, setThumbnail, setBook } =
    useBookStore();

  const { publishClose, setPublishClose } = useModalStore();

  const [editPost] = useMutation<EditPostMutation>(Edit_Post, {
    onCompleted({}) {
      setIsOpen();
      setTitle('');
      setBody('');
      setTags([]);
      setPostId('');
      setThumbnail('');
      setBook(null);

      router.push('/');
    },
  });
  const [createPost] = useMutation<CreatePostMutation>(Create_Post, {
    onCompleted({}) {
      setIsOpen();
      setBook(null);
      setTitle('');
      setBody('');
      setTags([]);
      setPostId('');
      setThumbnail('');
      setPublishClose(!publishClose);
      router.push('/');
    },
  });

  const client = useApolloClient();

  const handleSubmit = async (
    e: React.FormEvent,
    id: string | null,
    title: string,
    body: string,
    tags: string[],
    fileInputState: string | null,
    isPrivate: boolean,
    book: any,
    thumbnail: string | null,
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
            bookContent: book?.description,
            bookUrl: book?.cover,
            bookIsbn: book?.isbn,
            bookAuthors: book?.author,
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
