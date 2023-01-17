import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
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
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import CharacterCount from '@tiptap/extension-character-count';
import TextAlign from '@tiptap/extension-text-align';
import Focus from '@tiptap/extension-focus';
import { ColorHighlighter } from './ColourHighlighter';
import { useMemo } from 'react';
import ProjectCreateContentToolbar from './Toolbar';
import UniqueID from './UniqueID';

const Tiptap = () => {
  const limit = 5000;

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'hello',
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

      CharacterCount.configure({
        limit,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Focus.configure({
        className: 'has-focus',
        mode: 'all',
      }),
      ColorHighlighter,
    ],
    content: 'hello',
  });

  useMemo(() => {
    // if (editor?.getHTML()) setContent(editor?.getHTML());
  }, [editor?.getHTML()]);

  const percentage = editor ? Math.round((100 / limit) * editor.getCharacterCount()) : 0;

  return (
    <div>
      {editor && <ProjectCreateContentToolbar editor={editor} />}
      <EditorContent editor={editor} />
      {editor && (
        <div
          className={`character-count ${
            editor.getCharacterCount() === limit ? 'character-count--warning' : ''
          }`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            className="character-count__graph">
            <circle r="10" cx="10" cy="10" fill="#e9ecef" />
            <circle
              r="5"
              cx="10"
              cy="10"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
              transform="rotate(-90) translate(-20)"
            />
            <circle r="6" cx="10" cy="10" fill="white" />
          </svg>

          <div className="character-count__text" style={{ marginLeft: 5 }}>
            {editor.getCharacterCount()}/{limit} characters
          </div>
        </div>
      )}
    </div>
  );
};

export default Tiptap;
