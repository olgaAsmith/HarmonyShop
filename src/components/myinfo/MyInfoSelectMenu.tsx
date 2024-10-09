import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/select';
import { SettingsIcon } from 'lucide-react';

export default function MyInfoSelectMenu() {
  return (
    <div className='flex gap-4 flex-end hidden lg:flex'>
      <Select>
        <SelectTrigger className='w-[162px]'>
          <SelectValue placeholder='Request a Change' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>Request a Change</SelectItem>
          <SelectItem value='2'>Request a Change</SelectItem>
          <SelectItem value='3'>Request a Change</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className='w-[56px]'>
          <SelectValue
            placeholder={<SettingsIcon className='w-4 h-4'></SettingsIcon>}
          />
        </SelectTrigger>
        <SelectContent className='lg:mr-[15px] xl:mr-[68px]'>
          <SelectItem value='11'>
            <SettingsIcon className='w-4 h-4'></SettingsIcon>
          </SelectItem>
          <SelectItem value='22'>
            <SettingsIcon className='w-4 h-4'></SettingsIcon>
          </SelectItem>
          <SelectItem value='33'>
            <SettingsIcon className='w-4 h-4'></SettingsIcon>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
