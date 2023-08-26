import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

interface HeadingItem {
  id: string;
  title: string;
  items: HeadingItem[];
  level: number;
}

const getNestedHeadings = (headingElements: HTMLHeadingElement[]): HeadingItem[] => {
  const nestedHeadings: HeadingItem[] = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === 'H1') {
      nestedHeadings.push({ id, title, items: [], level: 1 });
    } else if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [], level: 2 });
    } else if (heading.nodeName === 'H3') {
      nestedHeadings.push({ id, title, items: [], level: 3 });
    }
  });

  return nestedHeadings;
};

export const useHeadingsData = (): { nestedHeadings: HeadingItem[] } => {
  const [nestedHeadings, setNestedHeadings] = useState<HeadingItem[]>([]);
  const isLoading = useSelector((state: RootState) => state.core.isLoading);

  useEffect(() => {
    const contentElement = document.getElementById('content');
    const headingElements = Array.from(
      contentElement?.querySelectorAll('h1, h2, h3') ?? [],
    ) as HTMLHeadingElement[];

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, [isLoading]);

  return { nestedHeadings };
};
