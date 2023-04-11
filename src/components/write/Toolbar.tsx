import React from 'react';
import { Editor } from '@tiptap/react';
import styled from 'styled-components';
import HeadingToolbarButtons from './HeadingToolbarButtons';
import { BsParagraph, BsTypeBold, BsTypeUnderline, BsYoutube } from 'react-icons/bs';
import { BiCodeAlt, BiItalic, BiStrikethrough } from 'react-icons/bi';
import { GrBlockQuote, GrPowerReset } from 'react-icons/gr';
import { VscHorizontalRule } from 'react-icons/vsc';
import { AiOutlineLink, AiOutlineOrderedList } from 'react-icons/ai';
import { MdFormatListBulleted } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import { FaUndoAlt, FaRedoAlt } from 'react-icons/fa';

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
    <div className="flex flex-wrap w-full items-center sticky top-0 z-1 bg-white border border-gray-300 p-1 rounded shadow dark:bg-[#212529] dark:border-none mxs:overflow-x-scroll mxs:flex-nowrap">
      <div className="flex items-center flex-wrap mxs:flex-nowrap">
        <HeadingToolbarButtons editor={editor} isdark={isdark} />
        <button
          className={`p-2 mx-1 rounded-md ${
            editor.isActive('bold') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().toggleBold().run()}
          aria-label="bold">
          <BsTypeBold size={24} color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`} />
        </button>
        <button
          className={`p-2 mx-1 rounded-md ${
            editor.isActive('italic') ? 'bg-gray-100 dark:bg-slate-900 ' : ''
          }`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          aria-label="italic">
          <BiItalic size={24} color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`} />
        </button>
        <button
          className={`p-2 mx-1 rounded-md ${
            editor.isActive('strike') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          aria-label="strike">
          <BiStrikethrough
            size={24}
            color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`}
          />
        </button>
        <button
          className={`p-2 mx-1 rounded-md ${
            editor.isActive('code') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().toggleCode().run()}
          aria-label="code">
          <BiCodeAlt size={24} color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`} />
        </button>
        <button
          className={`p-2 mx-1 rounded-md ${
            editor.isActive('blockquote') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          aria-label="blockQuote">
          <GrBlockQuote
            size={24}
            color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`}
          />
        </button>
        <button
          className={`p-2 mx-1 active:scale-90 rounded-md ${
            editor.isActive('HorizontalRule') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          aria-label="HorizontalRule">
          <VscHorizontalRule
            size={24}
            color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`}
          />
        </button>
        <button
          className={`p-2 mx-1 rounded-md ${
            editor.isActive('paragraph') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().setParagraph().run()}
          aria-label="paragraph">
          <BsParagraph
            size={20}
            color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`}
          />
        </button>
        <button
          className={`p-2 mx-1 rounded-md ${
            editor.isActive('underline') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          aria-label="underline">
          <BsTypeUnderline
            size={24}
            color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`}
          />
        </button>

        <div className="flex items-center px-[8px] ">{children}</div>

        <button
          className={`p-2 mx-1 active:scale-90 rounded-md ${
            editor.isActive('link') ? 'bg-gray-100 dark:bg-slate-900' : ''
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
          <AiOutlineLink
            size={24}
            color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`}
          />
        </button>

        {/* <YouTubeTap editor={editor} /> */}

        <button
          aria-label="youtube"
          onClick={addYoutubeVideo}
          className={`p-2 mx-1 active:scale-90 rounded-md ${
            editor.isActive('youtube') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}>
          <BsYoutube size={24} color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`} />
        </button>

        <button
          className={`p-2 mx-1 rounded-md ${
            editor.isActive('bulletList') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          aria-label="bulletList">
          <MdFormatListBulleted
            size={24}
            color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`}
          />
        </button>
        <button
          className={`p-2 mx-1 rounded-md ${
            editor.isActive('orderedList') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          aria-label="orderedList">
          <AiOutlineOrderedList
            size={24}
            color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`}
          />
        </button>

        {/* <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} /> */}

        <button
          className={`p-2 mx-1 active:scale-90 rounded-md ${
            editor.isActive('undo') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().undo().run()}
          aria-label="undo">
          <FaUndoAlt size={20} color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`} />
        </button>
        <button
          className={`p-2 mx-1 active:scale-90 rounded-md ${
            editor.isActive('redo') ? 'bg-gray-100 dark:bg-slate-900' : ''
          }`}
          onClick={() => editor.chain().focus().redo().run()}
          aria-label="redo">
          <FaRedoAlt size={20} color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`} />
        </button>

        <div className="ml-2 mr-1 flex items-center">
          <SetColor
            type="color"
            ad
            className="border-none bg-none"
            onInput={(event: any) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            value={editor.getAttributes('textStyle').color}
          />
        </div>

        <a data-tooltip-id="my-color" data-tooltip-content="색깔을 초기화 시킵니다">
          <button
            className={`p-2 mx-1 rounded-md active:scale-90 ${
              editor.isActive('unset color') ? 'bg-gray-100 dark:bg-slate-900' : ''
            }`}
            onClick={() => editor.chain().focus().unsetColor().run()}
            aria-label="unset color">
            <GrPowerReset
              size={20}
              color={`${isdark == 'dark' ? '#cfcfcf' : '#0000008a'}`}
            />
          </button>
        </a>
        <Tooltip id="my-color" />
      </div>
    </div>
  );
};

export default ProjectCreateContentToolbar;

const SetColor = styled.input``;
