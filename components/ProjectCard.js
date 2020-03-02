import React from 'react';

const ProjectCard = (data) => {
    const { name, description, primaryLanguage, stargazers, homepageUrl, url, diskUsage } = data.data;
    return (
        <div
			className="bg-app-lightNavy rounded overflow-hidden shadow relative w-full" style={{ paddingBottom: 55 }}
		>
            <div className="px-6 pt-4">
                <div className="flex justify-between">
                        <a href="#/" className="text-app-green" style={{ cursor: 'default' }}>
                            <ion-icon name="folder-open-outline" size="large"></ion-icon>
                        </a>
                        <div>
                            <a
                                href={url}
                                target="_BLANK"
                                rel="noopener noreferrer"
                                className="text-app-slate hover:text-app-green mr-2"
                            >
                                <ion-icon name="logo-github" size="large"></ion-icon>
                            </a>
                            {homepageUrl && <a
                                href={homepageUrl}
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
					{name}
				</div>
				<p className="sm:text-sm md:text-base text-app-slate">
                    {description}
                </p>
			</div>
            <div className="px-6 py-4 absolute flex items-center" style={{ bottom: 0, height: 55 }}>
				<span className="text-app-slate text-xs md:text-sm font-semibold mr-3">
                    {primaryLanguage.name}
                </span>
                <span className="text-app-slate mr-2">
                    <ion-icon name="star-outline" style={{ fontSize: 16 }}></ion-icon>
                </span>
                <span className="text-app-slate text-xs md:text-sm mr-3">
                    {stargazers.totalCount}
                </span>
                <span className="text-app-slate mr-2">
                    <ion-icon name="git-branch-outline" style={{ fontSize: 16 }}></ion-icon>
                </span>
                <span className="text-app-slate text-xs md:text-sm ">
                    {diskUsage} KB
                </span>
			</div>
        </div>
    )
}

export default ProjectCard;
