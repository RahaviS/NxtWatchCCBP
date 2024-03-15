import styled from 'styled-components'

export const HomeBg = styled.div`
  min-height: 100%;
`
export const HomeContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const HomeRightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 240px;
  width: 100%;
  display: ${props => props.display};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const BannerLeft = styled.div`
  margin-left: 40px;
`
export const Image = styled.img`
  width: 200px;
`
export const BannerDesc = styled.p`
  font-family: 'Roboto';
  color: #212121;
  font-size: 18px;
`

export const BannerButton = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 4px;
  border: 1px solid #212121;
  background: transparent;
  color: #212121;
  font-size: 16px;
`
export const BannerRight = styled.div`
  align-self: flex-start;
`
export const BannerCloseBtn = styled.button`
  background: transparent;
  border: none;
`
export const SearchBoxContainer = styled.div`
  width: 400px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #cbd5e1;
  margin-left: 60px;
  margin-top: 10px;
  border-radius: 5px;
`
export const SearchBox = styled.input`
  width: 320px;
  height: 42px;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  color: #424242;
  border: none;
  outline: none;
`
export const SearchIcon = styled.button`
  width: 80px;
  height: 42px;
  background-color: #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-left: 1px solid #cbd5e1;
  outline: none;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  align-self: center;
  margin-top: 100px;
`
export const VideoList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-top: 20px;
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
  background-color: ${props => props.bgColor};
`
export const NoSearchResultsImage = styled.img`
  width: 400px;
`
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 20px;
`
export const NoVideoDesc = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 18px;
`
export const RetryButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #4f46e5;
  color: #ffffff;
  border: 0;
  border-radius: 5px;
`
export const SideBarContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
