import { useState } from 'react';

type UseInputReturnType = [
  string,
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
];

export default function useInput(initialValue: string): UseInputReturnType {
  const [value, setValue] = useState(initialValue);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setValue(event.target.value);
  }

  return [value, handleChange];
}
