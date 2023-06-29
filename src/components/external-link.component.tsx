import clsx from 'clsx';
import { Button } from '~/components';

interface Props {
  href: string;
  label: string;
  className?: string;
}

const ExternalLink = ({ href, label, className = '' }: Props) => (
  <a href={href} target='_blank' className={clsx('w-full', className)}>
    <Button label={label} className='text-sm lg:text-lg' />
  </a>
);

export default ExternalLink;
