import { Table } from 'evergreen-ui';
import React from 'react';
import { BASE_SIZE } from '../../lib/constants';

export const DEFAULT_TABLE_ROW_HEIGHT = BASE_SIZE * 3;

function TalbeContent({ svg, title, subtitle }) {
  return (
    <div className="flex h-full justify-center items-center bg-[#fff] rounded-2xl">
      <div className="flex justify-between items-center w-[80%] mx-auto mxs:text-center mxs:w-[90%]">
        <div className="mb-[10%] w-[50%] mxs:w-[100%]">
          <div className="text-xl text-[#333332] font-semibold">{title}</div>
          <div className="text-[#4b4b4b] pt-[1rem] w-[80%] font-medium mxs:w-[100%]">
            {subtitle}
          </div>
        </div>
        <div className="w-[50%] mxs:hidden">{svg}</div>
      </div>
    </div>
  );
}

export default React.memo(TalbeContent);
