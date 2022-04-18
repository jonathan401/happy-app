import React from 'react';
import error from './error.jpg';

const Error = () => {
  return (
    <div className="container">
      <img
        src={error}
        aria-hidden="true"
        alt=""
        style={{ maxWidth: '300px' }}
      />
      <p>Please try connecting to the internet</p>
    </div>
  );
};

export default Error;
