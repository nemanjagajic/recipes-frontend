import React, {useEffect} from 'react'
import { useFetchRecipes } from '../../hooks/recipes/useFetchRecipes'
import * as Styled from './Recipes.styled'
import { IMAGES_LOCATION } from '../../constants/constants'
import {useFetchCategories} from '../../hooks/categories/useFetchCategories'
import $t from '../../i18n'
import {ArrowBack, Image} from 'react-ionicons'
import theme from '../../theme/theme'
import { useHistory } from 'react-router'

// @ts-ignore
import Grid from 'styled-components-grid';

type PropTypes = {
  categoryId: string;
  setNavbarTitle?: Function
}

const Recipes = ({ categoryId, setNavbarTitle }: PropTypes) => {
  const history = useHistory()
  const { data: recipes, isFetching: isFetchingRecipes } = useFetchRecipes(categoryId)
  const { data: categories } = useFetchCategories()

  useEffect(() => {
    if (setNavbarTitle) setNavbarTitle(getCategoryTitle())
  }, [categories])

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
      <Grid>
        {!isFetchingRecipes && recipes?.length === 0 && <Styled.NoRecipesText>{$t('categories.noRecipesForCategory')}</Styled.NoRecipesText>}
        {!isFetchingRecipes && recipes?.map(recipe => (
          <Grid.Unit
            key={recipe._id}
            size={{tablet: 1 / 2, desktop: 1 / 3}}
          >
            <Styled.RecipeItem
              onClick={() => history.push(`/recipes/${recipe.categories[0]}/${recipe._id}`)}
            >
              {recipe.coverImage ? renderCoverImage(recipe.coverImage) : (
                <Styled.ImagePlaceholder>
                  <Image width={'60px'} height={'60px'} color={theme.gray_500} />
                </Styled.ImagePlaceholder>
              )}
              <Styled.RecipeTitle>{recipe.title}</Styled.RecipeTitle>
            </Styled.RecipeItem>
          </Grid.Unit>
        ))}
      </Grid>
    </Styled.Wrapper>
  )
}

export default Recipes;
