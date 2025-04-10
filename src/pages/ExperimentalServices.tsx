import React from 'react';
import Navbar from '@/components/Navbar';
import ExperimentalSection from '@/components/ExperimentalSection';
import FooterSection from '@/components/FooterSection';

const ExperimentalServices = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden max-w-[100vw]">
      <Navbar />
      <main className="flex flex-col w-full">
        <ExperimentalSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default ExperimentalServices;