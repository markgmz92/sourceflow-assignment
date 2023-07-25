import React from 'react';
import Button from './Button';

const MarkDown = () => {
  return (
    <div className='container'>
      <div className='my-lg-5'>
        <h6 className='my-2 fw-bold'>Lorem ipsum dolor</h6>
        <h1 className='my-2 fw-bold '>Lorem ipsum dolor.</h1>

        <p className='my-4 w-70'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing edit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibu
          et magnis dis parturient montes, nascetur ridiculus mus. Donec pede
          justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
          justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nulla dictum
          felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
          elementum semper nisi. Ae
        </p>

        <Button />
      </div>
    </div>
  );
};

export default MarkDown;
