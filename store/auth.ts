'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Profile {
  id: string;
  bio: string;
  profile_name: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
}

interface User {
  id: string;
  username: string;
  accessToken: string;
  refreshToken: string;
  profile: Profile | null;
  __typename: 'User';
}

export interface AuthState {
  auth: User;
  error: string;
  profileThumbnail: string;
  displayName: string;
  bio: string;
  setAuthInfo: (auth: User) => void;
  setAuthImg: (thumbnail: string) => void;
  setAuthName: (name: string) => void;
  setAuthBio: (bio: string) => void;
  setAuthFailure: (error: string) => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    set => ({
      auth: {
        id: '',
        username: '',
        accessToken: '',
        refreshToken: '',
        profile: {
          id: '',
          bio: '',
          profile_name: '',
          thumbnail: '',
          created_at: '',
          updated_at: '',
        },
        __typename: 'User',
      },
      error: '',
      profileThumbnail: '',
      displayName: '',
      bio: '',
      setAuthInfo: auth => set({ auth }),
      setAuthImg: thumbnail => set({ profileThumbnail: thumbnail }),
      setAuthName: name => set({ displayName: name }),
      setAuthBio: bio => set({ bio }),
      setAuthFailure: error => set({ error }),
    }),
    {
      name: 'authState',

      storage: createJSONStorage(() => localStorage),
    },
  ),
);
