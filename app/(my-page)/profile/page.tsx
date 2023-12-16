import HomeTitle from '@/views/home/home-title';
import SettingCard from '@/views/setting/setting-info';
import { cookies } from 'next/headers';
import React from 'react';

export default function MainPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');
  return (
    <>
      <HomeTitle title="내 정보 설정" />
      <SettingCard token={token} />;
    </>
  );
}
