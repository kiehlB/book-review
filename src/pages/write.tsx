import { NextSeo } from 'next-seo';
import PostPublishTemplate from '../components/write/PostPublishTemplate';
import WriteTemplate from '../components/write/WriteTemplate';
import { getNextSeo } from '../lib/nextSeo';

export type WriteProps = {};

function Write({}: WriteProps) {
  return (
    <>
      <NextSeo
        {...getNextSeo({ title: '책 리뷰 작성', description: '책 리뷰 작성 페이지' })}
      />
      <WriteTemplate />
      <PostPublishTemplate />
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
