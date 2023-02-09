import { NextSeo } from 'next-seo';
import { useContext, useState } from 'react';
import PostPublish from '../components/write/PostPublish';
import WriteTemplate from '../components/write/WriteTemplate';
import ModalContext from '../context/modalContext';
import { getNextSeo } from '../lib/nextSeo';

export type WriteProps = {};

function Write({}: WriteProps) {
  const [isOpen, SetisOpen] = useState(false);

  return (
    <>
      <NextSeo
        {...getNextSeo({ title: '책 리뷰 작성', description: '책 리뷰 작성 페이지' })}
      />
      <WriteTemplate isOpen={isOpen} SetisOpen={SetisOpen} />
      <PostPublish isOpen={isOpen} SetisOpen={SetisOpen} />
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default Write;
