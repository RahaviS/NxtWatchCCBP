import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameLink = styled(Link)`
  text-decoration: none;
`
export const GamingContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-conent: flex-start;
  align-items: flex-start;
`
export const GamingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-conent: center;
  align-items: center;
  width: 100%;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-conent: center;
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
export const GamingVideoList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: ${props => props.bgColor};
  padding: 30px;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`
export const ThumbnailImg = styled.img`
  width: 150px;
  margin: 5px;
  align-self: center;
`
export const GameTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 600;
`
export const Views = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  padding-top: 0;
  margin-top: 0;
`
export const SideBarContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
