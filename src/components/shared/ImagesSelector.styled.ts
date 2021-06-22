import styled from 'styled-components'

export const Wrapper = styled.div<{
  multiple: boolean
}>`
  height: 460px;
  width: ${({ multiple }) => multiple ? '100%' : '400px'};
  border-radius: 30px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const ImagesContainer = styled.div<{
  multiple: boolean,
  showPlaceholder: boolean
}>`
  height: 400px;
  width: ${({ multiple }) => multiple ? '100%' : '400px'};
  background-color: ${({ theme }) => theme.white};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: ${({ multiple, showPlaceholder }) => (multiple && !showPlaceholder) ? 'normal' : 'center'};
  border: ${({ theme }) => `1px dashed ${theme.gray_500}`};
  flex-direction: row;
  overflow-y:scroll;
`

export const AddImageBtn = styled.div`
  height: 50px;
  width: 150px;
  background-color: ${({ theme }) => theme.main};;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const AddImageBtnText = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
`

export const Image = styled.img`
  max-width: 360px;
  max-height: 360px;
  align-self: center;
  margin: 0 10px;
`
