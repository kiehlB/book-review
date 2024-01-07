'use client';

import { useHeadingsData } from '@/hooks/use-headings-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { getScrollTop } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const PostTableOfContents = () => {
  const { theme } = useTheme();
  const [activeId, setActiveId] = useState('');
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
    const headingTops = nestedHeadings.map(({ id }: { id: string }) => {
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
      setActiveId('');
      return;
    }

    setActiveId(currentHeading.id);
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

  if (!nestedHeadings || !headingTops) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="scrollbar-thumb-slate-600 flex max-h-[calc(100vh-128px)] flex-col overflow-x-hidden overflow-y-scroll border-l-2 text-[#868e96] scrollbar scrollbar-track-gray-100 scrollbar-w-1 dark:text-[#acacac]">
      {nestedHeadings?.map(item => (
        <Toc
          $isdark={theme!}
          className="mt-[6px] text-sm"
          $active={activeId === item.id}
          key={item.id}
          style={{ marginLeft: item.level * 12 }}>
          <a href={`#${item.id}`}>{item.title}</a>
        </Toc>
      ))}
    </nav>
  );
};

export default PostTableOfContents;

type TocProps = {
  $active: boolean;
  $isdark: string;
};

const activeStyle = (props: TocProps) => {
  if (!props.$active) return '';

  return css`
    color: ${props.$isdark === 'dark' ? '#ececec' : '#212529'};
    font-weight: 700;
    transform: scale(1.02);
  `;
};

const Toc = styled.div<TocProps>`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  a {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      color: ${props => (props.$isdark === 'dark' ? '#ececec' : '#212529')};
    }
    text-decoration: none;
    color: inherit;
  }

  // Use the activeStyle function here
  ${activeStyle}
`;
