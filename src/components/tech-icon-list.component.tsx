import allIcons from '~/icons';

const DEFAULT_TITLE = 'Primary technologies:';

const getSelectedIcons = (technologies: string[]) =>
  allIcons.filter(({ name }) => technologies.includes(name));

interface Props {
  primaryTechnologies?: string[];
  secondaryTechnologies?: string[];
  title?: string;
  showAll?: boolean;
}

const TechIconList = ({
  primaryTechnologies = [],
  secondaryTechnologies = [],
  title = DEFAULT_TITLE,
  showAll = false,
}: Props) => {
  const selectedIcons = showAll
    ? allIcons
    : getSelectedIcons(primaryTechnologies);
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <h3 className='text-white text-lg lg:text-xl text-center'>{title}</h3>
        <ul className='flex flex-row flex-wrap justify-center gap-4'>
          {selectedIcons.map(({ name, Icon }) => (
            <li key={name} className='w-16 h-auto'>
              <Icon />
              <p className='text-white text-xs font-bold mt-1'>{name}</p>
            </li>
          ))}
        </ul>

        {!!secondaryTechnologies.length ? (
          <div className='mb-2'>
            <h3 className='text-white text-lg lg:text-xl text-center'>
              Secondary technologies:
            </h3>
            <p>{secondaryTechnologies.join(', ')}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TechIconList;
