import React, { useState } from 'react';
import HomeTitle from '@/components/home/home-title';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  return (
    <div>
      <HomeTitle title="게시판" />
      <div>준비중</div>
      {/* <div className="flex items-center justify-between">
        <HomeTitle title="게시판" />
      </div>
      <NoticeBoard />
      <Pagination count={10} variant="outlined" shape="rounded" />

      <div className="flex justify-between">
        <div className="cursor-pointer rounded-3xl bg-[#FCD535] px-[20px] py-[10px] text-sm font-semibold text-[#181A20] hover:text-[#5b646d] mxs:hidden">
          글쓰기
        </div>
      </div> */}
    </div>
  );
}
