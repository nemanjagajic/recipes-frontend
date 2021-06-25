import styled from 'styled-components'

export const GlobalWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.gray_200};
`

export const Title = styled.div<{
  fontSize?: number,
  marginBottom?: number,
  marginTop?: number
}>`
  font-size: ${props => props.fontSize? `${props.fontSize}px` : '32px'};
  color: ${props => props.color || props.theme.gray_200};
  text-align: center;
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : 0 }};
  margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : 0 }};
`

export const Text = styled.div`
  font-size: 18px;
  
  @media (max-width: 780px) {
    max-width: 90%
  }
`
