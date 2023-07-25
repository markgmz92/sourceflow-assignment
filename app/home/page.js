import React from 'react';
import Image from 'next/image';
import Placeholder from '../asset/Placeholder.png';
import MarkDown from '../component/MarkDown';

const HomePage = () => {
  return (
    <section className='container mt-5 auto'>
      <div className='d-flex flex-column flex-md-row'>
        <Image
          className='img-fluid mt-10'
          src={Placeholder}
          alt='Dummy Image'
        />
        <MarkDown />
      </div>
    </section>
  );
};

export default HomePage;
