import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import VideosCard from '../VideosCard'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavedVideosContainer,
  SavedVideoContents,
  TitleContainer,
  Text,
  SavedVideosList,
  NoSavedVideosContainer,
  NoVideoImage,
  NoVideoText,
  NoVideoDesc,
  SideBarContainer,
} from './styledComponents'

const SavedVideos = () => {
  const renderSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = isDarkTheme ? '#909090' : '#64748b'
        const titleColor = isDarkTheme ? '#f8fafc' : '#181818'
        return savedVideos.length > 0 ? (
          <>
            <TitleContainer bgColor={bgColor} data-testid="banner">
              <HiFire size={35} color=" #ff0000" />
              <Text color={titleColor}>Saved Videos</Text>
            </TitleContainer>
            <SavedVideosList bgColor={bgColor} data-testid="savedVideos">
              {savedVideos.map(eachVideo => (
                <VideosCard
                  videoDetails={eachVideo}
                  key={eachVideo.id}
                  isDark={isDarkTheme}
                />
              ))}
            </SavedVideosList>
          </>
        ) : (
          <NoSavedVideosContainer bgColor={bgColor}>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideoText color={titleColor}>No saved videos found</NoVideoText>
            <NoVideoDesc color={textColor}>
              You can save your videos while watching them
            </NoVideoDesc>
          </NoSavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return (
    <>
      <Header />
      <SavedVideoContents>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <SavedVideosContainer>{renderSavedVideos()}</SavedVideosContainer>
      </SavedVideoContents>
    </>
  )
}

export default SavedVideos
