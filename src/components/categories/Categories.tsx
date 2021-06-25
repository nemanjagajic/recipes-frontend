import React from 'react';
import { useFetchCategories } from '../../hooks/categories/useFetchCategories'
import * as Styled from './Categories.styled'
import categoryPlaceholder from '../../assets/categoryPlaceholder.jpeg'

const Categories = () => {
  const { data: categories } = useFetchCategories()

  return (
    <Styled.Wrapper>
      {categories?.map(category => (
        <Styled.Item imageUrl={categoryPlaceholder}>
          <Styled.Title>{category.title}</Styled.Title>
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};

export default Categories
