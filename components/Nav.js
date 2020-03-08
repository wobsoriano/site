import React, { useState } from 'react';
import NavItem from './NavItem';
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="header" className="w-full z-10 top-0">
      <div className="w-full md:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <Link href="/">
            <a className="text-app-green text-base no-underline hover:no-underline font-extrabold text-xl">
              RS
            </a>
          </Link>
          {/* <img src={require('../assets/avatar.png')} alt="a" style={{ borderRadius: '50%', width: 70 }} /> */}
        </div>

        <div className="block lg:hidden pr-4">
          <a
            href="#/"
            onClick={() => setIsOpen(!isOpen)}
            className="appearance-none text-app-green"
          >
            {isOpen ? (
              <ion-icon name="close-outline" size="large"></ion-icon>
            ) : (
              <ion-icon name="menu-outline" size="large"></ion-icon>
            )}
          </a>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${!isOpen &&
            'hidden'} lg:block mt-2 lg:mt-0 bg-app-lightNavy md:bg-transparent z-20`}
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <NavItem name="Home" href="/" />
            <NavItem name="About" href="/about" />
            <NavItem name="Projects" href="/projects" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
