import PostTableOfContents from '../../components/common/PostTableOfContent';
import { PageLayout } from '../../components/layout/PageLayout';

import { parseHeadings2, setHeadingId } from '../../lib/heading';
import { EditorContent, useEditor } from '@tiptap/react';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Highlight from '@tiptap/extension-highlight';
import TypographyExtension from '@tiptap/extension-typography';
import UnderlineExtension from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Dropcursor from '@tiptap/extension-dropcursor';
import Code from '@tiptap/extension-code';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Focus from '@tiptap/extension-focus';
import StarterKit from '@tiptap/starter-kit';
import { ColorHighlighter } from '../../components/write/ColourHighlighter';
import TableOfContents from '../../components/write/TableOfContents';
import UniqueID from '../../components/write/UniqueID';
import { useEffect, useState } from 'react';
import useGetPost from '../../components/write/hooks/useGetSinglePost';
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../lib/apolloClient';
import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { getNextSeo } from '../../lib/nextSeo';
import PawButton from '../../components/common/PawButton';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { getcoreIsLoading } from '../../store/core';

export type PostProps = {
  id: string;
};

function Post({ id }: PostProps) {
  const { singlePostLoding, singlePostError, singlePostData } = useGetPost();
  const dispatch = useDispatch();
  const insertID = setHeadingId(singlePostData?.post?.body);
  const { isdark } = useSelector((state: RootState) => state.core);

  const BodyResult = insertID.replace('<toc></toc>', '');

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
        'data-test': 'editor',
      },
    },
    extensions: [
      StarterKit,
      Subscript,
      Superscript,
      Highlight,
      TypographyExtension,
      UnderlineExtension,
      Document,
      Paragraph,
      Text,
      Dropcursor,
      Code,
      Link,

      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Focus.configure({
        className: 'has-focus',
        mode: 'all',
      }),
      ColorHighlighter,

      TableOfContents,
      UniqueID.configure({
        types: ['block'],
      }),
    ],
    content: BodyResult,
  });

  useEffect(() => {
    editor?.commands?.setContent(BodyResult);
    editor?.setEditable(false);
    dispatch(getcoreIsLoading());
  }, [BodyResult]);

  if (singlePostLoding) return <div>d</div>;

  return (
    <>
      <NextSeo
        {...getNextSeo({ title: 'Book Review Write', description: '독후감 쓰는 곳' })}
      />

      <PageLayout>
        <div className="grid grid-cols-10 border-2 max-w-[96rem] mx-auto"></div>
        <div className="grid grid-cols-10 border-2 max-w-[96rem] mx-auto">
          <div className="col-span-2">
            <div className="sticky top-2">
              <PawButton />
            </div>
          </div>
          <div className="text-2xl col-span-6">
            <Content
              isDark={isdark}
              className="border-2 border-red-500 mx-auto"
              style={{ maxWidth: '65ch' }}>
              {/* <div dangerouslySetInnerHTML={{ __html: insertID }} /> */}
              <EditorContent editor={editor} className="" />
            </Content>
          </div>
          <div className="col-span-2">
            <div className="sticky top-2">
              <PostTableOfContents />
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default Post;

export const getServerSideProps: GetServerSideProps = async context => {
  if (context.query.id && typeof context.query.id === 'string') {
    const { id } = context.query;

    return { props: { id } };
  }
};

const Content = styled.div<{ isdark: string }>`
  .sc-gswNZR {
    ol {
      margin-left: 1rem;
      list-style: decimal;
    }

    ul {
      margin-left: 1rem;
      list-style: disc;
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
