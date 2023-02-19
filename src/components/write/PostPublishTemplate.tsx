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
  const [readyForFile, setreadyForFile] = useState(0);
  const [previewSource, setPreviewSource] = useState('');
  const [fileInputState, setFileInputState] = useState<any>();
  const [isPrivate, setIsPrivate] = useState(false);
  const book = useSelector((state: RootState) => state?.book.book);

  const handleFileInputChange = e => {
    const file = e.target.files[0];

    const previewFile = file => {
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSource(reader.result as any);
        };
      }
    };

    setreadyForFile(1);
    previewFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      setFileInputState(reader?.result as any);

      setreadyForFile(2);
    };
  };

  const onClickPrivate = useCallback(() => {
    setIsPrivate(true);
  }, [isPrivate]);

  const onClickPublic = useCallback(() => {
    setIsPrivate(false);
  }, [isPrivate]);

  const setFileValue = () => {
    setFileInputState('');
    setPreviewSource('');
  };
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
                <div className="flex justify-between items-center">
                  <div className="text-[1.3rem] text-[#212529] font-semibold mb-1">
                    썸네일 등록
                  </div>

                  <div className="flex">
                    {fileInputState ? (
                      <>
                        <div
                          className="text-base text-[#212529] cursor-pointer"
                          onClick={setFileValue}>
                          취소
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="w-full pt-[55.11%] relative">
                  <div className="w-full h-full absolute left-0 top-0 shadow">
                    {previewSource ? (
                      <img
                        src={previewSource}
                        className="w-full h-full flex items-center flex-col justify-center object-cover"
                      />
                    ) : (
                      <label htmlFor="input-file">
                        <div className="w-full h-full flex items-center flex-col bg-[#E9ECEF] justify-center">
                          <svg width="107" height="85" fill="none" viewBox="0 0 107 85">
                            <path
                              fill="#868E96"
                              d="M105.155 0H1.845A1.844 1.844 0 0 0 0 1.845v81.172c0 1.02.826 1.845 1.845 1.845h103.31A1.844 1.844 0 0 0 107 83.017V1.845C107 .825 106.174 0 105.155 0zm-1.845 81.172H3.69V3.69h99.62v77.482z"></path>
                            <path
                              fill="#868E96"
                              d="M29.517 40.84c5.666 0 10.274-4.608 10.274-10.271 0-5.668-4.608-10.276-10.274-10.276-5.665 0-10.274 4.608-10.274 10.274 0 5.665 4.609 10.274 10.274 10.274zm0-16.857a6.593 6.593 0 0 1 6.584 6.584 6.593 6.593 0 0 1-6.584 6.584 6.591 6.591 0 0 1-6.584-6.582c0-3.629 2.954-6.586 6.584-6.586zM12.914 73.793a1.84 1.84 0 0 0 1.217-.46l30.095-26.495 19.005 19.004a1.843 1.843 0 0 0 2.609 0 1.843 1.843 0 0 0 0-2.609l-8.868-8.868 16.937-18.548 20.775 19.044a1.846 1.846 0 0 0 2.492-2.72L75.038 31.846a1.902 1.902 0 0 0-1.328-.483c-.489.022-.95.238-1.28.6L54.36 51.752l-8.75-8.75a1.847 1.847 0 0 0-2.523-.081l-31.394 27.64a1.845 1.845 0 0 0 1.22 3.231z"></path>
                          </svg>

                          <input
                            id="input-file"
                            type="file"
                            name="file"
                            onChange={handleFileInputChange}
                            style={{ display: 'none' }}
                          />
                          <div className="mt-2 text-sm px-[32px] py-[6px] rounded-3xl bg-[#Fff] text-[#181A20] cursor-pointer hover:text-[#5b646d] font-semibold ">
                            업로드
                          </div>
                        </div>
                      </label>
                    )}
                  </div>
                </div>

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
                        'w-full flex-1 h-[3rem] outline-none border inline-flex justify-start bg-[#fff] font-bold items-center p-0 rounded shadow-sm pl-[1rem]',
                        {
                          'border-[#FCd545] text-[#191919] bg-[#FCd545] border':
                            isPrivate == false,
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
                        'w-full outline-none flex-1 h-[3rem] border inline-flex justify-start font-bold ml-[1rem]  bg-[#fff] items-center p-0 rounded shadow-sm pl-[1rem]',
                        {
                          'border-[#FCd545] text-[#191919] border bg-[#FCd545]':
                            isPrivate == true,
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
                    fileInputState={fileInputState}
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
