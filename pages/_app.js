import React from 'react';
import App from 'next/app';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/tailwind.css';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />

			<div className="container w-full md:max-w-4xl lg:max-w-5xl mx-auto pt-2  mb-8">
            {children}
            </div>
            <Footer />
        </>
    );
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (<Layout><Component {...pageProps} /></Layout>);
  }
}

export default MyApp;