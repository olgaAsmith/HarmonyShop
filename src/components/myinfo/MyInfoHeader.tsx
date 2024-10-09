import MyInfoMenu from './MyInfoMenu';
import MyInfoMainAvatar from './MyInfoMainAvatar';
import MyInfoInfoUser from './MyInfoInfoUser';

export default function MyInfoHeader() {
  return (
    <section className='w-full bg-lightblue '>
      <div className='flex gap-8 2xl:gap-16 items-end pt-6 lg:pt-9 md:px-6 xl:px-20'>
        <MyInfoMainAvatar></MyInfoMainAvatar>
        <div className='flex flex-col w-8/12 xl:w-9/12 2xl:w-full grow'>
          <MyInfoInfoUser></MyInfoInfoUser>
          <MyInfoMenu></MyInfoMenu>
        </div>
      </div>
    </section>
  );
}
