import styled from 'styled-components'

export const TrendingContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export const TrendingVideosList = styled.ul`
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
export const SideBarContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
