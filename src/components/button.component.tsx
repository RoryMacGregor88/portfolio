import clsx from 'clsx';

interface Props {
  label: string;
  type?: 'submit' | undefined;
  className?: string;
}

const Button = ({ label, type, className = '' }: Props) => (
  <button
    type={type}
    className={clsx(
      'border-solid rounded-md bg-yellow p-2 text-black w-full font-bold',
      className
    )}
  >
    {label}
  </button>
);

export default Button;
