import React from 'react';

interface ButtonProps {
  onClick: () => void;
  value: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, value }) => (
  <button onClick={onClick}>{value}</button>
);

export default Button;