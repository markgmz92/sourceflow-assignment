import React from 'react';
import Image from 'next/image';
import Placeholder from '../asset/Placeholder.png';
import MarkDown from '../component/MarkDown';

const HomePage = () => {
  return (
    <section className='mt-5'>
      <div className='d-flex flex-column flex-md-row'>
        <div className='container'>
          <Image
            className='img-fluid mx-lg-5 '
            src={Placeholder}
            alt='Dummy Image'
          />
        </div>

        <MarkDown />
      </div>
    </section>
  );
};

export default HomePage;
