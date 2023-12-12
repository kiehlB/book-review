import HomeTitle from '@/views/home/home-title';
import SettingCard from '@/views/setting/setting-info';
import React from 'react';

export default function MainPage() {
  return (
    <>
      <HomeTitle title="내 정보 설정" />
      <SettingCard />;
    </>
  );
}
