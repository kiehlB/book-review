'use client';

import React, { useEffect, useCallback, useRef, useState } from 'react';

import { getScrollTop } from '@/lib/utils';
import Header, { HeaderProps } from '@/views/app-bar';

export type FloatingHeaderProps = {
  children?: React.ReactNode;
};

function FloatingHeader({
  IsClose,
  SetIsClose,
  SetMode,
  BookIsClose,
  SetBookClose,
  token,
  getUser,
}: HeaderProps) {
  const [visible, setVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  useEffect(() => {
    if (!blockRef.current) return;
    setHeight(blockRef.current.clientHeight);
    setMarginTop(-1 * blockRef.current.clientHeight);
  }, []);

  const prevScrollTop = useRef(0);
  const direction = useRef<'UP' | 'DOWN'>('DOWN');
  const transitionPoint = useRef(0);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    const nextDirection = prevScrollTop.current > scrollTop ? 'UP' : 'DOWN';

    if (
      direction.current === 'DOWN' &&
      nextDirection === 'UP' &&
      transitionPoint.current - scrollTop < 0
    ) {
      setVisible(true);
      transitionPoint.current = scrollTop;
    }

    if (
      direction.current === 'UP' &&
      nextDirection === 'DOWN' &&
      scrollTop - transitionPoint.current < -1 * height
    ) {
      transitionPoint.current = scrollTop + height;
    }

    if (scrollTop < 64) {
      setVisible(false);
    }

    setMarginTop(Math.min(0, -1 * height + transitionPoint.current - scrollTop));

    direction.current = nextDirection;
    prevScrollTop.current = scrollTop;
  }, [height]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <div
      className="fixed right-0 top-0 z-[999] w-full bg-white px-4 dark:bg-dark-500"
      style={
        visible
          ? {
              marginTop: marginTop,
              display: 'block',
            }
          : {
              marginTop: -1 * height,
              opacity: 0,
            }
      }
      ref={blockRef}>
      <Header
        getUser={getUser}
        token={token}
        IsClose={IsClose}
        SetIsClose={SetIsClose}
        SetMode={SetMode}
        BookIsClose={BookIsClose}
        SetBookClose={SetBookClose}
      />
    </div>
  );
}

export default FloatingHeader;
