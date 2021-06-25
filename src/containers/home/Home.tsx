import React from 'react'
import $t from '../../i18n'
import * as Styled from './Home.styled'
import Categories from '../../components/categories/Categories'
import Navbar from '../../components/shared/Navbar'
import { useHistory } from 'react-router'

const Home = () => {
  const history = useHistory()

  return (
    <Styled.Wrapper>
      <Navbar
        itemsFromLeft={[{ title: $t('dashboard.mainPage'), onClick: () => history.push('/')}]}
        title={$t('home.title')}
      />
      <Categories />
    </Styled.Wrapper>
  );
};

export default Home;
