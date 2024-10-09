import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export default function TableTimeOff() {
  return (
    <div className='mt-4'>
      <Table className=' border-b-2 border-[#7c96b1] text-nowrap'>
        <TableHeader>
          <TableRow className='bg-lightblue text-sm font-medium'>
            <TableHead className='w-[100px]'>Date</TableHead>
            <TableHead className='w-[260px]'>Description</TableHead>
            <TableHead className='w-[100px]'>Used Days (-)</TableHead>
            <TableHead className='w-[100px]'>Earned Days (+)</TableHead>
            <TableHead className='w-[100px]'>Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className='font-medium border-b-2 border-[#7c96b1]'>
            <TableCell>23/05/2024</TableCell>
            <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell></TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>3.00</TableCell>
          </TableRow>
          <TableRow className='font-medium border-b-2 border-[#7c96b1]'>
            <TableCell>23/05/2024</TableCell>
            <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell>-6</TableCell>
            <TableCell></TableCell>
            <TableCell>3.00</TableCell>
          </TableRow>
          <TableRow className='font-medium border-b-2 border-[#7c96b1]'>
            <TableCell>23/05/2024</TableCell>
            <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell></TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>3.00</TableCell>
          </TableRow>
          <TableRow className='font-medium border-b-2 border-[#7c96b1]'>
            <TableCell>23/05/2024</TableCell>
            <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell></TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>3.00</TableCell>
          </TableRow>
          <TableRow className='font-medium border-b-2 border-[#7c96b1]'>
            <TableCell>23/05/2024</TableCell>
            <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell>-6</TableCell>
            <TableCell></TableCell>
            <TableCell>3.00</TableCell>
          </TableRow>
          <TableRow className='font-medium border-b-2 border-[#7c96b1]'>
            <TableCell>23/05/2024</TableCell>
            <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell></TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>3.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
