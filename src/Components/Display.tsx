import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => (
  <div className="display">
    <span className="display-text">{value}</span>
  </div>
);

export default Display;