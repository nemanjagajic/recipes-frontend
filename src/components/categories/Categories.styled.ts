import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const Item = styled.div`
  width: 90%;
  height: 220px;
  border-radius: 20px;
  margin: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
  position: relative;
  &:hover {
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
  }
`

export const ItemImage = styled.img`
  position: absolute;
  z-index: -1;
  height: 220px;
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
`

export const Title = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.main};;
  padding: 15px;
  border-radius: 20px;
`
