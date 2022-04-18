import React from 'react';
import { Spin } from 'antd';

const Spinner = () => {
  return (
    <div className="container" style={spinnerStyle}>
      <Spin size="large" />
    </div>
  );
};

const spinnerStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default Spinner;
