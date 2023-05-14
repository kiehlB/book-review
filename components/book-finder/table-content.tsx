import React from 'react';
import { BASE_SIZE } from '../../lib/constants';

export const DEFAULT_TABLE_ROW_HEIGHT = BASE_SIZE * 3;

export interface TableContentProps {
  svg: React.ReactNode;
  title: string;
  subtitle: string;
}

function TableContent({ svg, title, subtitle }: TableContentProps) {
  return (
    <div className="flex h-full items-center justify-center rounded-2xl bg-[#fff] dark:bg-[#2b2d31]">
      <div className="mxs:text-center mxs:w-[90%] mx-auto flex w-[80%] items-center justify-between">
        <div className="mxs:w-[100%] mb-[10%] w-[50%]">
          <div className="text-xl font-semibold text-[#333332] dark:text-[#e4e5e7]">
            {title}
          </div>
          <div className="mxs:w-[100%] w-[80%] pt-[1rem] font-medium text-[#4b4b4b] dark:text-[#e4e5e7]">
            {subtitle}
          </div>
        </div>
        <div className="mxs:hidden w-[50%]">{svg}</div>
      </div>
    </div>
  );
}

export default React.memo(TableContent);
