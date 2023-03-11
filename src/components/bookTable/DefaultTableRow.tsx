import React from 'react';
import { BASE_SIZE } from '../../lib/constants';

export const DEFAULT_TABLE_ROW_HEIGHT = BASE_SIZE * 3;

export interface DefaultTableContentProps {
  svg: React.ReactNode;
  title: string;
  subtitle: string;
}

function DefaultTableContent({ svg, title, subtitle }: DefaultTableContentProps) {
  return (
    <div className="flex h-full justify-center items-center bg-[#fff] rounded-2xl">
      <div className="flex justify-between items-center w-[80%] mx-auto">
        <div className="mb-[10%] w-[50%]">
          <div className="text-xl text-[#333332] font-semibold">{title}</div>
          <div className="text-[#4b4b4b] pt-[1rem] w-[80%] font-medium">{subtitle}</div>
        </div>
        <div className="w-[50%]">{svg}</div>
      </div>
    </div>
  );
}

export default React.memo(DefaultTableContent);
