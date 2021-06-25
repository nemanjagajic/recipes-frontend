import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  margin-top: 50px;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const Item = styled.div<{
  imageUrl: string
}>`
  width: 400px;
  height: 200px;
  border-radius: 20px;
  margin: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background-image:  ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
  &:hover {
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
  }
`

export const Title = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.main};;
  padding: 15px;
  border-radius: 20px;
`