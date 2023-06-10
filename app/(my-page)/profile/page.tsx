'use client';

import PostCard from '@/components/post-grid/post-card';
import React from 'react';
import useGetPosts from '@/components/post-grid/hooks/useGetPosts';
import useGetTrendingPosts from '@/components/post-grid/hooks/useGetTrending';
import { PostGrid } from '@/components/layout/grid-layout';
import { Second } from '@/components/layout/app-layout';
import SettingCard from '@/components/setting/Setting-info-card';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  return <SettingCard />;
}
