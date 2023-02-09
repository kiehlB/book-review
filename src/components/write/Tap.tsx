import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Highlight from '@tiptap/extension-highlight';
import TypographyExtension from '@tiptap/extension-typography';
import UnderlineExtension from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Dropcursor from '@tiptap/extension-dropcursor';
import Text from '@tiptap/extension-text';
import Code from '@tiptap/extension-code';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Focus from '@tiptap/extension-focus';
import { ColorHighlighter } from './ColourHighlighter';
import { Color } from '@tiptap/extension-color';
import UniqueID from './UniqueID';
import TableOfContents from './TableOfContents';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import Image from '@tiptap/extension-image';
import { getPostBody, getPostTitle, getPostTags } from '../../store/book';
import useCreateSavePost from './hooks/usecreateSavePost';
import ProjectCreateContentToolbar from './Toolbar';
import ImageAdd from './ImageAdd';

export type TapProps = {};

function Tap({}: TapProps) {
  const dispatch = useDispatch();
  const isdark = useSelector((state: RootState) => state.core.isdark);
  // const body = useSelector((state: RootState) => state.book.body);
  // const postId = useSelector((state: RootState) => state.book.postId);

  const { book } = useSelector((state: RootState) => state.book);

  const { posts } = useCreateSavePost();

  const findPost = posts?.filter(e => e.id == book.postId);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    },
    extensions: [
      StarterKit,
      Subscript,
      Dropcursor,
      Superscript,
      Image,
      Highlight,
      TypographyExtension,
      UnderlineExtension,
      Document,
      Paragraph,
      Text,
      Code,
      BulletList,
      OrderedList,
      ListItem,
      Link,
      Image.configure({
        allowBase64: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Focus.configure({
        className: 'has-focus',
        mode: 'all',
      }),
      ColorHighlighter,
      Color.configure({
        types: ['textStyle'],
      }),
      TableOfContents,
      UniqueID.configure({
        types: ['block'],
      }),
    ],

    autofocus: true,
    content:
      book.body?.length > 9
        ? book.body
        : `
    <toc></toc> 
     반갑습니다
  `,
  });

  const addImage = useCallback(
    url => {
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    },
    [editor],
  );

  const getContent = editor?.getHTML();
  useEffect(() => {
    dispatch(getPostBody(getContent));
  }, [getContent]);

  useEffect(() => {
    if (findPost) {
      dispatch(getPostTitle(findPost[0]?.title));
      dispatch(getPostBody(findPost[0]?.body));
      dispatch(getPostTags(findPost[0]?.tags));
      editor?.commands?.setContent(findPost[0]?.body);
    }
  }, [book.postId]);

  if (!editor) {
    return null;
  }

  console.log('탭');
  return (
    <>
      <ProjectCreateContentToolbar editor={editor}>
        <ImageAdd addImage={addImage} />
      </ProjectCreateContentToolbar>
      <Content
        className="w-full mt-2 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 px-[1rem]"
        isDark={isdark}>
        <EditorContent editor={editor} className="" />
      </Content>
    </>
  );
}

export default Tap;

const Content = styled.div<{ isdark: string }>`
  .ProseMirror {
    > * + * {
      line-height: 1.5;
      color: #212529;
      padding: 0 0.5rem;
      margin-top: 1rem;
    }
    img {
      height: 100%;
      max-width: 100%;
      object-fit: cover;

      &.ProseMirror-selectednode {
        outline: 3px solid #68cef8;
      }
    }

    h1 {
      font-size: 2.5rem;
      line-height: 1.5;
    }

    h2 {
      font-size: 2rem;
      line-height: 1.5;
    }
    h3 {
      font-size: 1.5rem;
      line-height: 1.5;
    }
    h4 {
      font-size: 1.3125rem;
      line-height: 1.5;
    }

    min-height: 100%;
    max-height: 100%;
    width: 100%;

    ol {
      margin-left: 1rem;
      list-style: decimal;
    }

    ul {
      margin-left: 1rem;
      list-style: disc;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0d0d0d, 0.1);
    }

    hr {
      border: none;
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 2rem 0;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.5;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
  }
`;
