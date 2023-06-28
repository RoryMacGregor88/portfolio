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
    } justify-between align-middle lg:pl-12`}
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

export const Title = ({ children }: { children: ReactNode }) => (
  <h2 className='text-4xl lg:text-4xl font-bold'>{children}</h2>
);

/** paragraphs in between title and buttons */
export const DescriptionSection = ({ children }: { children: ReactNode }) => (
  <div className='text-lg lg:text-2xl flex flex-col gap-2'>{children}</div>
);

export const ButtonSection = ({ children }: { children: ReactNode }) => (
  <div className='flex gap-4 justify-between'>{children}</div>
);

/** yellow panel with images */
export const DisplayArea = ({ children }: { children: ReactNode }) => (
  <div className='bg-yellow min-h-screen lg:w-1/2 flex flex-col justify-center'>
    {children}
  </div>
);
