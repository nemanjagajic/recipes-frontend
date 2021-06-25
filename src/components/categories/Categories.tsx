import React from 'react';
import { useFetchCategories } from '../../hooks/categories/useFetchCategories'
import * as Styled from './Categories.styled'
import categoryPlaceholder from '../../assets/categoryPlaceholder.jpeg'
import { useHistory } from 'react-router'

const Categories = () => {
  const history = useHistory();
  const { data: categories } = useFetchCategories()

  return (
    <Styled.Wrapper>
      {categories?.map(category => (
        <Styled.Item key={category._id} onClick={() => history.push(`/recipes/${category._id}`)} imageUrl={categoryPlaceholder}>
          <Styled.Title>{category.title}</Styled.Title>
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};

export default Categories
