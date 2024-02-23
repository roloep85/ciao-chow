import Link from 'next/link';
import Image from 'next/image';
import { Montserrat_Alternates } from 'next/font/google';

const montserrat_alternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: '600',
});

export default function Home() {
  return (
    <main className='bg-primary'>
      <section className='relative py-16 overflow-hidden'>
        <div className='absolute ellipse -z-10'></div>
        <h1
          className={`${montserrat_alternates.className} text-white text-center mb-16`}
        >
          CiaoChow{' '}
          <Image
            className='inline -mt-2'
            src='carrot.svg'
            width={40}
            height={40}
            alt='Carrot'
          />
        </h1>
        <div className='flex px-10'>
          <Image
            className='mx-auto max-w-none'
            width={130}
            height={130}
            src='woman.svg'
            alt=''
          />
          <Image
            className='mx-auto max-w-none'
            width={130}
            height={130}
            src='man.svg'
            alt=''
          />
        </div>
      </section>
      <section className='px-5'>
        <p className='text-white text-center px-14'>
          Hungry? <strong className='font-bold'>CiaoChow</strong> helps you find
          something to eat.
        </p>
        <Link
          href={'/auth'}
          className='bg-white text-primary text-center block font-semibold text-lg w-full rounded-[10px] mt-12 p-3'
        >
          Get Started
        </Link>
      </section>
      <div className='flex gap-1 justify-center py-12'>
        <div className='bg-neutral-300 rounded-full w-2 h-2'></div>
        <div className='bg-neutral-300 rounded-full w-2 h-2'></div>
        <div className='bg-white rounded-full w-2 h-2'></div>
      </div>
    </main>
  );
}
