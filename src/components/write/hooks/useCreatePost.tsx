import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post } from '../../../lib/graphql/posts';

export default function useCreatePost() {
  const router = useRouter();
  const [createPost] = useMutation(Create_Post);

  const handleSubmit = async (e, title, body, tags, fileInputState, isPrivate, book) => {
    e.preventDefault();

    console.log(book.contents);

    if (book.title) {
      createPost({
        variables: {
          title: title,
          body: body,
          tags: tags,
          thumbnail: fileInputState,
          is_private: isPrivate,

          bookTitle: book?.title,
          bookContent: book?.contents,
          bookUrl: book?.thumbnail,
          bookIsbn: book?.isbn,
        },
      });
    } else {
      createPost({
        variables: {
          title: title,
          body: body,
          tags: tags,
          thumbnail: fileInputState,
          is_private: isPrivate,
        },
      });
    }
  };

  return {
    handleSubmit,
  };
}
