import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import OurArtists from './pages/OurArtistsPage';
import ServicesForArtistsPage from './pages/ServicesForArtistsPage';
import ServicesForClientsPage from './pages/ServicesForClientsPage';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import { AnimatedBackground } from './components/animated-background';
import { Header } from './components/header';
import { CTASection } from './components/cta-section';

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <AnimatedBackground/>
          <Header/>
          <main className='mt-16'>
          <Outlet/>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;