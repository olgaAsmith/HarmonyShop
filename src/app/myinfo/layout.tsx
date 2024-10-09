import MyInfoHeader from '@/components/myinfo/MyInfoHeader';
import SideBarMyInfo from '@/components/myinfo/SideBar';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col'>
      <ProtectedRoute>
        <MyInfoHeader></MyInfoHeader>
        <div className='flex gap-8 md:px-2 md:px-6 xl:px-20 xxl:gap-16'>
          <SideBarMyInfo></SideBarMyInfo>
          {children}
        </div>
      </ProtectedRoute>
    </div>
  );
}
