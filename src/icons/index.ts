import { ReactNode } from 'react';

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
import GitIcon from './git-icon.svg';
import GitHubIcon from './github-icon.svg';
import JiraIcon from './jira-icon.svg';
import FigmaIcon from './figma-icon.svg';
import LinuxIcon from './linux-icon.svg';
import MongoDbIcon from './mongo-db-icon.svg';
import psqlIcon from './psql-icon.svg';
import ReactQueryIcon from './react-query-icon.svg';
import StorybookIcon from './storybook-icon.svg';

type IconsList = { name: string; Icon: () => ReactNode }[];

const allIcons: IconsList = [
  { name: 'React', Icon: ReactIcon },
  { name: 'TypeScript', Icon: TypescriptIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'Next.js', Icon: NextIcon },
  { name: 'Redux', Icon: ReduxIcon },
  // { name: 'React Query', Icon: ReactQueryIcon },
  { name: 'MongoDB', Icon: MongoDbIcon },
  { name: 'PostgreSQL', Icon: psqlIcon },
  { name: 'Victory', Icon: VictoryIcon },
  { name: 'Material UI', Icon: MaterialUiIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
  { name: 'MSW', Icon: MswIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'GitHub', Icon: GitHubIcon },
  { name: 'Jira', Icon: JiraIcon },
  { name: 'Stripe', Icon: StripeIcon },
  { name: 'Figma', Icon: FigmaIcon },
  { name: 'Linux', Icon: LinuxIcon },
  { name: 'React Testing Library', Icon: ReactTestingLibraryIcon },
  { name: 'Storybook', Icon: StorybookIcon },
];

export default allIcons;
