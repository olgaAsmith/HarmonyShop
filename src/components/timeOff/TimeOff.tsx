import { Button } from '../ui/button';
import LineBetweenBlock from '../LineBetweenBlock';
import TableTimeOff from './TableTimeOff';
import ListTimeOff from './ListTimeOff';
import UpcomingTimeOff from './UpcomingTimeOff';
import SelectGroupTimeOff from './SelectGroupTimeOff';

export default function TimeOff() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full  justify-end lg:justify-between items-end'>
        <h2 className='text-2xl text-[#204973] flex items-center hidden lg:block'>
          Time Off
        </h2>
        <div className='flex gap-2 lg:gap-8 items-end flex-col lg:flex-row'>
          <h3 className='text-sm font-medium'>
            Accrual Level Start Date
            <span className='text-[#3758ab] ml-1'>03/09-2020</span>
          </h3>
          <Button variant='default' className='px-2'>
            Add Time Off Policy
          </Button>
        </div>
      </div>
      <LineBetweenBlock short={true}></LineBetweenBlock>
      <ListTimeOff></ListTimeOff>
      <UpcomingTimeOff></UpcomingTimeOff>
      <SelectGroupTimeOff></SelectGroupTimeOff>
      <TableTimeOff></TableTimeOff>
    </div>
  );
}
