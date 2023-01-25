import React, { useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import RatioImage from '../components/common/RatioImage';
import { PageLayout } from '../components/layout/PageLayout';
import AppLayout from '../components/layout/AppLayout';
import Modal from '../components/common/Modal';
import SignUp from '../components/auth/Register';
import { NextSeo } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';
import AuthContainer from '../components/auth/AuthContainer';
import PostCard from '../components/post/PostCard';
import useGetPosts from '../components/post/hooks/useGetPosts';
import BookTalble from '../components/booksTable.tsx';

export default function Home() {
  return (
    <>
      <BookTalble />
    </>
  );
}
