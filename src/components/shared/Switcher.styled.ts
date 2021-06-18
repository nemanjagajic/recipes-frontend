import styled from 'styled-components'

export const Wrapper = styled.div<{
  width: number
}>`
  height: 50px;
  width: ${({ width }) => `${width}px`};
  background-color: ${({ theme }) => theme.gray_400};
  margin: 30px;
  display: flex;
  flex-direction: row;
  border-radius: 40px;
`

export const Option = styled.div<{
  isSelected: boolean
}>`
  height: 50px;
  width: ${({ isSelected }) => isSelected ? '220px' : '180px'};
  background-color: ${({ theme, isSelected }) => isSelected ? theme.main : theme.gray_400};
  color: ${({ theme }) => theme.white};
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
