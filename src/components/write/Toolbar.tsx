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
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import styled from 'styled-components';
import { Tooltip, IconButton, EditIcon, Position } from 'evergreen-ui';

{
  /* <button onClick={() => editor.chain().focus().unsetColor().run()}>
unsetColor
</button> */
}

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
        className="flex flex-wrap w-full mxl:overflow-x-scroll items-center"
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: theme => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
          margin: '0 16px',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          background: isdark == 'dark' ? '#2b2d31' : '#fff',
          width: 'calc(100% - 2rem);',
        }}>
        <StyledToggleButtonGroup
          size="small"
          exclusive
          aria-label="vertical outlined primary button group">
          <HeadingToolbarButtons editor={editor} isdark={isdark} />

          {/* <ToggleButton
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            selected={editor.isActive({ textAlign: 'center' })}
            value="center"
            aria-label="Center aligned">
            <FormatAlignCenterIcon
              color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}
            />
          </ToggleButton> */}

          <ToggleButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            selected={editor.isActive('bold')}
            value="bold"
            aria-label="bold">
            <FormatBoldIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
          </ToggleButton>

          <ToggleButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            value="italic"
            aria-label="italic"
            selected={editor.isActive('italic')}>
            <FormatItalicIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            value="strike"
            aria-label="strike"
            selected={editor.isActive('strike')}>
            <FormatStrikethroughIcon
              color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}
            />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            value="code"
            aria-label="code"
            selected={editor.isActive('code')}>
            <CodeIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
          </ToggleButton>

          {/* <ToggleButton
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            value="highlight"
            aria-label="highlight"
            selected={editor.isActive('highlight')}>
            <BorderColorIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
          </ToggleButton> */}
          <ToggleButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            value="blockQuote"
            aria-label="blockQuote"
            selected={editor.isActive('blockQuote')}>
            <FormatQuoteIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            selected={editor.isActive('HorizontalRule')}
            value="HorizontalRule"
            aria-label="HorizontalRule">
            <HorizontalRuleIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().setParagraph().run()}
            selected={editor.isActive('paragraph')}
            value="paragraph"
            aria-label="paragraph">
            <FormatTextdirectionRToLIcon
              color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}
            />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            selected={editor.isActive('underline')}
            value="underline"
            aria-label="underline">
            <FormatUnderlinedIcon
              color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}
            />
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
            <LinkIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            value="bullettList"
            aria-label="bullettList"
            selected={editor.isActive('bulletList')}>
            <FormatListBulletedIcon
              color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}
            />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            value="orderedList"
            aria-label="orderedList"
            selected={editor.isActive('orderedList')}>
            <FormatListNumberedIcon
              color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}
            />
          </ToggleButton>

          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <ToggleButton
            onClick={() => editor.chain().focus().undo().run()}
            value="undo"
            aria-label="undo">
            <UndoIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
          </ToggleButton>
          <ToggleButton
            onClick={() => editor.chain().focus().redo().run()}
            value="redo"
            aria-label="redo">
            <RedoIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
          </ToggleButton>

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

          <Tooltip content="색깔을 초기화 시킵니다" position={Position.TOP}>
            <ToggleButton
              onClick={() => editor.chain().focus().unsetColor().run()}
              value="unset color"
              aria-label="unset color">
              <RestartAltIcon color={`${isdark == 'dark' ? 'primary' : 'secondary'}`} />
            </ToggleButton>
          </Tooltip>
        </StyledToggleButtonGroup>
      </Paper>
    </>
  );
};

export default ProjectCreateContentToolbar;

const SetColor = styled.input``;
