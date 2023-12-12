import React from 'react';
import { Editor } from '@tiptap/react';
import styled from 'styled-components';
import HeadingToolbarButtons from './heading-toolbar-buttons';
import {
  BsJustifyLeft,
  BsParagraph,
  BsTextCenter,
  BsTypeBold,
  BsTypeUnderline,
  BsYoutube,
} from 'react-icons/bs';
import { BiCodeAlt, BiItalic, BiStrikethrough } from 'react-icons/bi';
import { GrBlockQuote, GrPowerReset } from 'react-icons/gr';
import { VscHorizontalRule } from 'react-icons/vsc';
import { AiOutlineLink, AiOutlineOrderedList } from 'react-icons/ai';
import { MdFormatListBulleted } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import { FaUndoAlt, FaRedoAlt } from 'react-icons/fa';
import { RxReset } from 'react-icons/rx';

const ProjectCreateContentToolbar = ({
  editor,
  children,
  isdark,
}: {
  editor: Editor;
  children?: React.ReactNode;
  isdark: string;
}) => {
  if (!editor) {
    return null;
  }

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL');

    if (url) {
      editor?.commands?.setYoutubeVideo({
        src: url,
      });
    }
  };
  // overflow-x-scroll
  return (
    <div className="z-1 flex w-full flex-wrap items-center rounded border border-gray-300 bg-white p-1 shadow dark:border-none dark:bg-dark-400 mxs:flex-nowrap mxs:overflow-x-scroll">
      <div className="flex flex-wrap items-center mxs:flex-nowrap">
        <HeadingToolbarButtons editor={editor} isdark={isdark} />
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-dark-300  ${
            editor.isActive('bold') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().toggleBold().run()}
          aria-label="bold">
          <BsTypeBold size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive('italic') ? 'bg-gray-100 dark:bg-dark-300 ' : ''
          }`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          aria-label="italic">
          <BiItalic size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive('strike') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          aria-label="strike">
          <BiStrikethrough size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive('code') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().toggleCode().run()}
          aria-label="code">
          <BiCodeAlt size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive('blockquote') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          aria-label="blockQuote">
          <GrBlockQuote size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  active:scale-90 dark:hover:bg-dark-300${
            editor.isActive('HorizontalRule') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          aria-label="HorizontalRule">
          <VscHorizontalRule
            size={24}
            className="text-[#0000008a]  dark:text-[#cfcfcf]"
          />
        </button>
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive('paragraph') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().setParagraph().run()}
          aria-label="paragraph">
          <BsParagraph size={20} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive('underline') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          aria-label="underline">
          <BsTypeUnderline size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>

        <div className="flex items-center px-[8px] py-2 hover:bg-gray-100 dark:hover:bg-dark-300 ">
          {children}
        </div>

        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive({ textAlign: 'left' }) ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          aria-label="left">
          <BsJustifyLeft size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>

        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive({ textAlign: 'center' }) ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          aria-label="center">
          <BsTextCenter size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>

        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  active:scale-90 dark:hover:bg-dark-300${
            editor.isActive('link') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => {
            const previousUrl = editor.getAttributes('link').href;
            const url = window.prompt('URL', previousUrl);

            // cancelled
            if (url === null) {
              return;
            }

            // empty
            if (url === '') {
              editor.chain().focus().extendMarkRange('link').unsetLink().run();

              return;
            }

            // update link
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
          }}
          aria-label="link">
          <AiOutlineLink size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>

        {/* <YouTubeTap editor={editor} /> */}

        <button
          aria-label="youtube"
          onClick={addYoutubeVideo}
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  active:scale-90 dark:hover:bg-dark-300${
            editor.isActive('youtube') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}>
          <BsYoutube size={24} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>

        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive('bulletList') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          aria-label="bulletList">
          <MdFormatListBulleted
            size={24}
            className="text-[#0000008a]  dark:text-[#cfcfcf]"
          />
        </button>
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  dark:hover:bg-dark-300${
            editor.isActive('orderedList') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          aria-label="orderedList">
          <AiOutlineOrderedList
            size={24}
            className="text-[#0000008a]  dark:text-[#cfcfcf]"
          />
        </button>

        {/* <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} /> */}

        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  active:scale-90 dark:hover:bg-dark-300${
            editor.isActive('undo') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().undo().run()}
          aria-label="undo">
          <FaUndoAlt size={20} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>
        <button
          className={`mx-1 rounded-md p-2 hover:bg-gray-100  active:scale-90 dark:hover:bg-dark-300${
            editor.isActive('redo') ? 'bg-gray-100 dark:bg-dark-300' : ''
          }`}
          onClick={() => editor.chain().focus().redo().run()}
          aria-label="redo">
          <FaRedoAlt size={20} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
        </button>

        <div className="ml-2 mr-1 flex items-center">
          <SetColor
            type="color"
            className="border-none bg-none"
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            value={editor.getAttributes('textStyle').color}
          />
        </div>

        <a data-tooltip-id="my-color" data-tooltip-content="색깔을 초기화 시킵니다">
          <button
            className={`mx-1 rounded-md p-2 hover:bg-gray-100  active:scale-90 dark:hover:bg-dark-300${
              editor.isActive('unset color') ? 'bg-gray-100 dark:bg-dark-300' : ''
            }`}
            onClick={() => editor.chain().focus().unsetColor().run()}
            aria-label="unset color">
            <RxReset size={20} className="text-[#0000008a]  dark:text-[#cfcfcf]" />
          </button>
        </a>
        <Tooltip id="my-color" />
      </div>
    </div>
  );
};

export default ProjectCreateContentToolbar;

const SetColor = styled.input``;
