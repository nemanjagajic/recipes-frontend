import styled from 'styled-components'

export const Wrapper = styled.div<{
  bgColor?: string
}>`
  width: 100%;
  height: 80px;
  background-color: ${({ bgColor, theme }) => bgColor || theme.main};
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RightItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`

export const LeftItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  direction: rtl;
  margin-right: 10px;
`

export const Item = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.main_dark};
  }
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`
