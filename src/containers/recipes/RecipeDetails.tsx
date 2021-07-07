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

type PropTypes = {
  recipeId: string;
  setNavbarTitle: Function
}

const RecipeDetails = ({ recipeId, setNavbarTitle }: PropTypes) => {
  const history = useHistory()
  const { data: recipe, isFetching } = useFetchRecipeById(recipeId)

  useEffect(() => {
    setNavbarTitle('')
  }, [])

  if (!recipe || isFetching) return null

  return (
    <Styled.Wrapper>
      <Styled.BackBtn onClick={() => history.push(`/recipes/${recipe.categories[0]}`)}>
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
      <Styled.DescriptionWrapper>{recipe.description}</Styled.DescriptionWrapper>
    </Styled.Wrapper>
  );
};

export default RecipeDetails
