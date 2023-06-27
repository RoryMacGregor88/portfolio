import { Sidebar, ProjectDisplay } from '~/components';

const Home = () => (
  <main className='flex justify-between flex-col lg:flex-row'>
    <Sidebar />
    <ProjectDisplay />
  </main>
);

export default Home;
