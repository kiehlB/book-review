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
import { motion, useReducedMotion } from 'framer-motion';
import { SearchInput } from 'evergreen-ui';
import { ArrowLink, arrowVariants, BackLink } from '../common/ArrowButton';
import { Collapse, Grid as NextGrid, Avatar } from '@nextui-org/react';
import WriteHead from './WriterHead';
import FloatingHeader from '../common/Floating';
export type TapProps = {
  isOpen;
  SetisOpen;
};

function Tap({ isOpen, SetisOpen }: TapProps) {
  const { handleSubmit } = useEditor2();
  const [isEditing, setEditing] = useState(false);
  const BodyFocusRef = useRef() as any;
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (BodyFocusRef.current) {
    }
  }, [BodyFocusRef]);

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
      <toc></toc><br/>
      여기를 클릭하세요
    `,
  });

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const a = editor?.getHTML();

  return (
    <PageGrid as="main" className="h-full">
      <div className="col-span-2 h-full border-r borde-b border-[#E2E8F0] mxl:hidden">
        <div onClick={e => handleSubmit(e, a)}>ddd</div>
        <div className="col-span-2 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 sticky top-0 z-10  ">
          <div className="flex px-4 py-4 border-b items-center justify-center h-[4.6875rem]">
            <div className="px-2 py-1">
              <BackLink href="/">
                <div className="w-[240px] text-[#334155] text-base flex items-center justify-between font-semibold pl-3">
                  BookReview
                </div>
              </BackLink>
            </div>
          </div>

          <div className="p-4">
            <SearchInput
              placeholder="임시 포스트를 검색해보세요"
              name="BookSearch"
              width={'240px'}
              className="text-xs"
              height={40}
              style={{ borderRadius: '1.5rem', fontSize: '12px' }}
            />
          </div>

          <div className=" font-bold text-xs px-2">
            <Collapse.Group divider={false}>
              <Collapse title="FAVORITES" expanded>
                <div>1</div>
              </Collapse>
            </Collapse.Group>
            <Collapse.Group divider={false}>
              <Collapse title="MY DRAFTS (0)" expanded>
                <div>1</div>
              </Collapse>
            </Collapse.Group>
          </div>
        </div>
      </div>

      <div className="flex w-[18.5rem] fixed bottom-0 z-50 px-4 col-span-2 bg-white border-t border-r h-[4.5rem] items-center justify-between mxl:hidden">
        <div>새로운 포스트</div>
      </div>

      <div className="col-span-8 mxl:col-span-12">
        <WriteHead isOpen={isOpen} SetisOpen={SetisOpen} />

        {/* <FloatingHeader>
          <WriteHead isOpen={isOpen} SetisOpen={SetisOpen} />
          <div className="px-4 py-4">
            <TagsForm />
          </div>
        </FloatingHeader> */}

        <div className="px-4 py-4">
          <TagsForm />
        </div>

        <div className="sticky top-0 z-10">
          <ProjectCreateContentToolbar editor={editor} />
        </div>
        <div>
          <div className="w-full mt-2 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 px-[1rem]">
            <EditorContent editor={editor} className="" />
          </div>
        </div>
      </div>
    </PageGrid>
  );
}

export default Tap;
