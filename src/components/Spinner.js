import React from 'react';
import { Spin } from 'antd';

const Spinner = () => {
  return (
    <div className="container" style={spinnerContainerStyle}>
      <Spin size="large" />
    </div>
  );
};

const spinnerContainerStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default Spinner;
