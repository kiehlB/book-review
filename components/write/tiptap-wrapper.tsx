import { NodeViewWrapper } from '@tiptap/react';
import React, { useCallback, useEffect, useState } from 'react';

const TiptapWrapper = ({ editor }: any) => {
  const [items, setItems] = useState([]);

  const handleUpdate = useCallback(() => {
    const headings = [] as any;
    const transaction = editor.state.tr;

    editor.state.doc.descendants(
      (
        node: {
          type: { name: string };
          attrs: { id: string; level: any };
          textContent: any;
        },
        pos: any,
      ) => {
        if (node.type.name === 'heading') {
          const id = `heading-${headings.length + 1}`;

          if (node.attrs.id !== id) {
            transaction.setNodeMarkup(pos, undefined, {
              ...node.attrs,
              id,
            });
          }

          headings.push({
            level: node.attrs.level,
            text: node.textContent,
            id,
          });
        }
      },
    );

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
        {items.map((item: any, index) => (
          <li key={index} className={`toc__item toc__item--${item.level}`}>
            <div>{item.text}</div>
          </li>
        ))}
      </ul>
    </NodeViewWrapper>
  );
};

export default TiptapWrapper;
