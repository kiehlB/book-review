import { Editor } from '@tiptap/react';

import ToggleButton from '@mui/material/ToggleButton';
import { Typography } from '@mui/material';
import StyledToggleButtonGroup from './StyledToggleButtonGroup';

export default function HeadingToolbarButtons({ editor }: { editor: Editor }) {
  return (
    <StyledToggleButtonGroup size="small" exclusive aria-label="text alignment">
      <ToggleButton
        value="h1"
        aria-label="H1 Text"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        selected={editor.isActive('heading', { level: 1 })}>
        <Typography fontWeight={900}>H1</Typography>
      </ToggleButton>
      <ToggleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        selected={editor.isActive('heading', { level: 2 })}
        value="h2"
        aria-label="H2 Text">
        <Typography fontWeight={800}>H2</Typography>
      </ToggleButton>
      <ToggleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        selected={editor.isActive('heading', { level: 3 })}
        value="h3"
        aria-label="H3 Text">
        <Typography fontWeight={800}>H3</Typography>
      </ToggleButton>
      <ToggleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        selected={editor.isActive('heading', { level: 4 })}
        value="h4"
        aria-label="H4 Text">
        <Typography fontWeight={700}>H4</Typography>
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
