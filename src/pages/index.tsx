import React, { useState } from 'react';
import Header from '../components/base/Header';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';

export default function Home() {
  return (
    <div>
      <Header />
      <PageGrid>
        <div className="col-span-2">
          <nav className="sticky top-0 border">
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
          </nav>
        </div>
        <div className="col-span-8">
          <div className="flex justify-between">
            <div>dd</div>
            <div>dd</div>
          </div>
          <PostGrid className="pt-[100px]">
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
          </PostGrid>
        </div>
      </PageGrid>
    </div>
  );
}
