import { useMutation } from '@apollo/client';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { UPLOAD_IMAGE_TO_CLOUDINARY } from '../../lib/graphql/posts';
import { RootState } from '../../store/rootReducer';
import useGetUser from './hooks/useGetUser';
import useProfile from './hooks/useProfile';
import ProfileThumbnail from './ProfileThumbnail';

export type SettingCardProps = {};

function SettingCard({}: SettingCardProps) {
  const { getUser, loading } = useGetUser();
  const { handleSubmit } = useProfile();
  const [readyForFile, setreadyForFile] = useState('');
  const [previewSource, setPreviewSource] = useState(0);
  const [fileInputState, setFileInputState] = useState();
  const [isPrivate, setIsPrivate] = useState(false);
  const [url, setUrl] = useState('');
  const {
    auth,
    profileThumbnail,
    displayName,
    bio: Bio,
  } = useSelector((state: RootState) => state.auth);

  const [name, setName] = useState(displayName ? displayName : '');

  const [bio, setBio] = useState(Bio ? Bio : '');

  const [uploadThumbnail] = useMutation(UPLOAD_IMAGE_TO_CLOUDINARY);

  useEffect(() => {
    setreadyForFile(profileThumbnail);
    setPreviewSource(2);
  }, [loading]);

  const addImage = useCallback(async url => {
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

  if (loading) return;

  return (
    <div className="rounded py-[2rem]">
      <div className="flex">
        <div className="w-[260px] text-[#21259]">프로필 사진</div>
        <div className="cursor-pointer">
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
      <div className="flex mt-[24px] py-4">
        <div className="w-[260px] text-[#21259]">로그인 계정</div>
        <div>{getUser?.whoami?.username}</div>
      </div>
      <div className="flex mt-[24px]">
        <div className="w-[260px] text-[#21259]">닉네임</div>
        <StyledTextarea
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="닉네임을 작성 해보세요"
          className="w-[50%] border border-[#f1f3f5] dark:border-none bg-[#0000000d] dark:bg-[#2b2d31] dark:text-[#ececec]"
        />
      </div>

      <div className="flex mt-[24px]">
        <div className="w-[260px] text-[#21259]">한 줄 소개</div>

        <StyledTextarea
          value={bio}
          onChange={e => setBio(e.target.value)}
          placeholder="한 줄 소개를 작성 해보세요"
          className="border border-[#f1f3f5] dark:border-none bg-[#0000000d] dark:bg-[#2b2d31] dark:text-[#ececec] w-[50%]"
        />
      </div>
      <div className="w-[calc(50%+260px)] flex justify-end">
        <div
          onClick={() => handleSubmit(bio, name, readyForFile ? readyForFile : url)}
          className="text-sm text-[#181A20] font-semibold cursor-pointer hover:text-[#495057]  bg-[#fcd535] px-[20px]  py-[12px] rounded-3xl">
          저장
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
