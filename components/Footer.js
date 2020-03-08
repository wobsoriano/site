import React from 'react';

const Footer = () => {
  const links = [
    {
      icon: 'logo-github',
      href: 'https://github.com/sorxrob',
    },
    {
      icon: 'logo-linkedin',
      href: 'https://www.linkedin.com/in/robertcsoriano',
    },
    {
      icon: 'logo-facebook',
      href: 'https://www.facebook.com/wobsoriano',
    },
    {
      icon: 'logo-instagram',
      href: 'https://www.instagram.com/wobsoriano',
    },
    {
      icon: 'logo-stackoverflow',
      href: 'https://stackoverflow.com/users/4698790/wobsoriano',
    },
  ];

  const socialIcons = links.map((item, idx) => (
    <a
      key={idx}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-app-lightSlate hover:text-app-green mr-3"
    >
      <ion-icon name={item.icon} size="large"></ion-icon>
    </a>
  ));

  return (
    <footer
      style={{
        background: '#020b1a',
      }}
    >
      <div className="container max-w-5xl mx-auto py-8">
        <div className="flex justify-center">{socialIcons}</div>
        <div className="text-center mt-5">
          <p className="text-app-slate">
            Robert Soriano © {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
