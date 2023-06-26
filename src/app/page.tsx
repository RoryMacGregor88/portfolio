import { Sidebar, ProjectDisplay } from '~/components';

const Home = () => (
  <main className='flex justify-between'>
    <Sidebar />
    <ProjectDisplay />
  </main>
);

export default Home;
