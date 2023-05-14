import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (setActiveId: (id: string) => void): void => {
  const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

  useEffect(() => {
    const callback: IntersectionObserverCallback = headings => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingElementsRef.current).forEach(key => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string): number =>
        headingElements.findIndex(heading => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b): any => getIndexFromId(a.target.id) > getIndexFromId(b.target.id),
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -40% 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('h2, h3'));

    headingElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};
