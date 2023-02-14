import { useCallback, useEffect, useState } from 'react';
import { useHeadingsData } from '../../hooks/useHeadingsData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { getScrollTop } from '../../lib/utils';

const PostTableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);
  const [headingTops, setHeadingTops] = useState<
    | null
    | {
        id: string;
        top: number;
      }[]
  >(null);

  const updateTocPositions = useCallback(() => {
    if (!nestedHeadings) return;
    const scrollTop = getScrollTop();
    const headingTops = nestedHeadings.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) {
        return {
          id,
          top: 0,
        };
      }
      const top = el.getBoundingClientRect().top + scrollTop;
      return {
        id,
        top,
      };
    });
    setHeadingTops(headingTops);
  }, [nestedHeadings]);

  useEffect(() => {
    updateTocPositions();
    let prevScrollHeight = document.body.scrollHeight;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    function checkScrollHeight() {
      const scrollHeight = document.body.scrollHeight;
      if (prevScrollHeight !== scrollHeight) {
        updateTocPositions();
      }
      prevScrollHeight = scrollHeight;
      timeoutId = setTimeout(checkScrollHeight, 250);
    }
    timeoutId = setTimeout(checkScrollHeight, 250);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [updateTocPositions]);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    if (!headingTops) return;
    const currentHeading = [...headingTops].reverse().find(headingTop => {
      return scrollTop >= headingTop.top - 4;
    });
    if (!currentHeading) {
      setActiveId(null);
      return;
    }

    setActiveId(currentHeading.id as any);
  }, [headingTops]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return (
    <nav
      aria-label="Table of contents"
      className="flex flex-col text-[#868E96] max-h-[calc(100vh-128px)] overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thumb-slate-600 scrollbar-track-gray-100 scrollbar-w-1">
      {nestedHeadings?.map(item => (
        <div key={item.id}>
          <a href={`#${item.id}`}>{item.title}</a>
        </div>
      ))}
    </nav>
  );
};

export default PostTableOfContents;
