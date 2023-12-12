import React from 'react';

export interface TableContentProps {
  svg: React.ReactNode;
  title: string;
  subtitle: string;
}

function TableContent({ svg, title, subtitle }: TableContentProps) {
  return (
    <article className="flex h-full items-center justify-center rounded-2xl bg-[#fff] dark:bg-dark-400">
      <div className="mx-auto flex w-[80%] items-center justify-between mxs:w-[90%] mxs:text-center">
        <section className="mb-[10%] w-[50%] mxs:w-[100%]">
          <h2 className="text-xl font-semibold text-[#333332] dark:text-dark-100">
            {title}
          </h2>
          <p className="w-[80%] pt-[1rem] font-medium text-[#4b4b4b] dark:text-dark-100 mxs:w-[100%]">
            {subtitle}
          </p>
        </section>
        <figure className="w-[50%] mxs:hidden">{svg}</figure>
      </div>
    </article>
  );
}

export default TableContent;
