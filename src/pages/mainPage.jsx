import React from 'react';

import Hero from '../components/hero';
import Services from '../components/services';
import Feature from '../components/feature';

const MainPage = () => {
  return (
    <>
      <Hero
        hero='heroMainPage'
        title='Get Out And Stretch Your Imagination'
        subtitle='You Don’t Have To Go Far To Find A World Of Wonder.'
        link='EXPLORE'
      ></Hero>
      <Services />
      <Feature />
    </>
  );
};

export default MainPage;
