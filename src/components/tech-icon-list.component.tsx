import allIcons from '~/icons';

const DEFAULT_TITLE = 'Technologies used: ';

const getSelectedIcons = (technologies: string[]) =>
  allIcons.filter(({ name }) => technologies.includes(name));

interface Props {
  technologies?: string[];
  title?: string;
  showAll?: boolean;
}

const TechIconList = ({
  technologies = [],
  title = DEFAULT_TITLE,
  showAll = false,
}: Props) => {
  const selectedIcons = showAll ? allIcons : getSelectedIcons(technologies);
  return (
    <div className='flex flex-col items-center'>
      <h3
        className={`text-${
          title !== DEFAULT_TITLE ? 'black' : 'white'
        } text-lg lg:text-xl text-center my-4`}
      >
        {title}
      </h3>
      <ul className='flex flex-row flex-wrap justify-center gap-4 max-w-xl'>
        {selectedIcons.map(({ name, Icon }) => (
          <li key={name} className='w-16 h-16'>
            <Icon />
            {/* <p className='text-lg font-bold'>{selectedTech}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechIconList;
