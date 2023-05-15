'use client';

import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { HiOutlineLockOpen, HiOutlineLockClosed } from 'react-icons/hi';
import useCreatePost from './hooks/useCreatePost';
import { getIsOpenSuccess } from '../../store/book';
import PublishCoreButton from './PublishCoreButton';
import PostThumbnail from './Thumbnail';
import { useMutation } from '@apollo/client';
import { UPLOAD_IMAGE_TO_CLOUDINARY } from '../../lib/graphql/posts';
import { UploadImageToCloudinaryMutation } from '../../types/apolloComponent';
import { AppLayout, First, Second, Third } from '../layout/app-layout';
export type PostPublishTemplateProps = {
  children?: React.ReactNode;
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,

    transition: {
      x: { stiffness: 1500, velocity: -100 },
    },
  },
  closed: {
    y: 2160,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

function PostPublishTemplate({}: PostPublishTemplateProps) {
  const isopen = useSelector((state: RootState) => state?.book.isopen);
  const thumbnail = useSelector((state: RootState) => state?.book.thumbnail);
  const [readyForFile, setreadyForFile] = useState('');
  const [previewSource, setPreviewSource] = useState(0);
  const [fileInputState, setFileInputState] = useState<any>();
  const [isPrivate, setIsPrivate] = useState(false);
  const book = useSelector((state: RootState) => state?.book.book);
  const [url, setUrl] = useState('');
  const [uploadThumbnail] = useMutation<UploadImageToCloudinaryMutation>(
    UPLOAD_IMAGE_TO_CLOUDINARY,
  );

  useEffect(() => {
    if (thumbnail) {
      setreadyForFile(thumbnail);
      setPreviewSource(2);
    }
  }, []);

  const addImage = useCallback(async url => {
    await uploadThumbnail({
      variables: {
        body: url,
        width: 733,
        height: 455,
      },
      update: (_proxy, { data: newData }) => {
        setUrl(newData.uploadImage.url);
        setPreviewSource(2);
      },
    });
    if (url) {
      setFileInputState(url);
    }
  }, []);

  const onClickPrivate = useCallback(() => {
    setIsPrivate(true);
  }, [isPrivate]);

  const onClickPublic = useCallback(() => {
    setIsPrivate(false);
  }, [isPrivate]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className={clsx(
          'fixed left-0 top-0 z-[500] flex h-full w-full items-center justify-center bg-[#F8F9FA]',
        )}
        initial={{ display: 'none' }}
        animate={isopen ? 'open' : 'closed'}
        variants={liVariants}>
        <AppLayout
          className="flex w-[768px] px-4 mxs:h-[100%] mxs:flex-col mxs:overflow-auto mxs:py-8"
          first={
            <First>
              <div className="min-w-[0] flex-1">
                <PostThumbnail
                  addImage={addImage}
                  readyForFile={readyForFile}
                  setPreviewSource={setPreviewSource}
                  uploadThumbnail={uploadThumbnail}
                  previewSource={previewSource}
                  setreadyForFile={setreadyForFile}
                  thumbnail={thumbnail}
                />

                <div className="mt-4 text-[1.3rem] font-semibold text-[#212529] mxs:py-2">
                  등록될 책
                </div>
                <div>
                  <div className="py-2 text-[1rem] font-semibold text-[#212529]">
                    책: {book?.title ? book?.title : '선택된 책이 없습니다'}
                  </div>
                  <div>
                    <img src={book?.thumbnail} />
                  </div>
                </div>
              </div>
            </First>
          }
          second={
            <Second>
              <div className="mx-[2rem] min-h-[425px] w-[1px] bg-[#757575] mxs:hidden"></div>
            </Second>
          }
          third={
            <Third>
              <div className="flex min-w-[0] flex-1 flex-col justify-between mxs:mt-6 mxs:block ">
                <div>
                  <div className="mb-2 w-full text-[1.3rem] font-semibold text-[#212529]">
                    공개 설정
                  </div>
                  <div className="flex outline-none">
                    <div
                      onClick={onClickPublic}
                      className={clsx(
                        'inline-flex h-[3rem] w-full flex-1 items-center justify-start rounded border p-0 pl-[1rem] font-bold shadow-sm outline-none',
                        {
                          'border border-[#FCd545] bg-[#FCd545] text-[#191919]':
                            isPrivate == false,
                          'bg-[#fff]': isPrivate == true,
                        },
                      )}>
                      <HiOutlineLockOpen size={24} />
                      <div className="flex flex-1 items-center justify-center">
                        전체 공개
                      </div>
                    </div>

                    <div
                      onClick={onClickPrivate}
                      className={clsx(
                        'ml-[1rem] inline-flex h-[3rem] w-full flex-1 items-center justify-start rounded border p-0 pl-[1rem] font-bold shadow-sm outline-none',
                        {
                          'border border-[#FCd545] bg-[#FCd545] text-[#191919]':
                            isPrivate == true,
                          'bg-[#fff]': isPrivate == false,
                        },
                      )}>
                      <HiOutlineLockClosed size={24} />
                      <div className="flex flex-1 items-center justify-center">
                        비공개
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxs:mt-8">
                  <PublishCoreButton
                    fileInputState={url}
                    isPrivate={isPrivate}
                    book={book}
                  />
                </div>
              </div>
            </Third>
          }
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default React.memo(PostPublishTemplate);
