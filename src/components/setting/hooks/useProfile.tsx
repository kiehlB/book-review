import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post, Edit_Post } from '../../../lib/graphql/posts';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { checkEmpty } from '../../../lib/utils';
import { createProfileMutation } from '../../../lib/graphql/profile';
import { getAuthImgSuccess, getAuthNameSuccess } from '../../../store/auth';

export default function useProfile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [profile] = useMutation(createProfileMutation, {
    onCompleted(profile) {
      dispatch(getAuthImgSuccess(profile?.createProfile?.thumbnail));
      dispatch(getAuthNameSuccess(profile?.createProfile?.profile_name));
    },
  });

  const client = useApolloClient();

  const handleSubmit = async (bio, profile_name, thumbnail) => {
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
