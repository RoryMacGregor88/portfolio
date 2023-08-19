import NextLink from 'next/link';
import { Button } from '~/components';

const CV_LABEL = 'CV',
  BUTTON_METADATA = [
    {
      label: 'Projects',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: CV_LABEL,
      href: '/Rory_MacGregor_CV.pdf',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

const Sidebar = () => (
  <div className='bg-blue fixed h-12 lg:h-screen w-screen lg:w-32 flex flex-row lg:flex-col justify-evenly z-50'>
    {BUTTON_METADATA.map(({ label, href }) => {
      const isPDF = label === CV_LABEL,
        linkProps = isPDF
          ? { target: '_blank', rel: 'noreferrer noopener' }
          : {};
      return (
        <NextLink
          key={label}
          href={href}
          {...linkProps}
          style={{ alignSelf: 'center' }}
        >
          <Button
            label={label}
            className='lg:-rotate-90 text-2xl p-0'
            disableHover
          />
        </NextLink>
      );
    })}
  </div>
);

export default Sidebar;
