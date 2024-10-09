type SideBarBox = {
  title?: string;
  children?: React.ReactNode;
};

export default function SideBarBox({ title, children }: SideBarBox) {
  return (
    <div className='flex flex-col rounded-2xl p-6 bg-backgroundbox font-medium text-sm'>
      {title ? <h3 className='mb-4'>{title}</h3> : ''}
      {children}
    </div>
  );
}
