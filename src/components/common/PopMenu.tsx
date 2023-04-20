import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import useLogout from '../auth/hooks/useLogout';
import { AiOutlineEdit } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { RiBookOpenLine } from 'react-icons/ri';
import { CiRead } from 'react-icons/ci';
import { MdLogout } from 'react-icons/md';
import Image from 'next/image';

export default function PopMenu({ profileThumbnail }) {
  const { handleSubmitLogout } = useLogout();

  return (
    <div className="z-10 flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className=" flex items-center">
          <Menu.Button className="flex items-center">
            {profileThumbnail ? (
              <Image
                className="w-[42px] h-[42px] rounded-full object-cover"
                src={profileThumbnail}
                width={42}
                height={42}
                alt="profileThumbnail"
              />
            ) : (
              <Image
                width={42}
                height={42}
                alt="withoutprofileThumbnail"
                className="w-[42px] h-[42px] rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASbSURBVHgB7Z0tTytBFIYP914BDiQ4cIADB0EhwYFE8ifq7g/hJ2CRSCQ4kOCobF3ruHk3maS5aSnbdnfPOe/7JE0oCTvTnmc+dvbMsNbr9b5M0PLLBDUSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAOX+MhPX1dTs+Prbt7W3b3d21jY2N6ndgPB7bYDCw4XBor6+v9vHxUb1nIL0Ae3t7dn5+XgV9FhABYuC1v79f/Q4SPD8/28vLi2UmrQA/Cfx34O/wwjXu7u7S9gi/z87O/loyELTr62vb2tqyZcFQcXp6Wv2MXiEb6SaBCDwEWDVFqmykEgABOjo6sqbAtbNJkEaAi4uLRoNfQBmXl5eWhRQCIChlnG6Dk5OTVstrkvACYKLXxJg/D5RZ1hEiE14ABGIVs/26IPgZeoHQAiDwbYz7s4AA0XuB0AIsusizKsrycmRCC+Dhyz84OLDIhBUAra/rHgCgDpGHgbAC7OzsmBc81aUuYQXY3Nw0L3iqS13CCtDFrd8sPNWlLsoIIkcCkBNWAE8JGpGTRcIKgPw9L3iqS13CCvD5+Wle8FSXuoQVAJm8HlK0UAfUJSqhJ4Fvb2/WNcgcjkxoAfDld936oieKhhYAwX96erKuwJ6B6Oni4dcBIEAXvQAC//j4aNEJLwCC30UgUGaGzSIpVgLRC7Q5FKCsLFvG0iwFPzw8tBIUlIGyspDqWcD9/X2jEuDaKCMT6R4GIUBNzAlwzWzBByl3ByNYaK23t7dLP6vHfT6u9/7+bhlZ6/V6X5YYpI0jebRu/mD2wBfSHxCBngAv9ASQ4PDwsErhwvvJE0JGo1EV9H6/72KFsS1SCDAZyFngnh2vVUwSUV4WQUILULZnlR06aMGYqDW1QDN56khZho6+Ghh2DoBgXF1dTZ3koZWvcqWubECdtg0NZUQ+QiakAGjxOA9gHhABj4wXeWyMHgX5/j85Zwi9AXoeD4+n6xJOAASk7nbwkjyCGT0meXg/mcWDYOMsIJwShtaO3mWRHT/odaINCaHmAIsEHyCQOP6tHAHXFKVukSQIsxK4aPDbBnWMdG5ACAHwhUYIfgHzEwwjEXAvQFdHwCzLzc1NiC1jrgXA2I31/Ijbr1HnCEfKuRagq/N/VgXuJLzPB9wKgMBnOITJu8RuBUDXnwHvQ4FLAbDkGrnr/x8MBV7vClwKEHHWPw+vn8mdANlaf8FrL+BOgIytv+Dxs7kSAC0kY+sveOwFXAnQ5bGvbdH0A6m6uBLAw8GPTePtaFk3AmTv/gtYF/A0DLgRgKH1Fzx9VjcCIBuHBU89nRsBkKrFgqfNJm5SwpBGVc7fz/CvWKZRUsk9bS1PvzVMfI+OiiVHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIOcfGjV2tEfztqEAAAAASUVORK5CYII="
              />
            )}

            <ChevronDownIcon
              className="ml-1 -mr-1 h-5 w-5 text-slate-600 hover:text-slate-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/profile">
                    <button
                      className={`${
                        active ? ' bg-[#FCD535] text-gray-900' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      {active ? (
                        <AiOutlineEdit className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <AiOutlineEdit
                          className="mr-2 h-5 w-5 text-[#212529] "
                          aria-hidden="true"
                        />
                      )}
                      내 정보
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/temporaryPost">
                    <button
                      className={`${
                        active ? ' bg-[#FCD535] text-gray-900' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      {active ? (
                        <TfiWrite className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <TfiWrite
                          className="mr-2 h-5 w-5 text-[#212529]"
                          aria-hidden="true"
                        />
                      )}
                      임시 글
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/myPost">
                    <button
                      className={`${
                        active ? ' bg-[#FCD535] text-gray-900' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      {active ? (
                        <RiBookOpenLine className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <RiBookOpenLine
                          className="mr-2 h-5 w-5 text-[#212529]"
                          aria-hidden="true"
                        />
                      )}
                      내가 쓴 글
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/readPost">
                    <button
                      className={`${
                        active ? ' bg-[#FCD535] text-gray-900' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      {active ? (
                        <CiRead className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <CiRead
                          className="mr-2 h-5 w-5 text-[#212529]"
                          aria-hidden="true"
                        />
                      )}
                      내가 읽은 글 목록
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={e => handleSubmitLogout(e)}
                    className={`${
                      active ? ' bg-[#FCD535] text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    {active ? (
                      <MdLogout className="mr-2 h-5 w-5  " aria-hidden="true" />
                    ) : (
                      <MdLogout
                        className="mr-2 h-5 w-5 text-[#212529]"
                        aria-hidden="true"
                      />
                    )}
                    로그아웃
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
