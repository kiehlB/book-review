import { Editor, NodeViewWrapper } from '@tiptap/react';
import React, { useCallback, useEffect, useState } from 'react';
import { Node as ProseMirrorNode } from 'prosemirror-model';

interface TiptapWrapperProps {
  editor: Editor;
}

interface HeadingItem {
  level: number;
  text: string;
  id: string;
}
interface Node {
  type: { name: string };
  attrs: { id: string; level: number };
  textContent: string;
}

const TiptapWrapper: React.FC<TiptapWrapperProps> = ({ editor }) => {
  const [items, setItems] = useState<HeadingItem[]>([]);

  const handleUpdate = useCallback(() => {
    const headings: HeadingItem[] = [];
    const transaction = editor.state.tr;

    editor.state.doc.descendants((node: ProseMirrorNode, pos: number) => {
      if (node.type.name === 'heading') {
        const id = `heading-${headings.length + 1}`;

        // Check if the node has the necessary attributes
        const level = node.attrs.level as number;
        const nodeId = node.attrs.id as string;

        if (nodeId !== id) {
          transaction.setNodeMarkup(pos, undefined, {
            ...node.attrs,
            id,
          });
        }

        headings.push({
          level: level,
          text: node.textContent,
          id,
        });
      }
    });
    transaction.setMeta('addToHistory', false);
    transaction.setMeta('preventUpdate', true);

    editor.view.dispatch(transaction);

    setItems(headings);
  }, [editor]);

  useEffect(handleUpdate, []);

  useEffect(() => {
    if (!editor) {
      return;
    }

    editor.on('update', handleUpdate);

    return () => {
      editor.off('update', handleUpdate);
    };
  }, [editor]);

  return (
    <NodeViewWrapper className="toc">
      <ul className="toc__list">
        {items.map((item, index) => (
          <li key={index} className={`toc__item toc__item--${item.level}`}>
            <div>{item.text}</div>
          </li>
        ))}
      </ul>
    </NodeViewWrapper>
  );
};

export default TiptapWrapper;
