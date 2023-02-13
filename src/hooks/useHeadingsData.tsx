import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

const getNestedHeadings = headingElements => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === 'H1') {
      nestedHeadings.push({ id, title, items: [], level: 1 });
    } else if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [], level: 2 });
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings.push({ id, title, items: [], level: 3 });
    }
  });

  return nestedHeadings;
};

export const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);
  const isLoading = useSelector((state: RootState) => state.core.isLoading);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h1,h2, h3'));

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, [isLoading]);

  return { nestedHeadings };
};
