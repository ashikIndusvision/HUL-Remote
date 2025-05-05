import React from 'react';
import { themeStyles } from '../config';
import { Button } from 'antd';

const ButtonComponent = ({ handleClick, title, style }) => {
  const defaultStyle = {
    background: themeStyles?.buttonBg,
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',

  };

  return (
    <Button style={{ ...defaultStyle, ...style }} onClick={handleClick}>
      {title}
    </Button>
  );
};
export default ButtonComponent