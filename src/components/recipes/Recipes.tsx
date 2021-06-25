import React from 'react';
import { useFetchRecipes } from '../../hooks/recipes/useFetchRecipes'
import imagePlaceholder from '../../assets/recipePlaceholder.png'
import * as Styled from './Recipes.styled'
import { Title, Text } from '../../styles/shared'
import { IMAGES_LOCATION } from '../../constants/constants'
import $t from '../../i18n'
import Navbar from '../shared/Navbar'
import { useHistory } from 'react-router'

const TITLE_MARGIN_BOTTOM = 20

type PropTypes = {
  categoryId: string;
}

const Recipes = ({ categoryId }: PropTypes) => {
  const history = useHistory()
  const { data: recipes, isFetching } = useFetchRecipes(categoryId)

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
      <Styled.RecipesWrapper>
        {!isFetching && recipes?.map((recipe) => (
          <Styled.RecipeItem key={recipe._id}>
            {recipe.coverImage ? renderCoverImage(recipe.coverImage) : <Styled.Image src={imagePlaceholder}/>}
            {renderImages(recipe.images)}
            <Title marginBottom={TITLE_MARGIN_BOTTOM}>{recipe.title}</Title>
            <Text>{recipe.shortDescription}</Text>
          </Styled.RecipeItem>
        ))}
      </Styled.RecipesWrapper>
    </Styled.Wrapper>
  )
}

export default Recipes;
