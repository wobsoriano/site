import React from 'react';

const Footer = () => {
	return (
		<footer
			style={{
				background: '#020b1a',
			}}
		>
			<div className="container md:max-w-5xl lg:max-w-6xl mx-auto py-8">
				<div className="flex justify-around">
					<a href="#/" className="text-app-lightSlate hover:text-app-green">
						<ion-icon name="logo-github" style={{ fontSize: 24 }}></ion-icon>
					</a>
					<a href="#/" className="text-app-lightSlate hover:text-app-green">
						<ion-icon name="logo-linkedin" style={{ fontSize: 24 }}></ion-icon>
					</a>
					<a href="#/" className="text-app-lightSlate hover:text-app-green">
						<ion-icon name="logo-facebook" style={{ fontSize: 24 }}></ion-icon>
					</a>
					<a href="#/" className="text-app-lightSlate hover:text-app-green">
						<ion-icon name="logo-instagram" style={{ fontSize: 24 }}></ion-icon>
					</a>
					<a href="#/" className="text-app-lightSlate hover:text-app-green">
						<ion-icon name="logo-stackoverflow" style={{ fontSize: 24 }}></ion-icon>
					</a>
				</div>
				<div className="text-center mt-6">
					<p className="text-app-slate">
						Robert Soriano © {new Date().getFullYear()}.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
