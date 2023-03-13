import React, { useContext, useEffect, useRef, useState } from 'react';
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
      <div className="flex mb-auto text-lg text-[#212529] font-semibold dark:text-[#e4e5e7]">
        {title}
      </div>
      {primaryItems && <HomeTab primaryItems={primaryItems} />}
    </div>
  );
}

export default HomeTitle;
