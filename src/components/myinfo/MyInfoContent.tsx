type MyInfoContent = {
  children?: React.ReactNode;
};

export default function MyInfoContent({ children }: MyInfoContent) {
  return (
    <section className='flex bg-backgroundbox ml-auto p-4 pt-9 pb-24 w-8/12 xl:w-9/12 2xl:w-full grow'>
      {children}
    </section>
  );
}
