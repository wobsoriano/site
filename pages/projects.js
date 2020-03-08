import Head from 'next/head';
import axios from 'axios';
import useSWR from 'swr';
import ProjectCard from '../components/ProjectCard';
import { RotateSpinner } from 'react-spinners-kit';

const fetcher = async path => {
  const response = await axios(path);
  return response.data;
};

const about = () => {
  const { data, error } = useSWR('/api/repositories', fetcher);

  if (error) return <div className="text-app-slate">An error occurred</div>;

  if (!data)
    return (
      <div
        className="flex justify-center items-center"
        style={{ height: '60vh' }}
      >
        <RotateSpinner size={60} color="#64ffda" loading={data} />
      </div>
    );

  const sortByStars = data.sort(
    (a, b) =>
      parseFloat(b.stargazers.totalCount) - parseFloat(a.stargazers.totalCount)
  );
  const isWindowContext = typeof window !== 'undefined';

  const moreButton = (
    <button
      onClick={() => (location.href = 'http://github.com/sorxrob')}
      className="w-full sm:w-full md:w-auto bg-transparent text-app-lightestSlate text-app-green font-semibold py-2 px-4 border border-app-green rounded"
    >
      More on GitHub
    </button>
  );

  return (
    <>
      <Head>
        <title>Robert Soriano | Projects</title>
      </Head>
      <div className="container">
        <div className="w-full px-4 md:px-6 text-xl leading-normal">
          <h1 className="text-app-lightestSlate font-bold font-sans break-normal mb-6 mt-2 text-3xl md:text-4xl">
            Open Source Projects
          </h1>

          <div className="flex flex-wrap -mx-2">
            {sortByStars.map((item, idx) => (
              <div
                className="w-full flex items-stretch lg:w-1/2 px-2 mb-4"
                key={idx}
              >
                <ProjectCard data={item} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            {isWindowContext && moreButton}
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
