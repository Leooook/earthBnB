import React from 'react';

import Hero from '../components/hero';

const ErrorPage = () => {
  return (
    <>
      <Hero
        hero='heroOtherPage'
        title='Oops!'
        subtitle='Page Not Found'
        link='RETURN HOME'
      ></Hero>
    </>
  );
};

export default ErrorPage;
