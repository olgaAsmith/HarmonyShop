import LineBetweenBlock from '../LineBetweenBlock';
import { Ambulance, Clock5Icon, PiggyBank } from 'lucide-react';

export default function UpcomingTimeOff() {
  return (
    <div>
      <h3 className='text-sm font-medium text-[#204973] flex items-center mt-4'>
        <Clock5Icon className='w-4 h-4 inline-block mr-2'></Clock5Icon>
        Upcoming Time Off
      </h3>
      <LineBetweenBlock short={true}></LineBetweenBlock>
      <ul>
        <li>
          <div className='mt-6 flex gap-2 items-center'>
            <Ambulance className='w-8 h-8'></Ambulance>
            <div className='font-medium flex flex-col gap-2'>
              <span>Jan 27</span>
              <span>
                <span className='mr-2'>&#8226;</span>1 dey of Sick
              </span>
            </div>
          </div>
          <LineBetweenBlock short={true}></LineBetweenBlock>
        </li>
        <li>
          <div className='mt-6 flex gap-2 items-center'>
            <PiggyBank className='w-8 h-8'></PiggyBank>
            <div className='font-medium flex flex-col gap-2'>
              <span>Jul 4</span>
              <span>Independence Day</span>
            </div>
          </div>
          <LineBetweenBlock short={true}></LineBetweenBlock>
        </li>
      </ul>
    </div>
  );
}
