import NextLink from 'next/link';
import { Button } from '~/components';

const BUTTON_METADATA = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Sidebar = () => (
  <div className='bg-yellow lg:fixed lg:h-screen lg:w-12 h-12 w-screen flex flex-row lg:flex-col justify-evenly'>
    {BUTTON_METADATA.map(({ label, href }) => (
      <NextLink key={label} href={href}>
        <Button label={label} className='lg:-rotate-90 text-2xl p-0' />
      </NextLink>
    ))}
  </div>
);

export default Sidebar;
