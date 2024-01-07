'use client';

import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { MdLogout } from 'react-icons/md';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import useLogout from '@/views/auth/hooks/use-logout';

const ProfileButton = ({ profileThumbnail }: { profileThumbnail: string | undefined }) => (
  <img
    className="h-[42px] w-[42px] rounded-full object-cover"
    src={
      profileThumbnail ||
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASbSURBVHgB7Z0tTytBFIYP914BDiQ4cIADB0EhwYFE8ifq7g/hJ2CRSCQ4kOCobF3ruHk3maS5aSnbdnfPOe/7JE0oCTvTnmc+dvbMsNbr9b5M0PLLBDUSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAOX+MhPX1dTs+Prbt7W3b3d21jY2N6ndgPB7bYDCw4XBor6+v9vHxUb1nIL0Ae3t7dn5+XgV9FhABYuC1v79f/Q4SPD8/28vLi2UmrQA/Cfx34O/wwjXu7u7S9gi/z87O/loyELTr62vb2tqyZcFQcXp6Wv2MXiEb6SaBCDwEWDVFqmykEgABOjo6sqbAtbNJkEaAi4uLRoNfQBmXl5eWhRQCIChlnG6Dk5OTVstrkvACYKLXxJg/D5RZ1hEiE14ABGIVs/26IPgZeoHQAiDwbYz7s4AA0XuB0AIsusizKsrycmRCC+Dhyz84OLDIhBUAra/rHgCgDpGHgbAC7OzsmBc81aUuYQXY3Nw0L3iqS13CCtDFrd8sPNWlLsoIIkcCkBNWAE8JGpGTRcIKgPw9L3iqS13CCvD5+Wle8FSXuoQVAJm8HlK0UAfUJSqhJ4Fvb2/WNcgcjkxoAfDld936oieKhhYAwX96erKuwJ6B6Oni4dcBIEAXvQAC//j4aNEJLwCC30UgUGaGzSIpVgLRC7Q5FKCsLFvG0iwFPzw8tBIUlIGyspDqWcD9/X2jEuDaKCMT6R4GIUBNzAlwzWzBByl3ByNYaK23t7dLP6vHfT6u9/7+bhlZ6/V6X5YYpI0jebRu/mD2wBfSHxCBngAv9ASQ4PDwsErhwvvJE0JGo1EV9H6/72KFsS1SCDAZyFngnh2vVUwSUV4WQUILULZnlR06aMGYqDW1QDN56khZho6+Ghh2DoBgXF1dTZ3koZWvcqWubECdtg0NZUQ+QiakAGjxOA9gHhABj4wXeWyMHgX5/j85Zwi9AXoeD4+n6xJOAASk7nbwkjyCGT0meXg/mcWDYOMsIJwShtaO3mWRHT/odaINCaHmAIsEHyCQOP6tHAHXFKVukSQIsxK4aPDbBnWMdG5ACAHwhUYIfgHzEwwjEXAvQFdHwCzLzc1NiC1jrgXA2I31/Ijbr1HnCEfKuRagq/N/VgXuJLzPB9wKgMBnOITJu8RuBUDXnwHvQ4FLAbDkGrnr/x8MBV7vClwKEHHWPw+vn8mdANlaf8FrL+BOgIytv+Dxs7kSAC0kY+sveOwFXAnQ5bGvbdH0A6m6uBLAw8GPTePtaFk3AmTv/gtYF/A0DLgRgKH1Fzx9VjcCIBuHBU89nRsBkKrFgqfNJm5SwpBGVc7fz/CvWKZRUsk9bS1PvzVMfI+OiiVHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIOcfGjV2tEfztqEAAAAASUVORK5CYII='
    }
  />
);

interface MenuItemLinkProps {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const MenuItemLink = ({ href, icon: Icon, label, onClick }: MenuItemLinkProps) => (
  <Menu.Item>
    {({ active }) =>
      href ? (
        <Link href={href}>
          <button
            className={`${
              active ? 'bg-[#FCD535] text-gray-900' : 'text-gray-900 dark:text-darkText'
            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
            <Icon
              className={`mr-2 h-5 w-5 ${
                active ? '' : 'text-default dark:text-darkText'
              }`}
              aria-hidden="true"
            />
            {label}
          </button>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`${
            active ? 'bg-[#FCD535] text-gray-900' : 'text-gray-900 dark:text-darkText'
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
          <Icon
            className={`mr-2 h-5 w-5 ${active ? '' : 'text-default dark:text-darkText'}`}
            aria-hidden="true"
          />
          {label}
        </button>
      )
    }
  </Menu.Item>
);

interface MenuItemButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const MenuItemButton = ({ onClick, icon: Icon, label }: MenuItemButtonProps) => (
  <Menu.Item>
    {({ active }) => (
      <button
        onClick={onClick}
        className={`${
          active ? 'bg-[#FCD535] text-gray-900' : 'text-gray-900 dark:text-darkText'
        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
        <Icon
          className={`mr-2 h-5 w-5 ${active ? '' : 'text-default dark:text-darkText'}`}
          aria-hidden="true"
        />
        {label}
      </button>
    )}
  </Menu.Item>
);

type BaseMenuItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

type MenuItem = BaseMenuItem & {
  href: string;
};

type MenuItemSecondary = BaseMenuItem & {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type MenuItemsGroup = (MenuItem | MenuItemSecondary)[];

type MenuItemsSecondary = MenuItemSecondary[];

interface ReusableMenuItemLinksProps {
  menuItems: MenuItemsGroup[];
}

const ReusableMenuItemLinks: React.FC<ReusableMenuItemLinksProps> = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((group, index) => (
        <div className="px-1 py-1" key={index}>
          {group.map(item => (
            <MenuItemLink
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              onClick={'onClick' in item ? item.onClick : undefined}
            />
          ))}
        </div>
      ))}
    </>
  );
};

interface PopMenuProps {
  profileThumbnail: string;
  primaryItems: MenuItemsGroup[];
  secondaryItems: MenuItemsSecondary[];
}
export default function PopMenu({
  profileThumbnail,
  primaryItems,
  secondaryItems,
}: PopMenuProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { handleSubmitLogout } = useLogout();

  return (
    <div className="z-10 flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div
          className="flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <Menu.Button className="flex items-center">
            <ProfileButton profileThumbnail={profileThumbnail} />
            <MdOutlineArrowDropDown
              className={`ml-1 mr-1 h-5 w-5 ${
                isHovered ? 'text-gray-600' : 'text-gray-400'
              }`}
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md  bg-white shadow-lg ring-1 ring-[#000000] ring-opacity-5 focus:outline-none dark:divide-dark-300 dark:bg-dark-400 dark:ring-dark-300">
            <div className="mxs:hidden">
              <ReusableMenuItemLinks menuItems={primaryItems} />
            </div>

            <div className="block sm:hidden">
              <ReusableMenuItemLinks menuItems={secondaryItems} />
            </div>

            <div className="px-1 py-1">
              <MenuItemButton
                onClick={handleSubmitLogout}
                icon={MdLogout}
                label="로그아웃"
              />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
