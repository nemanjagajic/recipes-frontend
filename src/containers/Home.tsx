import React from 'react'
import $t from '../i18n'
import Recipes from './Recipes'

const Home = () => {

  return (
    <div>
      {$t('home.title')}
      <Recipes />
    </div>
  );
};

export default Home;
