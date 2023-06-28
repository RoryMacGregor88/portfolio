import { Button } from '~/components';

interface Props {
  href: string;
  label: string;
}

const ExternalLink = ({ href, label }: Props) => (
  <a href={href} target='_blank' className='w-full'>
    <Button label={label} className='text-sm lg:text-lg' />
  </a>
);

export default ExternalLink;
