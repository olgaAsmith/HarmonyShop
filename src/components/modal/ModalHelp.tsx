import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';
import React, { useState } from 'react';
import { useModalCallStore } from '@/lib/api/store/modalStore';
import InputMask from 'react-input-mask';
import { X } from 'lucide-react';

interface ModalHelp {
  handleClose: () => void;
}

export default function ModalHelp({ handleClose }: ModalHelp) {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({ userName: '', phoneNumber: '' });
  const { setIsOpen } = useModalCallStore();

  const validateFields = () => {
    const phoneNumberRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    let hasErrors = false;

    const newErrors = { userName: '', phoneNumber: '' };

    if (!userName) {
      newErrors.userName = 'Please enter your name';
      hasErrors = true;
    }

    if (!phoneNumber || !phoneNumberRegex.test(phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  };

  const handSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields()) {
      setIsOpen(false);
    }
  };

  return (
    <form noValidate className='relative'>
      <Card className='w-full max-w-sm h-max bg-lightblue relative'>
        <CardHeader>
          <CardTitle className='text-2xl'>We call you back</CardTitle>
          <CardDescription>
            Just enter your name and phone number
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-8'>
          <div className='grid relative'>
            <Label htmlFor='userName' className='ml-2'>
              Your name
            </Label>
            <Input
              id='userName'
              type='text'
              placeholder='John Smith'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className={
                errors.userName
                  ? 'border-red-500 focus-visible:ring-red-500'
                  : ''
              }
            />
            {errors.userName && (
              <span className='absolute bottom-[-14px] left-[10px] text-red-500 text-[10px]'>
                {errors.userName}
              </span>
            )}
          </div>
          <div className='grid relative'>
            <Label htmlFor='phoneNumber' className='ml-2'>
              Your phone number
            </Label>
            <InputMask
              value={phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhoneNumber(e.target.value)
              }
              mask='+7 (999) 999-99-99'
              id='phoneNumber'
              type='text'
              placeholder='+7 (999) 999-99-99'
              required
            >
              <Input
                className={
                  errors.phoneNumber
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : ''
                }
              />
            </InputMask>
            {errors.phoneNumber && (
              <span className='absolute bottom-[-14px] left-[10px] text-red-500 text-[10px]'>
                {errors.phoneNumber}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className='flex flex-col mt-12'>
          <Button
            className='w-full border border-dark'
            onClick={handSubmit}
            type='submit'
          >
            Send
          </Button>
        </CardFooter>
      </Card>
      <Button
        type='button'
        variant='icon'
        onClick={handleClose}
        className='absolute top-[-50px] right-[-50px] hover:scale-125 transition '
      >
        <X className='w-12 h-12' color='white'></X>
      </Button>
    </form>
  );
}
