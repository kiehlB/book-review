import Link from 'next/link';
import React, { useState } from 'react';
import PostIcon from '../../svg/post';

export interface SavedPostItemProps {
  post: any;
  onRemove?: (id: string) => void;
}

function SavedPostItem({ post, onRemove }: SavedPostItemProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const editUrl = `/write?id=${post.id}`;

  return (
    <div
      className="flex justify-between hover:bg-[#e2e8f0] py-[6px] px-2"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <div className="flex">
        <PostIcon className="w-6" />
        <h3 className="ml-1">
          <Link href={editUrl} className="text-[#64748b] text-sm">
            {post.title}
          </Link>
        </h3>
      </div>
      {isHovering && (
        <section>
          <button className="text-[#64748b] text-sm" onClick={() => onRemove(post.id)}>
            삭제
          </button>
        </section>
      )}
    </div>
  );
}

export default SavedPostItem;
