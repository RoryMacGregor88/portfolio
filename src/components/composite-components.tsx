import clsx from 'clsx';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  isEven?: boolean;
  children: ReactNode;
}
/** container comprising black text and yellow image sections */
export const SectionWrapper = ({
  isEven = false,
  children,
}: SectionWrapperProps) => (
  <li
    className={`flex flex-col ${
      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
    } justify-between align-middle pl-0 pt-12 lg:pl-32 lg:pt-0`}
  >
    {children}
  </li>
);

/** black panel with text and buttons */
export const ContentArea = ({ children }: { children: ReactNode }) => (
  <div className='bg-black lg:w-1/2 min-h-screen flex flex-col justify-evenly gap-4 text-center p-4 lg:p-8'>
    {children}
  </div>
);

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => (
  <h2 className={clsx('text-xl lg:text-2xl font-bold', className)}>
    {children}
  </h2>
);

/** paragraphs in between title and buttons */
export const DescriptionSection = ({ children }: { children: ReactNode }) => (
  <div className='text-lg lg:text-xl flex flex-col text-center lg:text-left gap-4'>
    {children}
  </div>
);

export const ButtonSection = ({ children }: { children: ReactNode }) => (
  <div className='flex gap-4 lg:gap-8 justify-between'>{children}</div>
);

/** yellow panel with images */
export const DisplayArea = ({ children }: { children: ReactNode }) => (
  <div className='bg-yellow min-h-screen lg:w-1/2 flex flex-col justify-center'>
    {children}
  </div>
);
