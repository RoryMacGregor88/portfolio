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
  <div className='h-screen flex flex-col justify-evenly'>
    {BUTTON_METADATA.map(({ label, href }) => (
      <NextLink key={label} href={href}>
        <Button label={label} className='-rotate-90 text-2xl p-0' />
      </NextLink>
    ))}
  </div>
);

export default Sidebar;
