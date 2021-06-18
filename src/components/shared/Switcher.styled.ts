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
  width: 50%;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.main : theme.gray_400};
  color: ${({ theme }) => theme.white};
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
