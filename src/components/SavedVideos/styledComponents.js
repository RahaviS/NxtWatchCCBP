import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const SavedVideoContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`
export const TitleContainer = styled.div`
  height: 200px;
  width: 100%;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  padding-top: 30px;
`
export const Text = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 28px;
  margin-left: 10px;
`
export const SavedVideosList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.bgColor};
  padding: 30px;
`
export const NoSavedVideosContainer = styled.div`
  width: 100%;
  padding: 40px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const NoVideoImage = styled.img`
  width: 350px;
`
export const NoVideoText = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 20px;
`
export const NoVideoDesc = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
`
export const SideBarContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
