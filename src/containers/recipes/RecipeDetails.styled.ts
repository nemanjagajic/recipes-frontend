import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
`

export const BackBtn = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  background-color: ${({ theme }) => theme.gray_300};
  width: 90px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.main};
  font-size: 16px;
  cursor: pointer;
`

export const Date = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  color: ${({ theme }) => theme.gray_500}
`

export const Title = styled.div`
  font-size: 36px;
  margin-top: 10px;
`

export const DescriptionWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray_100};
  width: 700px;
  min-height: 50px;
  border-radius: 20px;
  margin: 20px 0 40px;
  padding: 15px
`
export const CarouselImg = styled.img`
  max-width: 500px;
  max-height: 500px;
  border: ${({ theme }) => `1px solid ${theme.gray_100}`};
`

export const CarouselWrapper = styled.div`
  width: 700px;
  margin: 20px 0;
`
