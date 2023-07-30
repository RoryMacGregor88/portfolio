import allIcons from '~/icons';

const getSelectedIcons = (technologies: string[]) =>
  allIcons.filter(({ name }) => technologies.includes(name));

interface Props {
  technologies?: string[];
  showAll?: boolean;
}

const TechIconList = ({ technologies = [], showAll = false }: Props) => {
  const selectedIcons = showAll ? allIcons : getSelectedIcons(technologies);
  return (
    <ul className='flex flex-row flex-wrap justify-center gap-4 max-w-xl'>
      {selectedIcons.map(({ name, Icon }) => (
        <li key={name} className='w-16 h-16'>
          <Icon />
          {/* <p className='text-lg font-bold'>{selectedTech}</p> */}
        </li>
      ))}
    </ul>
  );
};

export default TechIconList;
