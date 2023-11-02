import { inputProps } from '@/components/auth/auth-form';
import { useCallback, useReducer } from 'react';

function reducer(state: any, action: { name: any; value: any }) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
export default function useForms(initialForm: inputProps) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const handleChange = useCallback(
    (e: { target: any }) => {
      dispatch(e.target);
    },
    [state],
  );

  return [state, handleChange];
}
