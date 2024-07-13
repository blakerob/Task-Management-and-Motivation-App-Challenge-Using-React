// U92725213

import React from 'react';
import './FancyText.css';

const FancyText = ({ title, text }) => {
  return (
    <div className={title ? 'titleText' : 'regularText'}>
      {text}
    </div>
  );
};

export default FancyText;
