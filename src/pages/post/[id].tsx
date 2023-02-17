import PostTableOfContents from '../../components/common/PostTableOfContent';
import { PageLayout } from '../../components/layout/PageLayout';

import { parseHeadings2, setHeadingId } from '../../lib/heading';
import { EditorContent, useEditor } from '@tiptap/react';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Highlight from '@tiptap/extension-highlight';
import TypographyExtension from '@tiptap/extension-typography';
import UnderlineExtension from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Dropcursor from '@tiptap/extension-dropcursor';
import Code from '@tiptap/extension-code';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Focus from '@tiptap/extension-focus';
import StarterKit from '@tiptap/starter-kit';
import { ColorHighlighter } from '../../components/write/ColourHighlighter';
import TableOfContents from '../../components/write/TableOfContents';
import UniqueID from '../../components/write/UniqueID';
import { useEffect, useState } from 'react';
import useGetPost from '../../components/write/hooks/useGetSinglePost';
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../lib/apolloClient';
import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { getNextSeo } from '../../lib/nextSeo';
import PawButton from '../../components/common/PawButton';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { getcoreIsLoading } from '../../store/core';
import TextStyle from '@tiptap/extension-text-style';
import 'moment/locale/ko';
import moment from 'moment';
import Comments from '../../components/comments/Comments';
import { AppLayout, First, MainNav, Third } from '../../components/layout/AppLayout';

export type PostProps = {
  id: string;
};

function Post({ id }: PostProps) {
  const { singlePostLoding, singlePostError, singlePostData } = useGetPost();
  const dispatch = useDispatch();
  const insertID = setHeadingId(singlePostData?.post?.body);
  const { isdark } = useSelector((state: RootState) => state.core);
  const { auth } = useSelector((state: any) => state.auth);

  const BodyResult = insertID.replace('<toc></toc>', '');

  if (singlePostLoding) return <div>d</div>;

  return (
    <>
      <NextSeo {...getNextSeo({ title: 'Book Review Write', description: '책리뷰' })} />

      <PageLayout>
        <AppLayout
          first={
            <First>
              <PostTitle className="text-[#212529] text-[2.5rem] max-w-[72rem] mx-auto font-bold px-[5rem] text-center mt-[3rem] mb-[3rem] dark:text-[#ececec]">
                {singlePostData?.post?.title}
              </PostTitle>

              <div className="flex justify-center items-center text-[#212529] dark:text-[#ececec]">
                <div className="text-lg font-semibold">
                  {singlePostData?.post?.user?.username}
                </div>
                <div className="mx-[0.75rem]  font-bold text-[#64748b] text-lg">·</div>
                <div className="text-lg text-[#344155] dark:text-[#ececec]">
                  {moment(singlePostData.post?.released_at).format('YYYY년 MMMM Do')}
                </div>
              </div>
            </First>
          }
          second={
            <MainNav>
              <div className="grid grid-cols-10 max-w-[96rem] mx-auto gap-[1.5rem] mt-[5.5rem]">
                <div className="col-span-2 justify-self-center">
                  <div className="sticky top-24">
                    <PawButton id={id} isdark={isdark} />
                  </div>
                </div>

                <div className="col-span-6 w-full">
                  <Content isdark={isdark} className="max-w-[812.5px] mx-auto">
                    <div dangerouslySetInnerHTML={{ __html: BodyResult }} />
                  </Content>

                  <Comments
                    commentCount={singlePostData?.post?.subs_count}
                    comments={singlePostData?.post?.subs}
                    postId={singlePostData?.post?.id}
                    isMine={singlePostData?.post?.user?.id == auth.id}
                  />
                </div>
                <div className="col-span-2">
                  <div className="sticky top-24">
                    <PostTableOfContents isdark={isdark} />
                  </div>
                </div>
              </div>
            </MainNav>
          }
        />
      </PageLayout>
    </>
  );
}

export default Post;

