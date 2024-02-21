'use client';
import { useState } from 'react';
import Image from 'next/image';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Auth = () => {
  const [value, setValue] = useState('register');

  if (value == 'register') {
    return (
      <>
        <section className='relative pt-20 pb-10 overflow-hidden'>
          <div className='absolute ellipse z-10'></div>
          <div className='flex px-5 relative z-20'>
            <h2 className='font-bold self-end text-white text-[34px] mb-10'>
              Register
            </h2>
            <Image
              className='mx-auto max-w-none w-[129px] relative top-10'
              src='./woman.svg'
              width={130}
              height={130}
              priority={true}
              alt=''
            />
          </div>
        </section>
        <section className='px-5'>
          <RegisterForm />
        </section>
        <section className='px-5'>
          <p className='text-primary text-[12px] mt-5 mb-10 text-center'>
            Don&apos;t have an account?{' '}
            <span
              className='font-bold cursor-pointer'
              onClick={() => setValue('login')}
            >
              Login
            </span>
          </p>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className='relative pt-20 pb-10 overflow-hidden'>
          <div className='absolute ellipse z-10'></div>
          <div className='flex gap-6 px-5 relative z-20'>
            <h2 className='font-bold self-end text-white text-[34px] text-center mb-10'>
              Login
            </h2>
            <Image
              className='mx-auto max-w-none w-[148px] relative top-10'
              width={130}
              height={130}
              src='./man.svg'
              priority={true}
              alt=''
            />
          </div>
        </section>
        <section className='px-5'>
          <LoginForm />
        </section>
        <section className='px-5'>
          <p className='text-primary text-[12px] mt-5 mb-10 text-center'>
            Have an account?{' '}
            <span
              className='font-bold cursor-pointer'
              onClick={() => setValue('register')}
            >
              Register
            </span>
          </p>
        </section>
      </>
    );
  }
};

export default Auth;
