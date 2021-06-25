import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const RecipesWrapper = styled.div`
  width: 600px;
  margin-top: 40px;
`

export const RecipeItem = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray_100};
  padding: 30px;
  border-radius: 20px;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
`
