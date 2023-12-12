import React from 'react';
import HomeTab from './home-tab';

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
    <div className="my-4 flex items-center justify-between">
      <h1 className="mb-auto flex text-lg font-semibold text-[#212529] dark:text-[#e4e5e7]">
        {title}
      </h1>
      {primaryItems && <HomeTab primaryItems={primaryItems} />}
    </div>
  );
}

export default HomeTitle;
