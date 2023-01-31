import React, { useEffect, useRef, useState } from 'react';
import useEditor2 from './hooks/useCreatePost';
export type TapProps = {
  isOpen;
  SetisOpen;
};

function WriteHead({ isOpen, SetisOpen }: TapProps) {
  const { handleSubmit } = useEditor2();
  const [isEditing, setEditing] = useState(false);

  return (
    <div className="flex justify-between items-center px-[1rem]">
      <div className="text-4xl font-bold focus:outline-none w-full mmd:text-[2rem] pt-[2rem] mxs:text-lg">
        <input name="title" placeholder="제목을 입력하세요" className="w-full" />
        <hr className="border-2 w-6/12 mt-3.5 h-1" />
      </div>

      <div className="flex">
        <div className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] mr-4">
          saved
        </div>
        <div
          className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20]"
          onClick={() => SetisOpen(!isOpen)}>
          publish
        </div>
      </div>
    </div>
  );
}

export default WriteHead;
