import { SyntheticEvent } from 'react';

import clsx from 'clsx';

interface Props {
  label: string;
  type?: 'submit' | undefined;
  onClick?: (event: SyntheticEvent) => void;
  disableHover?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  label,
  type,
  onClick,
  disableHover = false,
  disabled,
  className = '',
}: Props) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      `border-solid rounded-md bg-blue p-2 text-black text-sm lg:text-lg w-full font-bold ${
        !disableHover && !disabled
          ? 'hover:bg-white transform active:scale-x-75 transition-transform'
          : ''
      } ${disabled ? 'cursor-not-allowed' : ''}`,
      className
    )}
  >
    {label}
  </button>
);

export default Button;
