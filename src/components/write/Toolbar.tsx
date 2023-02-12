import React from 'react';

import { Editor } from '@tiptap/react';

import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import UndoIcon from '@mui/icons-material/Undo';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import RedoIcon from '@mui/icons-material/Redo';
import CodeIcon from '@mui/icons-material/Code';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import SubscriptIcon from '@mui/icons-material/Subscript';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import { Typography, Divider } from '@mui/material';
import StyledToggleButtonGroup from './StyledToggleButtonGroup';
import HeadingToolbarButtons from './HeadingToolbarButtons';
import ImageAdd from './ImageAdd';

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

  return (
    <>
      <Paper
        className="flex flex-wrap w-full mxl:overflow-x-scroll"
        sx={{
          display: 'flex',
          border: theme => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
          margin: '0 16px',
          position: 'sticky',
          top: 0,
          background: isdark == 'dark' ? '#2b2d31' : '',
          width: 'calc(100% - 2rem);',
        }}>
        <StyledToggleButtonGroup
          size="small"
          exclusive
          aria-label="vertical outlined primary button group">
          <HeadingToolbarButtons editor={editor} />
          <ToggleButton
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            selected={editor.isActive({ textAlign: 'center' })}
            value="center"
            aria-label="Center aligned">
            <FormatAlignCenterIcon
              color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}
            />
          </ToggleButton>

          <ToggleButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            selected={editor.isActive('bold')}
            value="bold"
            aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>

          <ToggleButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            value="italic"
            aria-label="italic"
            selected={editor.isActive('italic')}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            value="strike"
            aria-label="strike"
            selected={editor.isActive('strike')}>
            <FormatStrikethroughIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            value="code"
            aria-label="code"
            selected={editor.isActive('code')}>
            <CodeIcon />
          </ToggleButton>

          <ToggleButton
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            value="highlight"
            aria-label="highlight"
            selected={editor.isActive('highlight')}>
            <BorderColorIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            value="blockQuote"
            aria-label="blockQuote"
            selected={editor.isActive('blockQuote')}>
            <FormatQuoteIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            selected={editor.isActive('HorizontalRule')}
            value="HorizontalRule"
            aria-label="HorizontalRule">
            <HorizontalRuleIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().setParagraph().run()}
            selected={editor.isActive('paragraph')}
            value="paragraph"
            aria-label="paragraph">
            <FormatTextdirectionRToLIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            selected={editor.isActive('underline')}
            value="underline"
            aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>

          <div className="border-2 flex items-center px-[1px]">{children}</div>

          <ToggleButton
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
            selected={editor.isActive('link')}
            value="link"
            aria-label="link">
            <LinkIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            value="bullettList"
            aria-label="bullettList"
            selected={editor.isActive('bulletList')}>
            <FormatListBulletedIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            value="orderedList"
            aria-label="orderedList"
            selected={editor.isActive('orderedList')}>
            <FormatListNumberedIcon />
          </ToggleButton>

          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <ToggleButton
            onClick={() => editor.chain().focus().undo().run()}
            value="undo"
            aria-label="undo">
            <UndoIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().redo().run()}
            value="redo"
            aria-label="redo">
            <RedoIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </>
  );
};

export default ProjectCreateContentToolbar;
