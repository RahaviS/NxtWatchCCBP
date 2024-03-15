import styled from 'styled-components'

export const NotFoundContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
  background-color: ${props => props.bgColor};
`
export const NotFoundImg = styled.img`
  margin-top: 50px;
  width: 350px;
`
export const NotFoundTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 22px;
`
export const NotFoundDesc = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
`
export const SideBarContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
