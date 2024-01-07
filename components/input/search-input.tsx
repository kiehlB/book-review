import { useCombobox } from 'downshift';
import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import cx from 'clsx';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/navigation';

interface Tag {
  id: string;
  name: string;
  posts_count: number;
}

interface SearchInputProps {
  GetTags: Tag[];
}

const FullscreenOverlay = ({ isVisible }: { isVisible: boolean }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: isVisible ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
      zIndex: 10,
      transition: 'background-color 0.5s ease',
      pointerEvents: 'none',
    }}
  />
);

function getTagsFilter(inputValue: string) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return function tagFilter(tag: { name: string; posts_count: number }) {
    return !inputValue || tag.name.toLowerCase().includes(lowerCasedInputValue);
  };
}

function SearchInput({ GetTags }: SearchInputProps) {
  const [items, setItems] = React.useState(GetTags);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [overlayElement, setOverlayElement] = useState<React.ReactElement | null>(null);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const inputRef = React.useRef(null) as any;
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    selectedItem,
    getItemProps,
    reset,
    inputValue,
  } = useCombobox({
    items,
    onInputValueChange: ({ inputValue }) => {
      setItems(GetTags.filter(getTagsFilter(inputValue || '')));
      setMenuIsOpen(true);
    },
    isOpen: menuIsOpen,
    itemToString: item => (item ? item.name : ''),

    onStateChange: ({ type, inputValue }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputBlur:
          setMenuIsOpen(false);
          break;
        case useCombobox.stateChangeTypes.InputChange:
          if (!inputValue) {
            setMenuIsOpen(false);
          }
          break;
      }
    },
  });

  const router = useRouter();

  const handleSubmit = (searchQuery: string) => {
    const trimmedValue = searchQuery.trim();

    if (trimmedValue !== '') {
      router.push(`/search/${trimmedValue}`);
      setIsInputFocused(false);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsInputFocused(false);
      setMenuIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setOverlayElement(<FullscreenOverlay isVisible={isInputFocused} />);
  }, [isInputFocused]);

  const handleFocus = () => {
    reset();
    setIsInputFocused(true);
    setMenuIsOpen(true);
  };

  const isInputMatching = () => {
    const lowerCasedInputValue = inputValue.toLowerCase();

    return items.some(item => item.name.toLowerCase().includes(lowerCasedInputValue));
  };
  const handleItemClick = (item: { name: string }) => {
    handleSubmit(item.name);
  };
  return (
    <form className="relative z-20 col-span-6 mxl:col-span-5 mmd:hidden" ref={inputRef}>
      <div className="relative col-span-6 mxl:col-span-5">
        <div className="absolute left-[16px] top-[50%] translate-y-[-50%] text-gray-500">
          <IoSearchOutline />
        </div>
        <input
          {...getInputProps({
            onKeyDown: event => {
              switch (event.key) {
                case 'Enter': {
                  event.preventDefault();
                  handleSubmit(event.currentTarget.value);
                }
              }
            },
            onFocus: handleFocus,
          })}
          placeholder="포스트를 검색해 보세요"
          className={cx(
            isOpen && isInputMatching()
              ? 'rounded-b-none rounded-tl-2xl rounded-tr-2xl'
              : 'rounded-l-2xl rounded-r-2xl',
            'input-area h-[42px] w-full bg-[#F5F7FA] px-[2.5rem] py-[0.5rem] text-sm focus:outline-none',
          )}
        />
        {overlayElement && ReactDOM.createPortal(overlayElement, document.body)}
        <ul
          {...getMenuProps()}
          className={`absolute z-20 mt-[-6px] max-h-60 w-full overflow-y-auto bg-[#F5F7FA] p-0 shadow-md scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-400 scrollbar-w-1 ${
            !(isOpen && items.length) && 'hidden'
          }`}>
          {isOpen &&
            items.map((item: any, index: number) => (
              <li
                className={cx(
                  highlightedIndex === index && 'bg-blue-300',
                  selectedItem === item && 'font-bold',
                  'flex flex-col px-3 py-2 shadow-sm',
                )}
                key={item.id}
                {...getItemProps({ item, index, onClick: () => handleItemClick(item) })}>
                <span className="cursor-pointer">{item.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </form>
  );
}

export default SearchInput;
