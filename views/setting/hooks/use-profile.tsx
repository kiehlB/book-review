import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Create_Post, Edit_Post } from '../../../lib/graphql/posts';
import { toast } from 'react-toastify';
import { checkEmpty } from '../../../lib/utils';
import { createProfileMutation } from '@/lib/graphql/profile';
import { useAuthStore } from '@/store/auth';

export default function useProfile() {
  const { setAuthImg, setAuthName, setAuthBio } = useAuthStore();

  const [profile] = useMutation(createProfileMutation, {
    onCompleted(profileData) {
      setAuthImg(profileData?.createProfile?.thumbnail);
      setAuthName(profileData?.createProfile?.profile_name);
      setAuthBio(profileData?.createProfile?.bio || '');
    },
  });

  const client = useApolloClient();

  const handleSubmit = async (bio: any, profile_name: any, thumbnail: any) => {
    try {
      await profile({
        variables: {
          bio,
          profile_name,
          thumbnail,
        },
      });

      toast.success('저장 성공!', {
        position: 'bottom-right',
      });
      await client.resetStore();
    } catch (e) {
      toast.error('저장 실패', {
        position: 'bottom-right',
      });
    }
  };

  return {
    handleSubmit,
  };
}
