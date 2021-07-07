import React from 'react';
import { useFetchCategories } from '../../hooks/categories/useFetchCategories'
import * as Styled from './Categories.styled'
import categoryPlaceholder from '../../assets/categoryPlaceholder.jpeg'
import { useHistory } from 'react-router'
import {IMAGES_LOCATION} from '../../constants/constants'

// @ts-ignore
import Grid from 'styled-components-grid';

const Categories = () => {
  const history = useHistory();
  const { data: categories } = useFetchCategories()

  return (
    <Styled.Wrapper>
    <Grid>
      {categories?.map(category => (
        <Grid.Unit
          key={category._id}
          size={{tablet: 1 / 2, desktop: 1 / 3}}
        >
          <Styled.Item
            onClick={() => history.push(`/recipes/${category._id}`)}
          >
            <Styled.ItemImage src={category.image ? `${IMAGES_LOCATION}${category.image}` : categoryPlaceholder} />
            <Styled.Title>{category.title}</Styled.Title>
          </Styled.Item>
        </Grid.Unit>
      ))}
    </Grid>
    </Styled.Wrapper>
  );
};

export default Categories
