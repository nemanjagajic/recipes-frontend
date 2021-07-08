import React, { useEffect } from 'react'
import moment from 'moment'
import * as Styled from './RecipeDetails.styled'
import { useFetchRecipeById } from '../../hooks/recipes/useFetchRecipeById'
import { useHistory } from 'react-router'
import { ArrowBack } from 'react-ionicons'
import theme from '../../theme/theme'
import $t from '../../i18n'
import Carousel from 'react-elastic-carousel'
import { IMAGES_LOCATION } from '../../constants/constants'
import './Carousel.styles.css'
import { Title } from '../../styles/shared'
import { useDeleteRecipe } from '../../hooks/recipes/useDeleteRecipe'

type PropTypes = {
  recipeId: string;
  setNavbarTitle: Function
}

const RecipeDetails = ({ recipeId, setNavbarTitle }: PropTypes) => {
  const history = useHistory()
  const navigateBack = () => history.push(`/recipes/${recipe?.categories[0]}`)

  const { data: recipe, isFetching } = useFetchRecipeById(recipeId)
  const { mutate: deleteRecipe, error } = useDeleteRecipe(navigateBack)

  useEffect(() => {
    setNavbarTitle('')
  }, [])

  const handleDeleteRecipe = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm($t('recipes.deleteRecipeAlert')) && recipe) {
      deleteRecipe(recipe._id)
    }
  }

  if (!recipe || isFetching) return null

  return (
    <Styled.Wrapper>
      <Styled.BackBtn onClick={navigateBack}>
        <ArrowBack color={theme.main} width={'18px'} />
        {$t('common.back')}
      </Styled.BackBtn>
      <Styled.Date>{moment(recipe.createdAt).format('MMMM Do YYYY, h:mm a')}</Styled.Date>
      <Styled.Title>{recipe.title}</Styled.Title>
      <Styled.DescriptionWrapper>{recipe.shortDescription}</Styled.DescriptionWrapper>
      {recipe.images.length > 0 && (
        <Styled.CarouselWrapper>
          <Carousel
            itemsToShow={1}
            isRTL={false}
          >
            {recipe.images.map((image, index) => (
              <Styled.CarouselImg
                key={index}
                src={`${IMAGES_LOCATION}${image}`}
              />
              )
            )}
          </Carousel>
        </Styled.CarouselWrapper>
      )}
      <Title fontSize={24} color={theme.main} marginTop={20}>{$t('recipes.recipe')}</Title>
      <Styled.Underline />
      <Styled.DescriptionWrapper>{recipe.description}</Styled.DescriptionWrapper>
      <Styled.DeleteBtn onClick={handleDeleteRecipe}>Delete</Styled.DeleteBtn>
      {typeof error === 'string' && error}
    </Styled.Wrapper>
  );
};

export default RecipeDetails
