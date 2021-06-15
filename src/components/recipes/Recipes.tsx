import React from 'react';
import { useFetchRecipes } from '../../hooks/recipes/useFetchRecipes'
import imagePlaceholder from '../../assets/recipePlaceholder.png'
import * as Styled from './Recipes.styled'
import { Title, Text } from '../../styles/shared'
import {IMAGES_LOCATION} from '../../constants/constants'

const TITLE_MARGIN_BOTTOM = 20

const Recipes = () => {
  const { data: recipes } = useFetchRecipes()

  return (
    <Styled.Wrapper>
      {recipes?.map((recipe) => (
        <Styled.RecipeItem key={recipe._id}>
          {recipe.images.length === 0 && <Styled.Image src={imagePlaceholder}/>}
          {recipe.images.map(image => <Styled.Image key={image} src={`${IMAGES_LOCATION}${image}`}/>)}
          <Title marginBottom={TITLE_MARGIN_BOTTOM}>{recipe.title}</Title>
          <Text>{recipe.shortDescription}</Text>
        </Styled.RecipeItem>
      ))}
    </Styled.Wrapper>
  );
};

export default Recipes;
