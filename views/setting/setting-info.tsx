'use client';

import { useMutation } from '@apollo/client';
import React, { useCallback, useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { UPLOAD_IMAGE_TO_CLOUDINARY } from '../../lib/graphql/posts';
import useGetUser from './hooks/use-get-user';
import useProfile from './hooks/use-profile';
import { useAuthStore } from '@/store/auth';
import ProfileThumbnail from './profile-thumbnail';

export type SettingCardProps = {};

function SettingCard({}: SettingCardProps) {
  const { getUser } = useGetUser();
  const { handleSubmit } = useProfile();
  const [readyForFile, setreadyForFile] = useState('');
  const [previewSource, setPreviewSource] = useState(0);
  const [fileInputState, setFileInputState] = useState();

  const [url, setUrl] = useState('');

  const { auth, profileThumbnail, displayName, bio: Bio } = useAuthStore();

  const [name, setName] = useState(displayName ? displayName : '');

  const [bio, setBio] = useState(Bio ? Bio : '');

  const [uploadThumbnail] = useMutation(UPLOAD_IMAGE_TO_CLOUDINARY);

  useEffect(() => {
    setreadyForFile(profileThumbnail);
    setPreviewSource(2);
  }, []);

  const addImage = useCallback(async (url: any) => {
    await uploadThumbnail({
      variables: {
        body: url,
        width: 128,
        height: 128,
      },
      update: (_proxy, { data: newData }) => {
        setUrl(newData.uploadImage.url);
        setreadyForFile(newData.uploadImage.url);
        setPreviewSource(2);
      },
    });
    if (url) {
      setFileInputState(url);
    }
  }, []);

  return (
    <div className="rounded py-[2rem]">
      <div className="mmd:grid-cols-0 grid grid-cols-10 mxs:block">
        <div className="col-span-2 text-[#21259] dark:text-[#ececec]">프로필 사진</div>
        <div className="col-span-8 cursor-pointer">
          <ProfileThumbnail
            addImage={addImage}
            readyForFile={readyForFile}
            setPreviewSource={setPreviewSource}
            uploadThumbnail={uploadThumbnail}
            previewSource={previewSource}
            setreadyForFile={setreadyForFile}
            thumbnail={profileThumbnail}
          />
        </div>
      </div>
      <div className="mt-[24px] grid grid-cols-10 mxs:block">
        <div className="col-span-2 text-[#21259] dark:text-[#ececec]">로그인 계정</div>
        <div className="col-span-8 dark:text-[#ececec]">{getUser?.whoami?.username}</div>
      </div>
      <div className="mt-[24px] grid grid-cols-10 mxs:block">
        <div className="col-span-2 text-[#21259] dark:text-[#ececec]">닉네임</div>
        <StyledTextarea
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="닉네임을 작성 해보세요"
          className="col-span-6 border-2 border-[#f1f3f5] bg-[#0000000d] dark:border-none dark:bg-[#2b2d31] dark:text-[#ececec] mxs:w-[100%]"
        />
      </div>
      <div className="mt-[24px] grid grid-cols-10 mxs:block">
        <div className="col-span-2 text-[#21259] dark:text-[#ececec]">한 줄 소개</div>
        <StyledTextarea
          value={bio}
          onChange={e => setBio(e.target.value)}
          placeholder="한 줄 소개를 작성 해보세요"
          className="col-span-6 border border-[#f1f3f5] bg-[#0000000d] dark:border-none dark:bg-[#2b2d31] dark:text-[#ececec] mxs:w-[100%]"
        />
      </div>
      <div className="mt-[24px] grid grid-cols-10 mxs:block mxs:w-[100%]">
        <div className="col-span-8 flex justify-end">
          <div
            onClick={() => handleSubmit(bio, name, readyForFile ? readyForFile : url)}
            className="cursor-pointer rounded-3xl bg-[#fcd535] px-[20px] py-[12px] text-sm font-semibold text-[#181A20] hover:text-[#495057]">
            저장
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingCard;

const StyledTextarea = styled(TextareaAutosize)`
  resize: none;
  padding: 1rem;
  padding-bottom: 1.5rem;
  outline: none;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  line-height: 1.75;
`;
