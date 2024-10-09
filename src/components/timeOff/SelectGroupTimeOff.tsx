import { Clock5Icon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export default function SelectGroupTimeOff() {
  return (
    <div>
      <h3 className='text-sm font-medium text-[#204973] flex items-center mt-6'>
        <Clock5Icon className='w-4 h-4 inline-block mr-2'></Clock5Icon>
        History
      </h3>
      <div className='flex mt-4 gap-4 flex-wrap'>
        <Select>
          <SelectTrigger className='w-full sm:w-[256px]'>
            <SelectValue placeholder='Sick' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Sick</SelectItem>
            <SelectItem value='2'>Sick</SelectItem>
            <SelectItem value='3'>Sick</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-[96px]'>
            <SelectValue placeholder='All' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>All</SelectItem>
            <SelectItem value='2'>All</SelectItem>
            <SelectItem value='3'>All</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-[176px] md:ml-auto'>
            <SelectValue placeholder='Balance History' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Balance History</SelectItem>
            <SelectItem value='2'>Balance History</SelectItem>
            <SelectItem value='3'>Balance History</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
