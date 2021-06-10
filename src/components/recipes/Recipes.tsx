import React from 'react';
import { useFetchRecipes } from '../../hooks/recipes/useFetchRecipes'
import imagePlaceholder from '../../assets/recipePlaceholder.png'
import * as Styled from './Recipes.styled'

const Recipes = () => {
  const { data: recipes } = useFetchRecipes()

  return (
    <Styled.Wrapper>
      {recipes?.map((recipe) => (
        <Styled.RecipeItem key={recipe._id}>
          <Styled.Image src={imagePlaceholder}/>
        </Styled.RecipeItem>
      ))}
    </Styled.Wrapper>
  );
};

export default Recipes;
