import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import { AiOutlineSave } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import useCreateSavePost from './hooks/use-create-save-post';
import useBookStore from '@/store/book';
import WriteMenu from './write-menu';
import useModalStore from '@/store/modal';

export type TapProps = {
  StoreTag: string[];
  getUser: string | null;
};

function CoreButton({ StoreTag, getUser }: TapProps) {
  const { onConfirmSave, posts } = useCreateSavePost(getUser);
  const { body, postId, title, book, setIsOpen, setPostSave, postSave } = useBookStore(
    state => ({
      body: state.body,
      postId: state.postId,
      title: state.title,
      book: state.book,
      postSave: state.postSave,
      setIsOpen: state.setIsOpen,
      setPostSave: state.setPostSave,
    }),
  );

  const { publishClose, setPublishClose } = useModalStore();

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = async () => {
    onConfirmSave(postId, title, body, StoreTag, book);
  };

  const handleTouchStart = () => {
    setPostSave(!postSave);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div className="z-[99] mr-3 mt-3 flex mxs:mr-1">
      <div className="" style={{ zIndex: 2 }}>
        <WriteMenu>
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border dark:border-dark-400 dark:bg-dark-500 dark:text-darkText dark:ring-0">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/">
                    <button
                      className={`${
                        active
                          ? 'bg-[#FCD535] text-gray-900 dark:text-dark-500'
                          : 'text-gray-900 dark:text-darkText'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      {active ? (
                        <IoMdArrowBack className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <IoMdArrowBack className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      뒤로가기
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onMouseOver={() => handleTouchStart()}
                    onMouseOut={() => handleTouchEnd()}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onClick={handleClick}>
                    <button
                      className={`${
                        active
                          ? 'bg-[#FCD535] text-gray-900 dark:text-dark-500'
                          : 'text-gray-900 dark:text-darkText'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      {active ? (
                        <AiOutlineSave className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <AiOutlineSave className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      포스트 저장
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div onClick={() => setPublishClose(!publishClose)}>
                    <button
                      className={`${
                        active
                          ? 'bg-[#FCD535] text-gray-900 dark:text-dark-500'
                          : 'text-gray-900 dark:text-darkText'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      {active ? (
                        <MdDone className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <MdDone className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      완료
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </WriteMenu>
      </div>

      <div className="flex mmd:hidden">
        <div
          onMouseOver={() => handleTouchStart()}
          onMouseOut={() => handleTouchEnd()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
          className="mr-4 cursor-pointer rounded-3xl bg-[#FCD535] px-[20px] py-[10px] font-[Fredoka] text-sm font-medium tracking-wider text-[#181A20] hover:text-[#545b6d] mxx:mr-1">
          saved
        </div>
        <div
          onClick={() => setPublishClose(!publishClose)}
          className="mr-1 cursor-pointer rounded-3xl bg-[#FCD535] px-[20px] py-[10px] font-[Fredoka] text-sm tracking-wider text-[#181A20] hover:text-[#545b6d]">
          publish
        </div>
      </div>
    </div>
  );
}

export default React.memo(CoreButton);
