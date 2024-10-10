'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import UserImage from '@/public/images/user.jpg';
import { useUsersStore } from '@/lib/api/store/usersStore';
import { LoadingUsers } from '../loading/home/LoadingUsers';
import { useModalCallStore } from '@/lib/api/store/modalStore';

export default function HomeUsersList() {
  const { users, loadUsers } = useUsersStore();
  const { setIsOpen } = useModalCallStore();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const shuffledUsers = users
    ? [...users].sort(() => 0.5 - Math.random()).slice(0, 6)
    : [];

    const handleOpenUser = (id: string) => {
      setIsOpen(true, 'user', id);
    };

  return (
    <div className='w-3/4 mx-auto my-16'>
      <h2 className='text-2xl font-bold my-12 text-center'>
        The most friendly and sociable community
      </h2>

      {users ? (
        <div className='grid md:grid-cols-6 gap-6'>
          {shuffledUsers.map((user) => {
            return (
              <div
                key={user.id}
                className='flex flex-col cursor-pointer hover:bg-accent transition rounded-xl p-2'
                onClick={() => handleOpenUser(user.id)}
              >
                <Image
                  width={150}
                  height={150}
                  src={UserImage}
                  alt={user.name}
                  className='object-cover rounded-full mx-auto'
                />
                <div className='p-2'>
                  <span className='text-lg font-semibold block text-center'>
                    {user.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <LoadingUsers />
      )}
    </div>
  );
}
