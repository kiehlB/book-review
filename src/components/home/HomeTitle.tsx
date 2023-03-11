import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import ActivityDateRangePicker from '../datePicker/DateRange';
import HomeTab from './HomeTab';

export type TabProps = {
  svg: React.ReactNode;
  name: string;
  href: string;
};

export type HomeTitleProps = {
  title: string;
  primaryItems?: TabProps[];
};

function HomeTitle({ title, primaryItems }: HomeTitleProps) {
  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex mb-auto text-lg text-[#212529] pb-[0.5rem] font-semibold dark:text-[#e4e5e7]">
        {title}
      </div>
      {primaryItems && <HomeTab primaryItems={primaryItems} />}
    </div>
  );
}

export default HomeTitle;
