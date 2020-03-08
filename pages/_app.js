import React from 'react';
import App from 'next/app';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/tailwind.css';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col" style={{ minHeight: '100vh' }}>
      <Nav />
      <div
        className="container w-full md:max-w-4xl mx-auto pt-2  mb-8"
        style={{ flex: '1 0 auto' }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
