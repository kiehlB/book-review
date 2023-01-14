import { useCallback, useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
export default function useForms(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const handleChange = useCallback(
    e => {
      e.persist();
      dispatch(e.target);
    },
    [state],
  );

  return [state, handleChange];
}
