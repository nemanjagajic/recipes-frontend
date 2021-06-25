import React, {useEffect} from 'react'
import * as Styled from './Home.styled'
import Categories from '../../components/categories/Categories'
import $t from '../../i18n'

type PropTypes = {
  setNavbarTitle?: Function
}

const Home = ({ setNavbarTitle }: PropTypes) => {
  useEffect(() => {
    if (setNavbarTitle) setNavbarTitle($t('home.title'))
  }, [])

  return (
    <Styled.Wrapper>
      <Categories />
    </Styled.Wrapper>
  );
};

export default Home;
