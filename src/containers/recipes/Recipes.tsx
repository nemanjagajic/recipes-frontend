import React, {useEffect, useState} from 'react'
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
import {useDeleteCategory} from '../../hooks/categories/useDeleteCategory'

type PropTypes = {
  categoryId: string;
  setNavbarTitle?: Function
}

const Recipes = ({ categoryId, setNavbarTitle }: PropTypes) => {
  const history = useHistory()
  const isSignedIn = !!localStorage.getItem('token')

  const [searchText, setSearchText] = useState<string>('')

  const { data: recipes, isFetching: isFetchingRecipes } = useFetchRecipes(categoryId)
  const { data: categories } = useFetchCategories()
  const { mutate: deleteCategory } = useDeleteCategory(() => history.push('/'))

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

  const handleDeleteRecipe = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm($t('categories.deleteCategoryAlert')) && categoryId) {
      deleteCategory(categoryId)
    }
  }

  const onChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any) => {
    const { value } = e.currentTarget
    setSearchText(value)
  }

  const filteredRecipes = searchText
    ? recipes?.filter((recipe) => recipe.title.toLowerCase().includes(searchText.toLowerCase()))
    : recipes

  return (
    <Styled.Wrapper>
      <Styled.SearchWrapper>
        <Styled.SearchInput
          placeholder={$t('recipes.searchPlaceholder')}
          value={searchText}
          onChange={onChange}
        />
      </Styled.SearchWrapper>
      <Grid>
        {!isFetchingRecipes && filteredRecipes?.length === 0 && (
          recipes?.length === 0
            ? <Styled.NoRecipesText>{$t('categories.noRecipesForCategory')}</Styled.NoRecipesText>
            : <Styled.NoRecipesText>{$t('categories.noRecipesForSearchText')}</Styled.NoRecipesText>
        )}
        {!isFetchingRecipes && filteredRecipes?.map(recipe => (
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
      {isSignedIn && <Styled.DeleteBtn onClick={handleDeleteRecipe}>{$t('categories.deleteCategory')}</Styled.DeleteBtn>}
    </Styled.Wrapper>
  )
}

export default Recipes;
