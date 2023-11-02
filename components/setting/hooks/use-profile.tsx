import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Create_Post, Edit_Post } from '../../../lib/graphql/posts';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { checkEmpty } from '../../../lib/utils';
import { createProfileMutation } from '../../../lib/graphql/profile';
import {
  getAuthBioSuccess,
  getAuthImgSuccess,
  getAuthNameSuccess,
} from '../../../store/auth';
import { CreateProfileMutation } from '../../../types/apolloComponent';

export default function useProfile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [profile] = useMutation<CreateProfileMutation>(createProfileMutation, {
    onCompleted(profile: any) {
      dispatch(getAuthImgSuccess(profile?.createProfile?.thumbnail));
      dispatch(getAuthNameSuccess(profile?.createProfile?.profile_name));
      dispatch(
        getAuthBioSuccess(profile?.createProfile?.bio ? profile?.createProfile?.bio : ''),
      );
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
