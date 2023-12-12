'use client';

import React, { useEffect, useCallback, useRef, useState } from 'react';

import { LogoutMutation, useLogoutMutation } from '../../../types/apolloComponent';

export default function useLogout() {
  const [logout, { client }] = useLogoutMutation();

  const handleSubmitLogout = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      await logout();

      await client.clearStore().then(() => {
        client.resetStore();
        localStorage.removeItem('authState');
        location.reload();
      });
    },
    [logout, client],
  );

  return {
    handleSubmitLogout,
  };
}
