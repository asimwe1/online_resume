import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Download = ({ icon }) => {
  const router = useRouter();

  return (
    <Link
      href='/asimwelandry.pdf'
      target='_blank'
      className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'
    >
      <span className='text-Snow'>Download Resume</span>
      <span>{icon}</span>
    </Link>
  );
};

export default Download;
