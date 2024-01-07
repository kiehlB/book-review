'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import transitions from '@/lib/transitions';
import useBookStore from '@/store/book';
import { Post } from '@/types/apolloComponent';

export type TagsFormProps = {
  addTag?: (text: string) => void;
  StoreTag: string[];
  postId: string | null;
  posts: Post[];
};

interface TagItemProps {
  onClick: () => void;
  children: React.ReactNode;
}

const TagItem = ({ onClick, children }: TagItemProps) => {
  return <Tag onClick={onClick}>{children}</Tag>;
};

function TagsForm(props: TagsFormProps) {
  const findPost = props.posts?.filter(e => e.id == props.postId);
  const { tags, setTags } = useBookStore();

  const [value, setValue] = useState('');
  // const [tags, setTags] = useState<string[]>([]);
  const ignore = useRef(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (props.StoreTag.length >= 1) {
      setTags([...props.StoreTag]);
    }
  }, [props.postId]);

  useEffect(() => {
    if (findPost?.length >= 1) {
      setTags([
        ...(findPost[0]?.tags
          ?.filter(e => e?.tag?.name !== undefined)
          .map(e => e?.tag?.name ?? '') ?? []),
      ] as string[]);
    }
  }, [props.postId]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const insertTag = useCallback(
    (tag: string) => {
      ignore.current = true;
      setValue('');
      if (tag === '' || tags.includes(tag)) return;
      let processed = tag;
      processed = tag.trim();
      if (processed.indexOf(' #') > 0) {
        const tempTags: string[] = [];
        const regex = /#(\S+)/g;
        let execArray: RegExpExecArray | null = null;
        while ((execArray = regex.exec(processed))) {
          if (execArray !== null) {
            tempTags.push(execArray[1]);
          }
        }
        setTags([...tags, ...tempTags]);
        return;
      }
      if (processed.charAt(0) === '#') {
        processed = processed.slice(1, processed.length);
      }
      setTags([...tags, processed]);
    },
    [tags],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && value === '') {
        setTags(tags.slice(0, tags.length - 1));
        return;
      }
      const keys = ['Enter'];
      if (keys.includes(e.key)) {
        e.preventDefault();
        insertTag(value);
      }
    },
    [insertTag, tags, value],
  );

  const onRemove = (tag: string) => {
    const nextTags = tags.filter((t: string) => t !== tag);
    setTags(nextTags);
  };

  return (
    <div>
      {tags.map((tag: string) => (
        <TagItem key={tag} onClick={() => onRemove(tag)}>
          {tag}
        </TagItem>
      ))}

      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="엔터키로 등록, 태그를 클릭하면 삭제 됩니다">
        <input
          placeholder="태그를 입력하세요"
          tabIndex={2}
          onKeyDown={onKeyDown}
          onChange={onChangeInput}
          className="outline-none dark:bg-dark-500 dark:text-[#D3D3D3] dark:placeholder-[#D3D3D3]"
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  );
}

export default React.memo(TagsForm);

const Tag = styled.div`
  color: #121212;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  height: 2rem;
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background: #fcd545;
  margin-right: 0.75rem;
  transition: ease-in 0.125s;
  cursor: pointer;
  text: #212529;
  &:hover {
    opacity: 0.6;
  }
  margin-bottom: 0.75rem;
  animation: ${transitions.popIn} 0.125s forwards ease-in-out;
`;
