import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`

export const FormWrapper = styled.div`
  width: 700px;
  
  @media (max-width: 780px) {
    width: 90%
  }
`
