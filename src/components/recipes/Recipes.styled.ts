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
  cursor: pointer;
  @media (max-width: 780px) {
    width: 90%
  }
`

export const RecipeItem = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.gray_100};
  border-radius: 20px;
  height: 400px;
  border: ${({ theme }) => `1px solid ${theme.gray_400}`};
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 60%;
  margin-bottom: 20px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 60%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.gray_400};
  color: ${({ theme }) => theme.gray_500};
`

export const NoImageText = styled.div`
  margin-top: 10px;
  text-align: center;
`

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
`

export const NoRecipesText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.gray_500};
`
