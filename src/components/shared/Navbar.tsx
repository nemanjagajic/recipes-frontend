import React from 'react';
import * as Styled from './Navbar.styled'
import { LogOut, Home } from 'react-ionicons'
import theme from '../../theme/theme'
import {MEDIA_QUERY_BREAKPOINT} from '../../constants/constants'
import useWindowDimensions from '../../hooks/shared/useWindowDimensions'

type NavbarItem = {
  title: string;
  onClick: Function,
  showIcon?: boolean
}

type PropTypes = {
  itemsFromLeft?: NavbarItem[];
  itemsFromRight?: NavbarItem[];
  title?: string,
}

const Navbar = ({ itemsFromLeft, itemsFromRight, title}: PropTypes) => {
  const { width } = useWindowDimensions();

  return (
    <Styled.Wrapper>
      <Styled.LeftItems>{ itemsFromLeft?.map(item => (
        <Styled.Item onClick={() => item.onClick()} key={item.title}>
          {item.showIcon && <Home color={theme.white} width={'30px'} height={'20px'} />}
          {width > MEDIA_QUERY_BREAKPOINT && item.title}
        </Styled.Item>
      ))}</Styled.LeftItems>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Styled.RightItems>{ itemsFromRight?.map(item => (
        <Styled.Item onClick={() => item.onClick()} key={item.title}>
          {width > MEDIA_QUERY_BREAKPOINT && item.title}
          {item.showIcon && <LogOut color={theme.white} width={'30px'} height={'20px'} />}
        </Styled.Item>
      ))}</Styled.RightItems>
    </Styled.Wrapper>
  );
};

export default Navbar;
