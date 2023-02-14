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
import TextStyle from '@tiptap/extension-text-style';

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
      TextStyle,

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

  if (singlePostLoding) return <div>d</div>;

  console.log(singlePostData);
  return (
    <>
      <NextSeo {...getNextSeo({ title: 'Book Review Write', description: '책리뷰' })} />

      <PageLayout>
        <PostTitle className="text-[#212529] text-[2.5rem] max-w-[72rem] mx-auto font-bold px-[5rem] text-center mt-[3rem]">
          {singlePostData?.post?.title}
        </PostTitle>

        <div className="grid grid-cols-10 max-w-[96rem] mx-auto gap-[1.5rem] mt-[5.5rem]">
          <div className="col-span-2 justify-self-center">
            <div className="sticky top-24">
              <PawButton />
            </div>
          </div>
          <div className="text-[1.25rem] col-span-6 w-full">
            <Content isDark={isdark} className="text-[1.25rem] max-w-[812.5px] mx-auto">
              <div dangerouslySetInnerHTML={{ __html: BodyResult }} />
              {/* <EditorContent editor={editor} className="" /> */}
            </Content>
          </div>
          <div className="col-span-2">
            <div className="sticky top-24">
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

const PostTitle = styled.section`
  display: -webkit-box;
  line-height: 1.5;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
  height: 100%;
`;

const Content = styled.div<{ isdark: string }>`
  white-space: initial;
  word-wrap: break-word;
  .ptag {
    line-height: 1.7;
    margin: 18px 0;
    color: #212529;
    font-size: 18px;
  }
  ol {
    margin-left: 1rem;
    list-style: decimal;
  }

  ul {
    margin-left: 1rem;
    list-style: disc;
  }

  .quote {
    margin: 0 auto;
    position: relative;
    padding-left: 55px;
    margin: 75px 0;

    &:before {
      color: #fcd545;
      font-size: 100px;
      line-height: 0.7;
      content: open-quote;
      vertical-align: top;

      position: absolute;
      left: -5px;
    }
  }

  u {
    text-decoration: none;

    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      linear-gradient(to right, #e9756b, #e9756b, #e9756b);
    background-size: 100% 0.1em, 30% 0.1em;
    background-position: 100% 100%, 0 100%;

    background-repeat: no-repeat;
    transition: background-size 600ms;
    &:hover {
      background-size: 100% 0.1em, 100% 0.1em;
    }
  }
`;
