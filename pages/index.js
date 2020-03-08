import Head from 'next/head';
import ShowcaseCard from '../components/ShowcaseCard';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const TypewriteNameIntroNoSSR = dynamic(
  () => import('../components/TypewriteNameIntro'),
  {
    ssr: false,
  }
);

const featuredProjects = [
  {
    title: 'the2019ncov.com',
    description:
      'A web app that shows near-real-time data and timeline of the coronavirus (COVID-19).',
    url: 'https://the2019ncov.com',
    githubUrl: 'https://github.com/sorxrob/2019-ncov-frontend',
    techonologies: ['Node', 'Vue', 'ApexCharts'],
  },
  {
    title: 'CoderStats',
    description:
      'An awesome look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories and top repos.',
    url: 'https://coderstats.netlify.com',
    githubUrl: 'https://github.com/sorxrob/coderstats',
    techonologies: ['Svelte', 'Github API', 'Chart.js'],
  },
  {
    title: 'SpotifyStats',
    description:
      "A web app for visualizing your Spotify's top artists, top tracks, recently played tracks, and details information about each track. Includes playlist creator and charts.",
    url: 'http://spotify-stats.now.sh',
    githubUrl: 'https://github.com/sorxrob/spotify-stats',
    techonologies: ['React', 'Spotify API', 'Chart.js'],
  },
  {
    title: 'CryptoStats',
    description:
      'A web app for visualizing top crypto assets by market capitalization.',
    url: 'https://cryptostats.now.sh/',
    githubUrl: 'https://github.com/sorxrob/cryptostats',
    techonologies: ['React', 'CoinGecko API', 'Chart.js'],
  },
];

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Robert Soriano | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Robert Soriano | Software Developer"
        />
        <meta
          property="og:site_name"
          content="Robert Soriano | Software Developer"
        />
        <meta property="og:image" content="https://i.imgur.com/2pxoSOM.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Robert Soriano is a software developer based in Manila, PH specializing in building websites and applications."
        />
      </Head>

      <div className="w-full px-4 md:px-6 text-xl leading-normal">
        <h1 className="text-app-lightestSlate font-bold font-sans break-normal mb-2 mt-4 text-3xl md:text-4xl">
          <TypewriteNameIntroNoSSR />
        </h1>

        <p className="py-6 text-app-slate">
          I'm a software developer based in Manila, PH specializing in building
          websites and applications.
        </p>

        <p className="py-6 text-app-slate">
          My current toolset includes Vue, React, Redux, Node and other various
          frameworks, libraries and technologies related to them.
        </p>

        <p className="py-6 text-app-slate">
          Have a project you'd like to discuss? <br />
          Let's chat{' '}
          <span className="text-app-green">
            <a
              href="mailto:sorianorobertc@gmail.com?Subject=Hello"
              target="_top"
            >
              sorianorobertc@gmail.com
            </a>
          </span>
        </p>
      </div>
      <hr className="border-b-2 mb-4 mx-4" style={{ borderColor: '#2D3952' }} />
      <div className="container px-4">
        <h2 className="text-app-lightestSlate font-bold break-normal text-2xl md:text-3xl mb-4">
          Some Things I've Built
        </h2>
        <div className="flex flex-wrap -mx-2">
          {featuredProjects.map((data, idx) => (
            <div
              className="w-full flex items-stretch lg:w-1/2 px-2 mb-4"
              key={idx}
            >
              <ShowcaseCard data={data} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/projects">
            <button className="w-full sm:w-full md:w-auto bg-transparent text-app-lightestSlate text-app-green font-semibold py-2 px-4 border border-app-green rounded">
              Go to Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
