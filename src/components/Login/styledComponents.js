import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`
export const LoginContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 60px;
`
export const LogoImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  color: #475569;
  font-size: 16px;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const InputBox = styled.input`
  width: 300px;
  height: 38px;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 15px;
  background: transparent;
  border: 1px solid #94a3b8;
  @media (max-width: 768px) {
    width: 200px;
    height: 30px;
  }
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input`
  color: black;
`

export const LoginButton = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 6px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 16px;
  border: 0;
  margin-top: 15px;
  @media (max-width: 768px) {
    width: 200px;
    height: 30px;
  }
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ff0b37;
`
