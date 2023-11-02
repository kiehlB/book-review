import HomeTitle from '@/components/home/home-title';
import SettingCard from '@/components/setting/setting-info';

import React from 'react';

export default function MainPage() {
  return (
    <>
      <HomeTitle title="내 정보 설정" />
      <SettingCard />;
    </>
  );
}
