import clsx from 'clsx';

interface Props {
  label: string;
  className?: string;
}

const Button = ({ label, className = '' }: Props) => (
  <button
    className={clsx(
      'border-solid rounded-md bg-yellow p-5 text-black w-full font-bold',
      className
    )}
  >
    {label}
  </button>
);

export default Button;
