import React from 'react';
import {Header} from '~widgets/Header';
import {Navigation} from '~widgets/Navigation';
import {MainSection} from '~widgets/MainSection';

export const Main = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Navigation />
    </>
  );
};
