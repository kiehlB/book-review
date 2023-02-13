import { Editor } from '@tiptap/react';

import ToggleButton from '@mui/material/ToggleButton';
import { Typography } from '@mui/material';
import StyledToggleButtonGroup from './StyledToggleButtonGroup';
import { styled } from '@mui/material/styles';

const ToggleButton2 = styled(ToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: '#00ff00',
  },
});

export default function HeadingToolbarButtons({
  editor,
  isdark,
}: {
  editor: Editor;
  isdark: string;
}) {
  return (
    <StyledToggleButtonGroup size="small" exclusive aria-label="text alignment">
      <ToggleButton
        value="h1"
        className="text-white"
        aria-label="H1 Text"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        selected={editor.isActive('heading', { level: 1 })}>
        <Typography
          fontWeight={900}
          color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}>
          H1
        </Typography>
      </ToggleButton>
      <ToggleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        selected={editor.isActive('heading', { level: 2 })}
        value="h2"
        aria-label="H2 Text">
        <Typography
          fontWeight={800}
          color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}>
          H2
        </Typography>
      </ToggleButton>
      <ToggleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        selected={editor.isActive('heading', { level: 3 })}
        value="h3"
        aria-label="H3 Text">
        <Typography
          fontWeight={800}
          color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}>
          H3
        </Typography>
      </ToggleButton>
      <ToggleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        selected={editor.isActive('heading', { level: 4 })}
        value="h4"
        aria-label="H4 Text">
        <Typography
          fontWeight={700}
          color={`${isdark == 'dark' ? 'primary' : 'secondary'}`}>
          H4
        </Typography>
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
