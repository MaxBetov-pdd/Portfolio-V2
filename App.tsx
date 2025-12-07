import React from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { StackGrid } from './components/StackGrid';
import { Philosophy } from './components/Philosophy';
import { CurrentFocus } from './components/CurrentFocus';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full selection:bg-blue-500/30">
      <Background />
      
      <main className="relative z-10 flex flex-col items-center w-full px-4 md:px-8 max-w-7xl mx-auto">
        <Hero />
        <StackGrid />
        <Philosophy />
        <CurrentFocus />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;