import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import VideosCard from '../VideosCard'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingContents,
  TrendingVideosContainer,
  LoaderContainer,
  TitleContainer,
  Text,
  TrendingVideosList,
  SideBarContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {apiStatus: apiConstants.initial, trendingVideoList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiConstants.success,
        trendingVideoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderTrendingVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {trendingVideoList} = this.state
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const titleColor = isDarkTheme ? '#f8fafc' : '#181818'
        return (
          <>
            <TitleContainer bgColor={bgColor} data-testid="banner">
              <HiFire size={35} color=" #ff0000" />
              <Text color={titleColor}>Trending</Text>
            </TitleContainer>
            <TrendingVideosList bgColor={bgColor} data-testid="trending">
              {trendingVideoList.map(eachVideo => (
                <VideosCard
                  videoDetails={eachVideo}
                  key={eachVideo.id}
                  isDark={isDarkTheme}
                />
              ))}
            </TrendingVideosList>
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
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderChoices = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderTrendingVideos()
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
        <TrendingContents>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <TrendingVideosContainer>
            {this.renderChoices()}
          </TrendingVideosContainer>
        </TrendingContents>
      </>
    )
  }
}
export default Trending
