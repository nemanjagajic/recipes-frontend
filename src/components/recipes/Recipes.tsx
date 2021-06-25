import React, {useEffect} from 'react';
import { useFetchRecipes } from '../../hooks/recipes/useFetchRecipes'
import * as Styled from './Recipes.styled'
import { Title, Text } from '../../styles/shared'
import { IMAGES_LOCATION } from '../../constants/constants'
import {useFetchCategories} from '../../hooks/categories/useFetchCategories'
import $t from '../../i18n'
import { Image } from 'react-ionicons'
import theme from '../../theme/theme'

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

  // TODO move this into recipe details page
  // const renderImages = (images: string[]) => {
  //   return images.map((image, index) => <Styled.Image key={index} src={`${IMAGES_LOCATION}${image}`}/>)
  // }

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
            {recipe.coverImage ? renderCoverImage(recipe.coverImage) : (
              <Styled.ImagePlaceholder>
                <Image width={'60px'} height={'60px'} color={theme.gray_500} />
                <Styled.NoImageText>{$t('recipes.noCoverImageAdded')}</Styled.NoImageText>
              </Styled.ImagePlaceholder>
            )}
            <Title marginBottom={TITLE_MARGIN_BOTTOM}>{recipe.title}</Title>
            <Text>{recipe.shortDescription}</Text>
          </Styled.RecipeItem>
        ))}
      </Styled.RecipesWrapper>
    </Styled.Wrapper>
  )
}

export default Recipes;
