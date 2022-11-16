import type { FC } from 'react';
import React from 'react';

enum ButtonType {
  Active = 1,
  Disable = 0,
}

interface ButtonProps {
  text: string;
  onClick?: () => void | Promise<void>;
  buttonType?: ButtonType;
}

const ButtonTheme = {
  [ButtonType.Active]:
    'my-2 w-[6rem] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded',
  [ButtonType.Disable]:
    'mt-2 w-auto text-white bg-blue-200 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 disabled',
};

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  buttonType = ButtonType.Active,
}) => {
  return (
    <button
      className={`flex flex-row container mx-auto text-center ${ButtonTheme[buttonType]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button, ButtonType };
export type { ButtonProps };
