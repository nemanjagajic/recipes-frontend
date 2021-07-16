import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const RecipeTitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.gray_600};
  background-color: ${({ theme }) => theme.white};
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 20px;
  border: ${({ theme }) => `1px solid ${theme.gray_400}`};
  min-width: 100px;
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
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
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

export const DeleteBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  border: ${({ theme }) => `1px solid ${theme.main}`};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.main};
  cursor: pointer;
  margin: 40px auto;
`

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const SearchInput = styled.input`
  padding: 15px;
  outline: none !important;
  background-color: ${({ theme }) => theme.gray_100};
  border-radius: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.gray_200};
  width: 500px;
  border: ${({ theme }) => `1px solid ${theme.gray_400}`};
  
  ::placeholder {
    color: ${({ theme }) => theme.gray_500};
  }
  
  @media (max-width: 780px) {
    width: 90%
  }
`
