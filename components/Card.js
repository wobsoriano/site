import React from 'react';
// import axios from 'axios';
// import GET_REPOSITORIES from '../queries/GET_REPOSITORIES';

// axios({
// 	url: 'https://api.github.com/graphql',
// 	method: 'post',
// 	headers: {
// 		Authorization: 'Bearer,
// 	},
// 	data: {
// 		query: GET_REPOSITORIES,
// 	},
// }).then(result => {
// 	console.log(result.data);
// });

const Card = ({ data }) => {
	const { title, description, techonologies, githubUrl, url } = data;

	return (
		<div
			className="bg-app-lightNavy rounded overflow-hidden shadow relative"
			style={{ paddingBottom: 60 }}
		>
			<div className="px-6 pt-4">
				<div className="flex justify-between">
					<a href="#/" className="text-app-green" style={{ cursor: 'default' }}>
						<ion-icon name="folder-open-outline" size="large"></ion-icon>
					</a>
					<div>
						<a
							href={githubUrl}
							target="_BLANK"
							rel="noopener noreferrer"
							className="text-app-slate hover:text-app-green mr-2"
						>
							<ion-icon name="logo-github" size="large"></ion-icon>
						</a>
						{url && <a
							href={url}
							target="_BLANK"
							rel="noopener noreferrer"
							className="text-app-slate hover:text-app-green"
						>
							<ion-icon name="open-outline" size="large"></ion-icon>
						</a>}
					</div>
				</div>
			</div>
			<div className="px-6 py-4">
				<div className="font-bold sm:text-lg md:text-xl mb-2 text-app-lightestSlate">
					{title}
				</div>
				<p className="sm:text-sm md:text-base text-app-slate">{description}</p>
			</div>
			<div className="px-6 py-4 absolute" style={{ bottom: 0, height: 60 }}>
				{techonologies.map(tech => (
					<span
						key={tech}
						className="inline-block text-app-slate px-3 py-1 text-xs md:text-sm font-semibold mr-2"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
};

export default Card;
