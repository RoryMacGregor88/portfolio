import ReactIcon from './react-icon.svg';
import TypescriptIcon from './typescript-icon.svg';
import VictoryIcon from './victory-icon.svg';
import MaterialUiIcon from './material-ui-icon.svg';
import MswIcon from './msw-icon.svg';
import ReactTestingLibraryIcon from './react-testing-library-icon.svg';
import ReduxIcon from './redux-icon.svg';
import NodeIcon from './node-icon.svg';
import NextIcon from './next-icon.svg';
import TailwindIcon from './tailwind-icon.svg';
import StripeIcon from './stripe-icon.svg';
import ReactHookFormIcon from './react-hook-form-icon.svg';
import { ReactNode } from 'react';

type IconsList = { name: string; Icon: () => ReactNode }[];

const allIcons: IconsList = [
  { name: 'React', Icon: ReactIcon },
  { name: 'TypeScript', Icon: TypescriptIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'Next.js', Icon: NextIcon },
  { name: 'Redux', Icon: ReduxIcon },
  { name: 'Victory', Icon: VictoryIcon },
  { name: 'Material UI', Icon: MaterialUiIcon },
  { name: 'MSW', Icon: MswIcon },
  { name: 'React Testing Library', Icon: ReactTestingLibraryIcon },
  // { name: 'React Hook Form', Icon: ReactHookFormIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
  { name: 'Stripe', Icon: StripeIcon },
];

export default allIcons;
