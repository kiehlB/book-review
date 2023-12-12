'use client';

import React, { useState } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const router = useRouter();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedValue = input.trim();

    if (trimmedValue === '') {
      return;
    }

    router.push(`/search/${input}`);
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className="col-span-6 md:hidden mxl:col-span-5">
      <div className="relative">
        <div className="bg-[rgb(255 115 179)] dark:text-darkText-100 absolute left-[16px] top-[50%] translate-y-[-50%]">
          <IoSearchOutline />
        </div>
        <input
          value={input}
          placeholder="포스트를 검색해 보세요"
          onChange={e => setInput(e.target.value)}
          className="custom-input h-[42px] w-full rounded-l-2xl rounded-r-2xl bg-[#F5F7FA] px-[2.5rem] py-[0.5rem] text-sm focus:outline-none dark:border-[#1a1b1e] dark:bg-dark-400 dark:text-[#e4e5e7]"
        />
      </div>
    </form>
  );
}
