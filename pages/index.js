import Head from 'next/head';
import Card from '../components/Card';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const TypewriteNameIntroNoSSR = dynamic(() => import('../components/TypewriteNameIntro'), {
  ssr: false
});

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
		title: 'Earthquake Visualization',
		description:
			'A near-real-time map of latest earthquakes recorded by the USGS Earthquake Hazards Program.',
		url: '',
		githubUrl: 'https://github.com/sorxrob/earthquake-visualization',
		techonologies: ['Vue', 'Nuxt', 'USGS Earthquake API'],
	},
];

const Home = () => {
  return (<div className="container">
    <Head>
      <title>Robert Soriano | Software Developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <div className="w-full px-4 md:px-6 text-xl leading-normal">
				<h1 className="text-app-lightestSlate font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl">
					<TypewriteNameIntroNoSSR />
				</h1>

				<p className="py-6 text-app-slate">
					I'm a software developer based in Manila, PH specializing in building
					websites and applications.
				</p>

				<p className="py-6 text-app-slate">
					My current toolset includes Vue, React, Redux, Node, Flutter, Docker and other various frameworks, libraries and technologies related to them.
				</p>

        {/* <p className="py-6 text-app-slate">
					Right now I'm using Javascript, Node.js, Vue.js and React.js to design
					and hack noice websites together on the internet. Occasionally, I make mobile apps using Flutter.
				</p> */}

				<p className="py-6 text-app-slate">
					Have a project you'd like to discuss? <br />
					Let's chat{' '}
					<span className="text-app-green">sorianorobertc@gmail.com</span>
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
							<Card data={data} />
						</div>
					))}
				</div>
        <Link href="/projects">
          <a className="text-app-green">
            Go to projects page
          </a>
        </Link>
			</div>
  </div>)
};

export default Home
