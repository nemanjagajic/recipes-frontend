import React from 'react';
import { useFetchRecipes } from '../../hooks/recipes/useFetchRecipes'
import imagePlaceholder from '../../assets/recipePlaceholder.png'
import * as Styled from './Recipes.styled'
import { Title, Text } from '../../styles/shared'
import { IMAGES_LOCATION } from '../../constants/constants'

const TITLE_MARGIN_BOTTOM = 20

const Recipes = () => {
  const { data: recipes } = useFetchRecipes()

  const renderImages = (images: string[]) => {
    return images.map((image, index) => <Styled.Image key={index} src={`${IMAGES_LOCATION}${image}`}/>)
  }

  const renderCoverImage = (coverImage: string) => {
    return (
      <Styled.Image src={`${IMAGES_LOCATION}${coverImage}`}/>
    )
  }

  return (
    <Styled.Wrapper>
      {recipes?.map((recipe) => (
        <Styled.RecipeItem key={recipe._id}>
          {recipe.coverImage ? renderCoverImage(recipe.coverImage) : <Styled.Image src={imagePlaceholder}/>}
          {renderImages(recipe.images)}
          <Title marginBottom={TITLE_MARGIN_BOTTOM}>{recipe.title}</Title>
          <Text>{recipe.shortDescription}</Text>
        </Styled.RecipeItem>
      ))}
    </Styled.Wrapper>
  )
}

export default Recipes;
