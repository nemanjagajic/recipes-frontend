import React from 'react'
import $t from '../../i18n'
import Recipes from '../../components/recipes/Recipes'
import * as Styled from './Home.styled'

const Home = () => {

  return (
    <Styled.Wrapper>
      {$t('home.title')}
      <Recipes />
    </Styled.Wrapper>
  );
};

export default Home;
