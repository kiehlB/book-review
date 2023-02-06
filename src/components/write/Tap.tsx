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
import Text from '@tiptap/extension-text';
import Dropcursor from '@tiptap/extension-dropcursor';
import Code from '@tiptap/extension-code';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Focus from '@tiptap/extension-focus';
import { ColorHighlighter } from './ColourHighlighter';
import { Color } from '@tiptap/extension-color';
import UniqueID from './UniqueID';
import TableOfContents from './TableOfContents';
import TagsForm from '../tags/TagsForm';
import { PageGrid, PostGrid } from '../layout/GridLayout';
import ProjectCreateContentToolbar from './Toolbar';
import { motion, useReducedMotion } from 'framer-motion';
import { SearchInput } from 'evergreen-ui';
import { ArrowLink, arrowVariants, BackLink } from '../common/ArrowButton';
import WriteHead from './WriterHead';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import TapSide from './TapSide';
import Image from '@tiptap/extension-image';
import ImageAdd from './ImageAdd';
import { getPostBody, getPostTitle, getPostTags } from '../../store/book';
import useCreateSavePost from './hooks/usecreateSavePost';

export type TapProps = {
  isOpen;
  SetisOpen;
};

function Tap({ isOpen, SetisOpen }: TapProps) {
  const [isEditing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.core);
  const body = useSelector((state: RootState) => state.book.body);
  const tags = useSelector((state: RootState) => state.book.tags);
  const title = useSelector((state: RootState) => state.book.title);
  const postId = useSelector((state: RootState) => state.book.postId);

  const { onConfirmSave, posts, loading } = useCreateSavePost();

  const findPost = posts?.filter(e => e.id == postId);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    },
    extensions: [
      StarterKit,
      Subscript,
      Superscript,
      Image,
      Highlight,
      TypographyExtension,
      UnderlineExtension,
      Document,
      Paragraph,
      Text,
      Dropcursor,
      Code,
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
    content:
      body?.length > 9
        ? body
        : `
    <toc></toc><br/>
    여기를 클릭하세요
  `,
  });

  const a = editor?.getHTML();
  useEffect(() => {
    dispatch(getPostBody(a));
  }, [a]);

  useEffect(() => {
    if (findPost) {
      console.log(findPost[0]?.body);
      dispatch(getPostTitle(findPost[0]?.title));
      dispatch(getPostBody(findPost[0]?.body));
      dispatch(getPostTags(findPost[0]?.tags));
      editor?.commands?.setContent(findPost[0]?.body);
    }
  }, [postId, dispatch]);

  const addImage = useCallback(
    url => {
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    },
    [editor],
  );

  if (!editor) {
    return null;
  }

  // overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 h-full border-2 border-red-500 w-full
  return (
    <PageGrid as="main" className="">
      <div className="col-span-2 sticky  top-0 h-[100vh] min-h-[0] overflow-hidden border-r">
        <div className="flex px-4 py-4 border-b items-center justify-center h-[4.6875rem]">
          <div className="py-2 px-4">
            <BackLink href="/">
              <div className="w-[240px] text-[#334155] text-base flex items-center justify-between font-semibold pl-3">
                BookReview
              </div>
            </BackLink>
          </div>
        </div>
        <TapSide isEditing={isEditing} setEditing={setEditing} />
      </div>
      <div className="col-span-8 mxl:col-span-12">
        <WriteHead>
          <div className="flex">
            <div
              onClick={() => onConfirmSave(postId, title, body, tags)}
              className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] mr-4 cursor-pointer">
              saved
            </div>
            <div
              className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] cursor-pointer"
              onClick={() => SetisOpen(!isOpen)}>
              publish
            </div>
          </div>
        </WriteHead>
        <div className="px-4 py-4">
          <TagsForm isOpen={isOpen} />
        </div>
        <div>
          <ProjectCreateContentToolbar editor={editor}>
            <ImageAdd addImage={addImage} />
          </ProjectCreateContentToolbar>
        </div>

        <div>
          <Content
            className="w-full mt-2 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 px-[1rem]"
            isDark={isDark}>
            <EditorContent editor={editor} className="" />
          </Content>
        </div>
      </div>
    </PageGrid>
  );
}

export default Tap;

const Content = styled.div<{ isDark: string }>`
  p {
    color: ${props => (props.isDark == 'dark' ? '#ececec' : '#212529')};
  }
`;
