import React from 'react';
import { BASE_SIZE } from '@/lib/constants';

export const DEFAULT_TABLE_ROW_HEIGHT = BASE_SIZE * 3;

export interface DefaultTableContentProps {
  svg: React.ReactNode;
  title: string;
  subtitle: string;
}

function DefaultTableContent({ svg, title, subtitle }: DefaultTableContentProps) {
  return (
    <div className="flex h-full items-center justify-center rounded-2xl bg-[#fff]">
      <div className="mx-auto flex w-[80%] items-center justify-between">
        <div className="mb-[10%] w-[50%]">
          <p className="text-xl font-semibold text-[#333332]">{title}</p>
          <p className="w-[80%] pt-[1rem] font-medium text-[#4b4b4b]">{subtitle}</p>
        </div>
        <div className="w-[50%]">{svg}</div>
      </div>
    </div>
  );
}

export default DefaultTableContent;
