import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const RecipeTitle = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.main};
  padding: 10px;
  width: 100%;
  text-align: center;
`

export const RecipeItem = styled.div`
  display: flex;
  margin: 10px auto;
  width: 90%;
  height: 220px;
  border-radius: 20px;
  cursor: pointer;
  align-items: flex-end;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.1);
  overflow: hidden;
  position: relative;
  &:hover {
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.0);
  }
`

export const Image = styled.img`
  position: absolute;
  z-index: -1;
  height: 220px;
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
`

export const ImagePlaceholder = styled.div`
  position: absolute;
  z-index: -1;
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.gray_400};
  margin-bottom: 10px;
`

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
`

export const NoRecipesText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.gray_500};
  width: 100%;
`
