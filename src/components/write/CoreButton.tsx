import { bindActionCreators, createDraftSafeSelector } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsOpenSuccess,
  getPostBody,
  getPostSaveSuccess,
  getPostTitle,
} from '../../store/book';
import { RootState } from '../../store/rootReducer';
import useCreateSavePost from './hooks/usecreateSavePost';
import WriteMenu from './WriteMenu';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import { AiOutlineSave } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

export type TapProps = {
  StoreTag: string[];
};

function CoreButton({ StoreTag }: TapProps) {
  const { onConfirmSave, posts, loading } = useCreateSavePost();
  const body = useSelector((state: RootState) => state.book.body);
  const postId = useSelector((state: RootState) => state.book.postId);
  const title = useSelector((state: RootState) => state.book.title);
  const book = useSelector((state: RootState) => state.book.book);
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  const handleClick = async () => {
    onConfirmSave(postId, title, body, StoreTag, book);
  };

  const handleTouchStart = () => {
    dispatch(getPostSaveSuccess());

    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex mt-3 mr-3 mxs:mr-1">
      <div
        className="md:hidden text-sm px-[20px] py-[10px] mxs:px-[10px]  rounded-3xl bg-[#FCD535] text-[#181A20] hover:text-[#545b6d] cursor-pointer mr-1"
        style={{ zIndex: 2 }}>
        <WriteMenu>
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/">
                    <button
                      className={`${
                        active ? 'bg-[#FCD535] text-gray-900' : 'text-gray-900'
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
                        active ? 'bg-[#FCD535] text-gray-900' : 'text-gray-900'
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
                  <div onClick={() => dispatch(getIsOpenSuccess())}>
                    <button
                      className={`${
                        active ? 'bg-[#FCD535] text-gray-900' : 'text-gray-900'
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

      <div className="mmd:hidden flex">
        <div
          onMouseOver={() => handleTouchStart()}
          onMouseOut={() => handleTouchEnd()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
          className="font-Roboto text-sm px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] hover:text-[#545b6d] mr-4 cursor-pointer ssm:mr-1 tracking-wider">
          saved
        </div>
        <div
          onClick={() => dispatch(getIsOpenSuccess())}
          className="font-Roboto text-sm px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] hover:text-[#545b6d] cursor-pointer mr-1 tracking-wider">
          publish
        </div>
      </div>
    </div>
  );
}

export default React.memo(CoreButton);
