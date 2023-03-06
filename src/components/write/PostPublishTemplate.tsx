import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { HiOutlineLockOpen, HiOutlineLockClosed } from 'react-icons/hi';
import { Button } from '../common/Button';
import useCreatePost from './hooks/useCreatePost';
import { getIsOpenSuccess } from '../../store/book';
import { AppLayout, First, Second, Third } from '../layout/AppLayout';
import PublishCoreButton from './PublishCoreButton';
import PostThumbnail from './Thumbnail';
import { useMutation } from '@apollo/client';
import { UPLOAD_IMAGE_TO_CLOUDINARY } from '../../lib/graphql/posts';
import { UploadImageToCloudinaryMutation } from '../../types/apolloComponent';
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
          'fixed flex justify-center items-center left-0 top-0 w-full h-full bg-[#F8F9FA] z-[500]',
        )}
        initial={{ display: 'none' }}
        animate={isopen ? 'open' : 'closed'}
        variants={liVariants}>
        <AppLayout
          className="w-[768px] flex px-4 mxs:flex-col mxs:overflow-auto mxs:h-[100%] mxs:py-4"
          first={
            <First>
              <div className="flex-1 min-w-[0]">
                <PostThumbnail
                  addImage={addImage}
                  readyForFile={readyForFile}
                  setPreviewSource={setPreviewSource}
                  uploadThumbnail={uploadThumbnail}
                  previewSource={previewSource}
                  setreadyForFile={setreadyForFile}
                  thumbnail={thumbnail}
                />

                <div className="text-[1.3rem] text-[#212529] font-semibold mt-4 mxs:py-2">
                  등록될 책
                </div>
                <div>
                  <div className="text-[1rem] text-[#212529] font-semibold py-2">
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
              <div className="w-[1px] min-h-[425px] bg-[#757575] mx-[2rem] mxs:hidden"></div>
            </Second>
          }
          third={
            <Third>
              <div className="flex flex-col justify-between flex-1 min-w-[0] mxs:mt-4">
                <div>
                  <div className="w-full text-[1.3rem] text-[#212529] font-semibold mb-2">
                    공개 설정
                  </div>
                  <div className="outline-none flex">
                    <div
                      onClick={onClickPublic}
                      className={clsx(
                        'w-full flex-1 h-[3rem] outline-none border inline-flex justify-start font-bold items-center p-0 rounded shadow-sm pl-[1rem]',
                        {
                          'border-[#FCd545] text-[#191919] bg-[#FCd545] border':
                            isPrivate == false,
                          'bg-[#fff]': isPrivate == true,
                        },
                      )}>
                      <HiOutlineLockOpen size={24} />
                      <div className="flex-1 flex justify-center items-center">
                        전체 공개
                      </div>
                    </div>

                    <div
                      onClick={onClickPrivate}
                      className={clsx(
                        'w-full outline-none flex-1 h-[3rem] border inline-flex justify-start font-bold ml-[1rem] items-center p-0 rounded shadow-sm pl-[1rem]',
                        {
                          'border-[#FCd545] text-[#191919] border bg-[#FCd545]':
                            isPrivate == true,
                          'bg-[#fff]': isPrivate == false,
                        },
                      )}>
                      <HiOutlineLockClosed size={24} />
                      <div className="flex-1 flex justify-center items-center">
                        비공개
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxs:mt-4">
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
