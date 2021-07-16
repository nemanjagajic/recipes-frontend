import styled from 'styled-components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FormInput = styled.input`
  padding: 15px;
  margin: 10px;
  outline: none !important;
  background-color: ${({ theme }) => theme.gray_100};
  border-radius: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.gray_200};
  width: 700px;
  
  ::placeholder {
    color: ${({ theme }) => theme.gray_500};
  }
  
  @media (max-width: 780px) {
    width: 90%
  }
`

export const FormSelect = styled.select`
  padding: 15px;
  margin: 10px;
  outline: none !important;
  background-color: ${({ theme }) => theme.gray_100};
  border-radius: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.gray_200};
  border: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 730px;
  cursor: pointer;
  
  @media (max-width: 780px) {
    width: 90%
  }
`

export const FormSubmit = styled.input`
  padding: 15px;
  margin: 10px;
  outline: none !important;
  background-color: ${({ theme, disabled }) => disabled ? theme.gray_400 : theme.main};
  border-radius: 40px;
  font-size: 16px;
  color: ${({ theme }) => theme.gray_200};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  width: 220px;
  height: 50px;
  color: ${({ theme }) => theme.white};
  align-self: center;
`

export const TextEditor = styled(ReactQuill)`
  width: 100%;
  height: 400px; 
  margin-top: 20px;
  margin-bottom: 70px;
`
