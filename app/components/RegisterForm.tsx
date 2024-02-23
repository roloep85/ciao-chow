'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [token, setToken] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch(
      'https://ciaochow.plusnarrative.biz/api/auth/local/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setToken(data.jwt);
  };
  const router = useRouter();

  if (token != '') {
    router.push(`/chows?jwt=${token}`);
  }
  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
      <div>
        <label className='font-medium text-sm'>username</label>
        <input
          name='username'
          type='text'
          className='bg-gray-100 w-full p-2 rounded-[10px] min-h-12'
          placeholder='muncher'
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className='font-medium text-sm'>email</label>
        <input
          name='email'
          type='email'
          className='bg-gray-100 w-full p-2 rounded-[10px] min-h-12'
          placeholder='youremail@mail.com'
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className='font-medium text-sm'>password</label>
        <input
          name='password'
          type='password'
          className='bg-gray-100 w-full p-2 rounded-[10px] min-h-12'
          placeholder='your password'
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button
        type='submit'
        className='bg-primary text-white font-semibold text-lg w-full rounded-[10px] mt-2 p-3'
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
