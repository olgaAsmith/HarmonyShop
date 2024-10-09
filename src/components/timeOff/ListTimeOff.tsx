import { Ambulance } from 'lucide-react';

export default function ListTimeOff() {
  return (
    <div>
      <ul className='flex gap-12 justify-start 2xl:justify-center py-6 overflow-x-auto w-full max-w-[100%]'>
        <li className='flex items-center flex-col font-bold'>
          <div className='flex flex-col gap-1 w-[264px] h-[138px] py-4 items-center bg-[#f0f3f8] rounded-lg'>
            <h3 className='text-xl'>Sick</h3>
            <span className='text-3xl text-[#1c3144] flex items-center'>
              <Ambulance className='w-8 h-8 inline-block mr-3.5'></Ambulance>3
            </span>
            <span className='text-sm'>Days Available</span>
            <span className='text-sm text-[#7c96b1]'>1 dey scheduled</span>
          </div>
          <span className='mt-2 text-sm text-[#7c96b1]'>Sick Full-Time</span>
        </li>
        <li className='flex items-center flex-col font-bold'>
          <div className='flex flex-col gap-1 w-[264px] h-[138px] py-4 items-center bg-[#f0f3f8] rounded-lg'>
            <h3 className='text-xl'>Annual Leave</h3>
            <span className='text-3xl text-[#1c3144] flex items-center'>
              <Ambulance className='w-8 h-8 inline-block mr-3.5'></Ambulance>
              10.3
            </span>
            <span className='text-sm'>Annual Leave </span>
            <span className='text-sm text-[#7c96b1]'></span>
          </div>
          <span className='mt-2 text-sm text-[#7c96b1]'>Holiday Full-Time</span>
        </li>
        <li className='flex items-center flex-col font-bold'>
          <div className='flex flex-col gap-1 w-[264px] h-[138px] py-4 items-center bg-[#f0f3f8] rounded-lg'>
            <h3 className='text-xl'>Comp/in Lieu Time</h3>
            <span className='text-3xl text-[#1c3144] flex items-center'>
              <Ambulance className='w-8 h-8 inline-block mr-3.5'></Ambulance>3
            </span>
            <span className='text-sm'>Human Used(YTD)</span>
            <span className='text-sm text-[#7c96b1]'></span>
          </div>
          <span className='mt-2 text-sm text-[#7c96b1]'>
            Comp/in Lieu Time Flexible Policy
          </span>
        </li>
      </ul>
    </div>
  );
}
