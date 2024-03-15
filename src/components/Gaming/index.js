import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingVideosContainer,
  GamingContents,
  LoaderContainer,
  TitleContainer,
  Text,
  GamingVideoList,
  GameLink,
  ListItem,
  ThumbnailImg,
  GameTitle,
  Views,
  SideBarContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiConstants.success,
        gamingVideoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderGamingVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {gamingVideoList} = this.state
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = isDarkTheme ? '#909090' : '#64748b'
        const titleColor = isDarkTheme ? '#f8fafc' : '#181818'
        return (
          <>
            <TitleContainer bgColor={bgColor} data-testid="banner">
              <SiYoutubegaming size={35} color=" #ff0000" />
              <Text color={titleColor}>Gaming</Text>
            </TitleContainer>
            <GamingVideoList bgColor={bgColor} data-testid="gaming">
              {gamingVideoList.map(eachVideo => (
                <GameLink to={`/videos/${eachVideo.id}`}>
                  <ListItem key={eachVideo.id}>
                    <ThumbnailImg
                      src={eachVideo.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <GameTitle color={titleColor}>{eachVideo.title}</GameTitle>
                    <Views
                      color={textColor}
                    >{`${eachVideo.viewCount} Watching Worlwide`}</Views>
                  </ListItem>
                </GameLink>
              ))}
            </GamingVideoList>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderChoices = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderGamingVideos()
      case apiConstants.inProgress:
        return this.renderLoadingView()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <GamingContents>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <GamingVideosContainer>{this.renderChoices()}</GamingVideosContainer>
        </GamingContents>
      </>
    )
  }
}
export default Gaming
