import React, { useEffect } from 'react';

interface ButtonProps {
  onClick: (value: string) => void;
  value: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, value }) => {
  //função para receber também informações do teclado
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === value) {
        onClick(value);
      }
    };

    // Adicione um ouvinte de eventos de teclado quando o componente for montado
    document.addEventListener('keydown', handleKeyPress);

    // Remova o ouvinte de eventos de teclado quando o componente for desmontado
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClick, value]);

  return (
    <button onClick={() => onClick(value)}>{value}</button>
  );
};

export default Button;
