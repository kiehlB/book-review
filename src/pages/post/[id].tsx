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

export type PostProps = {
  id: any;
};

function Post({ id }: PostProps) {
  const { singlePostLoding, singlePostError, singlePostData } = useGetPost();
  const insertID = setHeadingId(singlePostData?.post?.body);

  const BodyResult = insertID.replace('<toc></toc>', '');

  // const editor = useEditor({
  //   editorProps: {
  //     attributes: {
  //       class: 'focus:outline-none',
  //       'data-test': 'editor',
  //     },
  //   },
  //   extensions: [
  //     StarterKit,
  //     Subscript,
  //     Superscript,
  //     Highlight,
  //     TypographyExtension,
  //     UnderlineExtension,
  //     Document,
  //     Paragraph,
  //     Text,
  //     Dropcursor,
  //     Code,
  //     Link,

  //     TextAlign.configure({
  //       types: ['heading', 'paragraph'],
  //     }),
  //     Focus.configure({
  //       className: 'has-focus',
  //       mode: 'all',
  //     }),
  //     ColorHighlighter,

  //     TableOfContents,
  //     UniqueID.configure({
  //       types: ['block'],
  //     }),
  //   ],
  //   content: BodyResult,
  // });

  // useEffect(() => {
  //   editor?.commands?.setContent(BodyResult);
  //   editor?.setEditable(false);
  // }, [BodyResult]);

  if (singlePostLoding) return <div>d</div>;

  console.log('hello');

  return (
    <PageLayout>
      <div className="grid grid-cols-10 mx-[12rem] border-2">
        <div className="col-span-2">좋아요</div>
        <div className="text-2xl col-span-6">
          <div className="border-2 border-red-500 mx-auto" style={{ maxWidth: '65ch' }}>
            <div dangerouslySetInnerHTML={{ __html: BodyResult }} />
            {/* <EditorContent editor={editor} className="" /> */}
          </div>
        </div>
        <div className="col-span-2">
          <PostTableOfContents />
        </div>
      </div>
    </PageLayout>
  );
}

export default Post;

export const getServerSideProps: GetServerSideProps = async context => {
  if (context.query.id && typeof context.query.id === 'string') {
    const { id } = context.query;
    const apolloClient = initializeApollo();

    return { props: { id } };
  }
};
