import {
  SectionWrapper,
  ContentArea,
  Title,
  DescriptionSection,
  ButtonSection,
  ExternalLink,
  DisplayArea,
} from '~/components';

import { PROJECT_DATA } from '~/project-data';

interface Props {
  params: { slug: string };
}

export default function Project({ params: { slug } }: Props) {
  console.log('slug: ', slug);

  return <div>Hello</div>;
}
