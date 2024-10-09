import { create } from 'zustand';
import { client } from '../../../../apollo-client';
import { USERS } from '../api';

interface Users {
  id: number;
  name: string;
  email: string;
}

interface usersState {
  users: Users[] | null;
  setUsers: (users: Users[] | null) => void;
  loadUsers: () => Promise<void>;
}

export const useUsersStore = create<usersState>((set) => ({
  users: null,
  setUsers: (users) => set({ users }),

  loadUsers: async () => {
    try {
      const { data } = await client.query({
        query: USERS,
      });

      if (data.users) {
        set({ users: data.users });
      }
    } catch (error) {
      console.error('Ошибка при загрузке юзеров:', error);
    }
  },
}));
