import React, { useEffect, useRef, useState } from 'react';
import SavedPostItem from './save-post-item';
import { useSpring, animated } from '@react-spring/web';
import useCreateSavePost from './hooks/use-create-save-post';
export type TapProps = { value: string };

function SavePost({ value }: TapProps) {
  const { posts, loading, onConfirmRemove } = useCreateSavePost();
  const [isCollapse, setIsCollapse] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activePopover, setActivePopover] = useState(null);

  const handleOpenPopover = (postId: React.SetStateAction<null>) => {
    setActivePopover(postId);
  };

  const handleClosePopover = () => {
    setActivePopover(null);
  };

  const onToggle = () => setIsOpen(s => !s);

  const isFilterData = value
    ? posts?.filter((e: { title: string | string[] }) => e?.title?.includes(value))
    : posts;

  const springProps = useSpring({
    from: { maxHeight: '0px', opacity: 0, transform: 'translateY(-20px)' },
    to: isOpen
      ? { maxHeight: '1000px', opacity: 1, transform: 'translateY(0px)' }
      : { maxHeight: '0px', opacity: 0, transform: 'translateY(-20px)' },
    config: { mass: 1, tension: 280, friction: 26 },
  });

  return (
    <div>
      <div
        className="flex items-center justify-between px-4 text-base font-bold text-[#64748b]"
        onClick={() => setIsCollapse(!isCollapse)}>
        <div onClick={onToggle} className="dark:text-[#D3D3D3]">
          임시 저장 글 ({isFilterData?.length})
        </div>
        <div onClick={onToggle}>
          <svg
            className={`h-6 w-6 fill-current text-gray-400 transition-transform duration-300 ${
              isOpen ? ' ' : 'rotate-90'
            }`}
            viewBox="0 0 24 24">
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          </svg>
        </div>
      </div>

      <animated.section style={springProps}>
        {isOpen && (
          <div className="mt-3 px-4 text-base font-bold text-[#64748b]">
            {isFilterData?.map((post: any) => (
              <SavedPostItem
                post={post}
                key={post.id}
                onConfirmRemove={onConfirmRemove}
                isOpen={activePopover === post.id}
                onOpen={() => handleOpenPopover(post.id)}
                onClose={handleClosePopover}
              />
            ))}
          </div>
        )}
      </animated.section>
    </div>
  );
}

export default SavePost;
