import React from 'react'
import $t from '../../i18n'
import Recipes from '../../components/recipes/Recipes'
import * as Styled from './Home.styled'
import { Title } from '../../styles/shared';

const TITLE_MARGIN_TOP = 20;

const Home = () => {

  return (
    <Styled.Wrapper>
      <Title marginTop={TITLE_MARGIN_TOP}>{$t('home.title')}</Title>
      <Recipes />
    </Styled.Wrapper>
  );
};

export default Home;
