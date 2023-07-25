import React from 'react';
import Image from 'next/image';
import Placeholder from '../asset/Placeholder.png';

const HomePage = () => {
  return (
    <div className='container mt-4'>
      <Image className='mt-4' src={Placeholder} alt='Dummy Image' />
    </div>
  );
};

export default HomePage;
