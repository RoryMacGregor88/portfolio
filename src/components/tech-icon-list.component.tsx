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
  const selectedIcons = showAll ? allIcons : getSelectedIcons(technologies),
    isIntro = title !== DEFAULT_TITLE;
  return (
    <div className='flex justify-center'>
      <div
        className={`flex flex-col items-center p-4 rounded-md bg-${
          isIntro ? 'black' : ''
        }`}
      >
        <h3 className='text-white text-lg lg:text-xl text-center mb-4'>
          {title}
        </h3>
        <ul className='flex flex-row flex-wrap justify-center gap-4 max-w-xl'>
          {selectedIcons.map(({ name, Icon }) => (
            <li key={name} className='w-16 h-16'>
              <Icon />
              {/* <p className='text-white text-lg font-bold'>{name}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechIconList;
