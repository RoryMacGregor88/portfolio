import { ReactNode } from 'react';

import './globals.css';
import { Open_Sans } from 'next/font/google';

import { Sidebar } from '~/components';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Rory MacGregor | Full-Stack Software Developer',
  description:
    'A portfolio for the full-stack software developer Rory MacGregor.',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body className={openSans.className}>
      <Sidebar />
      {children}
    </body>
  </html>
);

export default RootLayout;
