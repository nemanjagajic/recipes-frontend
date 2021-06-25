import React from 'react';
import * as Styled from './Navbar.styled'
import { LogOut, Home } from 'react-ionicons'
import theme from '../../theme/theme'
import {MEDIA_QUERY_BREAKPOINT} from '../../constants/constants'
import useWindowDimensions from '../../hooks/shared/useWindowDimensions'

type NavbarItem = {
  title: string;
  onClick: Function
}

type PropTypes = {
  itemsFromLeft?: NavbarItem[];
  itemsFromRight?: NavbarItem[];
  title?: string
}

const Navbar = ({ itemsFromLeft, itemsFromRight, title }: PropTypes) => {
  const { width } = useWindowDimensions();

  return (
    <Styled.Wrapper>
      <Styled.RightItems>{ itemsFromLeft?.map(item => (
        <Styled.Item onClick={() => item.onClick()} key={item.title}>
          <Home color={theme.white} width={'30px'} height={'20px'} />
          {width > MEDIA_QUERY_BREAKPOINT && item.title}
        </Styled.Item>
      ))}</Styled.RightItems>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Styled.LeftItems>{ itemsFromRight?.map(item => (
        <Styled.Item onClick={() => item.onClick()} key={item.title}>
          {width > MEDIA_QUERY_BREAKPOINT && item.title}
          <LogOut color={theme.white} width={'30px'} height={'20px'} />
        </Styled.Item>
      ))}</Styled.LeftItems>
    </Styled.Wrapper>
  );
};

export default Navbar;
