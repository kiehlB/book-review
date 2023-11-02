import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function WriteMenu({ children }: any) {
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center">
          <Menu.Button className="flex items-center">
            <div className="max-w-full w-10 font-Roboto">Menu</div>
            <ChevronDownIcon
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
