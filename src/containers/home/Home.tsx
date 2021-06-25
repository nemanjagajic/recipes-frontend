import React from 'react'
import $t from '../../i18n'
import * as Styled from './Home.styled'
import { Title } from '../../styles/shared';
import Categories from '../../components/categories/Categories'

const TITLE_MARGIN_TOP = 20;

const Home = () => {

  return (
    <Styled.Wrapper>
      <Title marginTop={TITLE_MARGIN_TOP}>{$t('home.title')}</Title>
      <Categories />
    </Styled.Wrapper>
  );
};

export default Home;
