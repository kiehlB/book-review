import { NextSeo } from 'next-seo';
import { useSelector } from 'react-redux';
import PostPublishTemplate from '../components/write/PostPublishTemplate';
import WriteTemplate from '../components/write/WriteTemplate';
import { getNextSeo } from '../lib/nextSeo';
import { RootState } from '../store/rootReducer';

export type WriteProps = {};

function Write({}: WriteProps) {
  return (
    <div className="">
      <NextSeo
        {...getNextSeo({ title: '책 리뷰 작성', description: '책 리뷰 작성 페이지' })}
      />
      <WriteTemplate />
      <PostPublishTemplate />
    </div>
  );
}

export default Write;
