'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Chows = async () => {
  async function getChows(jwt: string | null) {
    const myHeaders = new Headers({
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    });

    const res = await fetch(
      'https://ciaochow.plusnarrative.biz/api/chows?populate=*',
      {
        method: 'GET',
        headers: myHeaders,
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  }
  const searchParams = useSearchParams();
  const jwt = searchParams.get('jwt');
  const response = await getChows(jwt);
  const firstChow = response.data[0];
  const secondChow = response.data[1];

  function changeChows() {
    console.log(secondChow);
  }

  return (
    <div>
      <section className='relative'>
        <img
          src={
            'https://ciaochow.plusnarrative.biz' +
            firstChow.attributes.Image.data[0].attributes.url
          }
          className='max-w-full'
          alt=''
        />
        <div className='flex gap-1 justify-center mt-10 absolute bottom-10 inset-x-0'>
          <div className='bg-neutral-300 rounded-full w-2 h-2'></div>
          <div className='bg-neutral-300 rounded-full w-2 h-2'></div>
          <div className='bg-white rounded-full w-2 h-2'></div>
        </div>
      </section>
      <section className='bg-white rounded-t-3xl relative -top-5 px-5 py-7'>
        <h2 className='font-semibold mb-5'>
          {firstChow.attributes.Title}
          <img src='./favourite.svg' className='inline float-end' alt='' />
        </h2>
        <div className='pb-20'>
          <div className='grid grid-cols-2 border-b'>
            <div className='p-4 relative text-center'>
              <span className='active'>Description </span>
            </div>
            <div className='p-4 relative text-center'>
              <span className=''>Nutrition facts</span>
            </div>
          </div>
          <div className='pt-10'>
            <p className='text-gray-600 text-sm mb-4'>
              {firstChow.attributes.Description}
            </p>
          </div>
        </div>
      </section>
      <div className='btn-panel bg-white fixed bottom-0 inset-x-0 p-5 rounded-3xl'>
        <button className='bg-primary text-white font-semibold text-lg w-full rounded-[10px] p-3'>
          Nah! Find something else.
        </button>
      </div>
    </div>
  );
};
export default Chows;
