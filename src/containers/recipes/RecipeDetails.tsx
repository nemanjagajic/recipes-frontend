import React, {useEffect} from 'react'
import * as Styled from './RecipeDetails.styled'
import {useFetchRecipeById} from '../../hooks/recipes/useFetchRecipeById'
import {useHistory} from 'react-router'

type PropTypes = {
  recipeId: string;
  setNavbarTitle: Function
}

const RecipeDetails = ({ recipeId, setNavbarTitle }: PropTypes) => {
  const history = useHistory()
  const { data: recipe } = useFetchRecipeById(recipeId)

  useEffect(() => {
    setNavbarTitle(recipe?.title)
  }, [recipe])

  if (!recipe) return null

  return (
    <div>
      <div onClick={() => history.push(`/recipes/${recipe.categories[0]}`)}>Back</div>
      <div>{recipe.title}</div>
      <div>{recipe.shortDescription}</div>
      <div>{recipe.description}</div>
      <div>{recipe.createdAt}</div>
    </div>
  );
};

export default RecipeDetails
