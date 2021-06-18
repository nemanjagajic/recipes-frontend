import React from 'react';
import * as Styled from './Navbar.styled'
import { LogOut, Home } from 'react-ionicons'
import theme from '../../theme/theme'

type NavbarItem = {
  title: string;
  onClick: Function
}

type PropTypes = {
  itemsFromLeft: NavbarItem[];
  itemsFromRight: NavbarItem[]
}

const Navbar = ({ itemsFromLeft, itemsFromRight }: PropTypes) => {
  return (
    <Styled.Wrapper>
      <Styled.RightItems>{ itemsFromLeft.map(item => (
        <Styled.Item onClick={() => item.onClick()} key={item.title}>
          <Home color={theme.white} width={'30px'} height={'20px'} />{item.title}
        </Styled.Item>
      ))}</Styled.RightItems>
      <Styled.LeftItems>{ itemsFromRight.map(item => (
        <Styled.Item onClick={() => item.onClick()} key={item.title}>
          {item.title}<LogOut color={theme.white} width={'30px'} height={'20px'} />
        </Styled.Item>
      ))}</Styled.LeftItems>
    </Styled.Wrapper>
  );
};

export default Navbar;
