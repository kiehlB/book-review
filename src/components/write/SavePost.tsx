import React, { useEffect, useRef, useState } from 'react';
import useSavedPosts from './hooks/useGetSavePosts';
import SavedPostItem from './SavePostItem';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse } from 'react-collapse';
import { MdChevronLeft, MdExpandMore } from 'react-icons/md';
import useCreateSavePost from './hooks/usecreateSavePost';

export type TapProps = { value: string };

function SavePost({ value }: TapProps) {
  const dispatch = useDispatch();

  const { posts, loading, onConfirmRemove } = useCreateSavePost();
  const [isCollapse, setIsCollapse] = useState(true);

  const isFilterData = value ? posts.filter(e => e?.title?.includes(value)) : posts;

  return (
    <div className="">
      <div
        className="text-[#64748b] text-base font-bold flex items-center justify-between px-4"
        onClick={() => setIsCollapse(!isCollapse)}>
        <div> 임시 저장 글 ({isFilterData?.length})</div>
        <div>{isCollapse ? <MdExpandMore size={20} /> : <MdChevronLeft size={20} />}</div>
      </div>
      <Collapse isOpened={isCollapse}>
        <div className="text-[#64748b] text-base font-bold px-4 mt-3">
          {isFilterData?.map(post => (
            <SavedPostItem post={post} key={post.id} onConfirmRemove={onConfirmRemove} />
          ))}
        </div>
      </Collapse>
    </div>
  );
}

export default SavePost;
