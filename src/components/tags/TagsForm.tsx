import React, { useState } from 'react';

export type TagsFormProps = {
  addTag?: (text: string) => void;
};

function TagsForm(props: TagsFormProps) {
  const [value, setValue] = useState('');

  const checkKeyDown = e => {
    if (e.code === 'Enter') e.preventDefault();
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (!value) return;
    props.addTag(value);
    setValue('');
  };
  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="태그를 입력하세요"
        />
      </form>
    </>
  );
}

export default TagsForm;
