import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  flex?: number;
  marginRight?: number | string;
  noSpacing?: boolean;
  circle?: boolean;
  className?: string;
  borderRadius?: string;
  isdark?: string;
};

type SkeletonTextsProps = {
  wordLengths: number[];
  useFlex?: boolean;
  isdark?: string;
};

export function SkeletonTexts({ wordLengths, useFlex, isdark }: SkeletonTextsProps) {
  return (
    <>
      {wordLengths.map((length, index) => {
        const props = {
          [useFlex ? 'flex' : 'width']: useFlex ? length : `${length}rem`,
        };
        return <Skeleton key={index} {...props} isdark={isdark} />;
      })}
    </>
  );
}

export function Skeleton({
  width,
  height,
  flex,
  marginRight,
  noSpacing,
  circle,
  className,
  borderRadius,
  isdark,
}: SkeletonProps) {
  return (
    <Block
      isdark={isdark}
      style={{ width, height, flex, marginRight, borderRadius }}
      noSpacing={noSpacing}
      circle={circle}
      className={className}
    />
  );
}

const shining = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const Block = styled.span<{ noSpacing?: boolean; circle?: boolean; isdark: string }>`
  background: ${props => (props.isdark == 'dark' ? '#2b2d31' : '#f1f3f5')};

  animation: ${shining} 1s ease-in-out infinite;
  display: inline-block;
  border-radius: 4px;
  height: 1em;

  ${props =>
    !props.noSpacing &&
    css`
      & + & {
        margin-left: 0.5rem;
      }
    `}
  ${props =>
    props.circle &&
    css`
      border-radius: 50%;
    `}
`;
