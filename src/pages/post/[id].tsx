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
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export type PostProps = {
  id: string;
};

function Post({ id }: PostProps) {
  const { singlePostLoding, singlePostError, singlePostData } = useGetPost();

  const insertID = setHeadingId(singlePostData?.post?.body);
  const { isDark } = useSelector((state: RootState) => state.core);

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
              isDark={isDark}
              className="border-2 border-red-500 mx-auto"
              style={{ maxWidth: '65ch' }}>
              {/* <div dangerouslySetInnerHTML={{ __html: BodyResult }} /> */}
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

const Content = styled.div<{ isDark: string }>`
  p {
    color: ${props => (props.isDark == 'dark' ? 'blue' : 'red')};
  }
`;