{
  /* <div className="flex">
              <div className="card">
                <div className="imgBox">
                  <div className="bark"></div>
                  <img
                    src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1165488%3Ftimestamp%3D20221227143803"
                    width="120px"
                    height="174px"
                  />
                </div>
                <div className="details">
                  <h4 className="text-[10px]">
                    {singlePostData.post?.bookInfo.bookContent}
                  </h4>
                </div>
              </div>
              <div className="flex flex-col">
                <div>{singlePostData.post?.bookInfo?.bookTitle}</div>
                <div>{singlePostData.post?.bookInfo?.bookAuthors?.map(e => e)}</div>
              </div>
            </div> */
}

export const getServerSideProps: GetServerSideProps = async context => {
  if (context.query.id && typeof context.query.id === 'string') {
    const { id } = context.query;

    return { props: { id } };
  }
};

const PostTitle = styled.section`
  display: -webkit-box;
  line-height: 1.5;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
  height: 100%;
`;

const Content = styled.div<{ isdark: string }>`
  white-space: initial;
  word-wrap: break-word;

  img {
    height: 100%;
    max-width: 100%;
    object-fit: cover;

    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    letter-spacing: -0.004em;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
  }

  h2 {
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    letter-spacing: -0.004em;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
  }
  h3 {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    letter-spacing: -0.004em;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
  }
  h4 {
    font-size: 1.3125rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    letter-spacing: -0.004em;
    margin-top: 1.5rem;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
  }

  min-height: 100%;
  max-height: 100%;
  width: 100%;

  ol {
    list-style: none;
    counter-reset: my-awesome-counter;
    margin-top: 1rem;
    margin-bottom: 1rem;
    counter-increment: list;

    li {
      display: block;
      clear: both;
      font-size: 1.1rem;
      line-height: 1.375;
      position: relative;
      counter-increment: my-awesome-counter;
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    li:before {
      content: counter(my-awesome-counter);
      width: 2.8rem;
      height: 2.8rem;
      float: left;
      margin: 0 1.5rem 0rem 0;
      color: #fdfdfd;
      background: #ed4264 linear-gradient(to bottom right, #ed4264 25%, #ffedbc);
      text-shadow: 0 0 2px #ed4264;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      shape-outside: ellipse();
      z-index: 1;
    }
    li:after {
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      background: #ed4264;
      z-index: -1;
      border-top-left-radius: 3px;
    }
  }

  ul {
    list-style: none;
    counter-reset: my-awesome-counter;
    counter-increment: list;

    li {
      align-items: center;
      display: flex;
    }
    li:before {
      content: '•';
      margin: 0 1rem 0rem 0;
      display: block;
      clear: both;
      font-size: 1.1rem;
      line-height: 1.8;
      position: relative;
      counter-increment: my-awesome-counter;
      display: flex;
      color: #fdb813;
      align-items: center;
    }
  }

  code {
    background-color: #ffe066;
    color: #212529;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 90%;
  }
  div {
    .toc {
      margin-bottom: 1.5rem;
    }
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};

    .toc__list::before {
      color: ${props => (props.isdark == 'dark' ? 'white' : '')};
    }
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  .quote {
    margin: 0 auto;
    position: relative;
    padding-left: 55px;
    margin: 72px 0;

    &:before {
      color: #fcd545;
      font-size: 100px;
      font-family: 'Comic Sans MS', 'Comic Sans', cursive;
      line-height: 0.9;
      content: open-quote;
      vertical-align: top;

      position: absolute;
      left: -5px;
    }
    &:after {
      visibility: hidden;
      content: close-quote;
    }
  }

  hr {
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 1.5rem 0;
  }

  .ptag {
    font-size: 1.125rem;
    line-height: 1.7;
    letter-spacing: -0.004em;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
    display: block;
  }

  u {
    text-decoration: none;

    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      linear-gradient(to right, #e9756b, #e9756b, #e9756b);
    background-size: 100% 0.1em, 30% 0.1em;
    background-position: 100% 100%, 0 100%;

    background-repeat: no-repeat;
    transition: background-size 600ms;
    &:hover {
      background-size: 100% 0.1em, 100% 0.1em;
    }
  }
`;
