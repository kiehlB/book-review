import { useEffect, useState } from 'react';

export interface HeadingItem {
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

  useEffect(() => {
    const contentElement = document.getElementById('content');
    const headingElements = Array.from(
      contentElement?.querySelectorAll('h1, h2, h3') ?? [],
    ) as HTMLHeadingElement[];

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};
