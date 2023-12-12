import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState, forwardRef, ReactNode } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

interface WriteMenuProps {
  children: ReactNode;
}

export default function WriteMenu({ children }: WriteMenuProps) {
  return (
    <div className="mr-1 flex cursor-pointer items-center rounded-3xl bg-[#FCD535] text-sm text-[#181A20] hover:text-[#545b6d] md:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center">
          <Menu.Button className="flex items-center px-[20px] py-[10px]">
            <div className="font-Roboto w-10 max-w-full">Menu</div>
            <IoMdArrowDropdown
              className="ml-1 mr-1 h-5 w-5 text-[#212529]"
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
          {children}
        </Transition>
      </Menu>
    </div>
  );
}
