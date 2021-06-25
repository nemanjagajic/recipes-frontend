import React, {useEffect} from 'react';
import { useFetchRecipes } from '../../hooks/recipes/useFetchRecipes'
import imagePlaceholder from '../../assets/recipePlaceholder.png'
import * as Styled from './Recipes.styled'
import { Title, Text } from '../../styles/shared'
import { IMAGES_LOCATION } from '../../constants/constants'
import {useFetchCategories} from '../../hooks/categories/useFetchCategories'

const TITLE_MARGIN_BOTTOM = 20

type PropTypes = {
  categoryId: string;
  setNavbarTitle?: Function
}

const Recipes = ({ categoryId, setNavbarTitle }: PropTypes) => {
  const { data: recipes, isFetching: isFetchingRecipes } = useFetchRecipes(categoryId)
  const { data: categories } = useFetchCategories()

  useEffect(() => {
    if (setNavbarTitle) setNavbarTitle(getCategoryTitle())
  }, [categories])

  const renderImages = (images: string[]) => {
    return images.map((image, index) => <Styled.Image key={index} src={`${IMAGES_LOCATION}${image}`}/>)
  }

  const renderCoverImage = (coverImage: string) => {
    return (
      <Styled.Image src={`${IMAGES_LOCATION}${coverImage}`}/>
    )
  }

  const getCategoryTitle = () => {
    const category = categories?.find(c => c._id === categoryId)
    return category?.title
  }

  return (
    <Styled.Wrapper>
      <Styled.RecipesWrapper>
        {!isFetchingRecipes && recipes?.map((recipe) => (
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
