import ContactUs from '@/components/contactUs/ContactUs';
import AboutUs from '@/components/home/AboutUs';
import HomeProductsList from '@/components/home/HomeProductsList';
import HomeUsersList from '@/components/home/HomeUsersList';

export default function HomePage() {
  return (
    <div className='flex flex-col gap-8 min-h-screen bg-lightblue'>
      <AboutUs></AboutUs>
      <HomeProductsList></HomeProductsList>
      <HomeUsersList></HomeUsersList>
      <ContactUs></ContactUs>
    </div>
  );
}
