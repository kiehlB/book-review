'use client';

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useCallback, useRef, useState } from 'react';
import { getAuthInfoSuccess, initAuth } from '../../../store/auth';
import { LogoutMutation, useLogoutMutation } from '../../../types/apolloComponent';

export default function useLogout() {
  const dispatch = useDispatch();

  const [logout, { client }] = useLogoutMutation();

  const handleSubmitLogout = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      await logout();

      await client.clearStore().then(() => {
        client.resetStore();
        // persistor.purge();

        dispatch(getAuthInfoSuccess(null));
      });
    },
    [logout, client, dispatch],
  );

  return {
    handleSubmitLogout,
  };
}
