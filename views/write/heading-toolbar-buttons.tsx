import { Editor } from '@tiptap/react';

export default function HeadingToolbarButtons({
  editor,
  isdark,
}: {
  editor: Editor;
  isdark: string;
}) {
  return (
    <div className="flex items-center text-[#0000008a] dark:text-[#cfcfcf]">
      <button
        className={`mx-1 rounded px-2 py-2  hover:bg-gray-100 dark:hover:bg-dark-300 ${
          editor.isActive('heading', { level: 1 }) ? 'bg-gray-100 dark:bg-dark-300' : ''
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        aria-label="H1 Text">
        <span className="text-primary-500 font-semibold">H1</span>
      </button>
      <button
        className={`mx-1 rounded px-2 py-2  hover:bg-gray-100 dark:hover:bg-dark-300${
          editor.isActive('heading', { level: 2 }) ? 'bg-gray-100 dark:bg-dark-300' : ''
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        aria-label="H2 Text">
        <span className="text-primary-500 font-semibold">H2</span>
      </button>
      <button
        className={`mx-1 rounded  px-2 py-2 hover:bg-gray-100 dark:hover:bg-dark-300 ${
          editor.isActive('heading', { level: 3 }) ? 'bg-gray-100 dark:bg-dark-300' : ''
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        aria-label="H3 Text">
        <span className="text-primary-500 font-semibold">H3</span>
      </button>
      <button
        className={`mx-1 rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-dark-300${
          editor.isActive('heading', { level: 4 }) ? 'bg-gray-100 dark:bg-dark-300' : ''
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        aria-label="H4 Text">
        <span className="text-primary-500 font-semibold">H4</span>
      </button>
    </div>
  );
}
