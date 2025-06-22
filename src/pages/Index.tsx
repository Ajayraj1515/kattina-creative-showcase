
import React from 'react';
import Hero from '../components/Hero';
import FloatingNav from '../components/FloatingNav';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import WhatICanDo from '../components/WhatICanDo';
import FutureGoals from '../components/FutureGoals';
import LearningTimeline from '../components/LearningTimeline';
import LeetCodeSection from '../components/LeetCodeSection';
import ChatWithMe from '../components/ChatWithMe';
import LoadingScreen from '../components/LoadingScreen';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <CustomCursor />
      <FloatingNav />
      
      {/* Main content with proper spacing to avoid sidebar overlap */}
      <main className="relative lg:ml-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhatICanDo />
        <FutureGoals />
        <LearningTimeline />
        <LeetCodeSection />
        <ChatWithMe />
      </main>
      
      {/* Optimized background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
