import React, { useEffect } from 'react';

interface ButtonProps {
  onClick: (value: string) => void;
  value: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, value }) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === value || (event.key === 'Enter' && value === '=') || (event.key === 'Backspace' && value === 'C')) {
        onClick(value);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClick, value]);

  return (
    <button onClick={() => onClick(value)}>{value}</button>
  );
};

export default Button;
