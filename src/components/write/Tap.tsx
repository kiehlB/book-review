import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect, useRef, useState } from 'react';
import useEditor2 from './hooks/useCreatePost';
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
import UniqueID from './UniqueID';
import TableOfContents from './TableOfContents';
import TagsForm from '../tags/TagsForm';
import { PageGrid, PostGrid } from '../layout/GridLayout';

import ProjectCreateContentToolbar from './Toolbar';
import BackIcon from '../../svg/back';
import { SearchInput } from 'evergreen-ui';
import PostPublish from './PostPublish';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export type TapProps = {
  isOpen;
  SetisOpen;
};

function Tap({ isOpen, SetisOpen }: TapProps) {
  const { handleSubmit } = useEditor2();
  const [isEditing, setEditing] = useState(false);
  const BodyFocusRef = useRef() as any;

  useEffect(() => {
    if (BodyFocusRef.current) {
    }
  }, [BodyFocusRef]);

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
    content: `
      <toc></toc>
      여기를 클릭하세요!
    `,
  });

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const a = editor?.getHTML();
  //   handleSubmit(e, a);

  return (
    <PageGrid as="main" className="h-full">
      <div className="col-span-2 h-full border-r borde-b border-[#E2E8F0]">
        <div className="col-span-2 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 sticky top-0 z-10">
          <div className="flex px-4 py-4 border-b items-center justify-center h-[4.6875rem]">
            <div className="px-2 py-1">
              <BackIcon className="w-[16px] h-[16px]" />
            </div>

            <div className="w-[240px] text-[#334155] text-base flex items-center justify-between font-semibold pl-3">
              BookReview
            </div>
          </div>

          <div className="p-4">
            <SearchInput
              placeholder="임시 포스트를 검색해보세요"
              name="BookSearch"
              width={'240px'}
              className="text-xs"
              height={50}
              style={{ borderRadius: '1.5rem', fontSize: '12px' }}
            />
          </div>

          <div className="text-[#64748B] font-bold text-xs py-4 px-6">FAVORITES</div>
          <div className="text-[#64748B] font-bold text-xs py-4 px-6">MY DRAFTS (0)</div>
        </div>
      </div>

      <div className="flex w-[18.5rem] fixed bottom-0 z-50 px-4 col-span-2 bg-white  border-t h-[4.5rem] items-center justify-between mxl:w-full">
        <div>새로운 포스트</div>
      </div>

      <div className="col-span-8">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold focus:outline-none w-full mmd:text-[2rem] pt-[2rem] px-[1rem]">
            <input name="title" placeholder="제목을 입력하세요" className="w-full" />
            <hr className="border-2 w-6/12 mt-3.5 h-1" />
          </div>

          <div className="flex">
            <div className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] mr-4">
              saved
            </div>
            <div
              className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20]"
              onClick={() => SetisOpen(!isOpen)}>
              publish
            </div>
          </div>
        </div>
        <div className="px-4 py-4">
          <TagsForm />
        </div>

        <div className="sticky top-0 z-10">
          <ProjectCreateContentToolbar editor={editor} />
        </div>
        <PostGrid as="div" className="mt-2">
          <div className="col-span-8 overflow-y-scroll  scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 px-[1rem]">
            <EditorContent editor={editor} className="" />
          </div>
        </PostGrid>
      </div>
    </PageGrid>
  );
}

export default Tap;
