import { create } from 'zustand';
import { PROFILE } from '@/lib/api/api';
import { client } from '../../../../apollo-client';

interface Profile {
  id: string;
  name: string;
  avatar: string;
}

interface AuthState {
  isAuthenticated: boolean;
  profile: Profile | null;
  setAuthenticated: (status: boolean) => void;
  setProfile: (profile: Profile | null) => void;
  loadProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  profile: null,
  setAuthenticated: (status) => set({ isAuthenticated: status }),
  setProfile: (profile) => set({ profile }),

  loadProfile: async () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const { data } = await client.query({
          query: PROFILE,
          context: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        });

        if (data.myProfile) {
          set({ profile: data.myProfile, isAuthenticated: true });
        }
      } catch (error) {
        console.error('Ошибка при загрузке профиля:', error);
        set({ isAuthenticated: false, profile: null });
      }
    } else {
      set({ isAuthenticated: false, profile: null });
    }
  },
}));
