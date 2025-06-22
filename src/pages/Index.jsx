
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
import '../styles/main.css';

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
    <div className="relative min-h-screen">
      <CustomCursor />
      <FloatingNav />
      
      <main className="relative">
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
      
      <div className="background-elements">
        <div className="bg-element"></div>
        <div className="bg-element"></div>
        <div className="bg-element"></div>
      </div>
    </div>
  );
};

export default Index;
