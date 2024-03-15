import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 100%;
`
export const FailureImage = styled.img`
  width: 300px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 700;
`
export const FailureDesc = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
`
export const RetryButton = styled.button`
  width: 140px;
  height: 45px;
  border: 0;
  border-radius: 8px;
  background-color: #4f46e5;
  color: white;
`
