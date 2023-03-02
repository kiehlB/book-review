import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import transitions from '../../lib/transitions';
import { Tooltip, IconButton, EditIcon } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { getPostSaveSuccess, getPostTags } from '../../store/book';
import { RootState } from '../../store/rootReducer';

export type TagsFormProps = {
  addTag?: (text: string) => void;
  StoreTag: any;
  postId: any;
  posts: any;
};

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

const TagItem = ({ onClick, children, posts }: any) => {
  return <Tag onClick={onClick}>{children}</Tag>;
};

function TagsForm(props: TagsFormProps) {
  const isopen = useSelector((state: RootState) => state.book.isopen);
  const postSave = useSelector((state: RootState) => state.book.postSave);
  const temporaryClick = useSelector((state: RootState) => state.book.temporaryClick);

  const findPost = props.posts?.filter(e => e.id == props.postId);

  const [value, setValue] = useState('');
  const [tags, setTags] = useState([]);
  const ignore = useRef(false);
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostTags(tags));
  }, [isopen, postSave]);

  useEffect(() => {
    if (props.StoreTag.length >= 1) {
      console.log('ddd');
      setTags([...props.StoreTag]);
    }
  }, [props.postId]);

  useEffect(() => {
    if (findPost?.length >= 1) {
      console.log(findPost[0]);
      setTags([...findPost[0]?.tags?.map(e => e?.tag?.name)]);
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
    const nextTags = tags.filter(t => t !== tag);
    setTags(nextTags);
  };

  return (
    <div>
      {tags.map(tag => (
        <TagItem key={tag} onClick={() => onRemove(tag)}>
          {tag}
        </TagItem>
      ))}

      <Tooltip content="엔터키로 등록, 태그를 클릭하면 삭제 됩니다">
        <input
          placeholder="태그를 입력하세요"
          tabIndex={2}
          onKeyDown={onKeyDown}
          onChange={onChangeInput}
          className="dark:bg-[#1a1b1e] dark:text-[#D3D3D3] dark:placeholder-[#D3D3D3] outline-none"
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </Tooltip>
    </div>
  );
}

export default React.memo(TagsForm);
