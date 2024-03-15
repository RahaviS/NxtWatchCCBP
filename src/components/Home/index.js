import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomeBg,
  HomeContents,
  HomeRightPart,
  BannerContainer,
  BannerLeft,
  Image,
  BannerDesc,
  BannerRight,
  BannerButton,
  BannerCloseBtn,
  SearchBoxContainer,
  SearchBox,
  SearchIcon,
  LoaderContainer,
  VideoList,
  NoSearchResultsContainer,
  NoSearchResultsImage,
  NoVideoHeading,
  NoVideoDesc,
  RetryButton,
  SideBarContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    bannerDisplay: 'flex',
    homeVideosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideoItem => ({
        name: eachVideoItem.channel.name,
        profileImageUrl: eachVideoItem.channel.profile_image_url,
        id: eachVideoItem.id,
        publishedAt: eachVideoItem.published_at,
        thumbnailUrl: eachVideoItem.thumbnail_url,
        title: eachVideoItem.title,
        viewCount: eachVideoItem.view_count,
      }))
      this.setState({
        homeVideosList: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  onClickClose = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    this.getVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {homeVideosList} = this.state
        const noOfVideos = homeVideosList.length
        const isVideoPresent = noOfVideos > 0
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const color = isDarkTheme ? '#f9f9f9' : '#181818'

        return isVideoPresent > 0 ? (
          <VideoList bgColor={bgColor} data-testid="Home">
            {homeVideosList.map(eachVideo => (
              <HomeVideoCard videoData={eachVideo} key={eachVideo.id} />
            ))}
          </VideoList>
        ) : (
          <NoSearchResultsContainer bgColor={bgColor}>
            <NoSearchResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading color={color}>
              No Search results found
            </NoVideoHeading>
            <NoVideoDesc>
              Try different key words or remove search filter
            </NoVideoDesc>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </NoSearchResultsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeContents = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideosView()
      case apiConstants.inProgress:
        return this.renderLoadingView()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, searchInput} = this.state
    return (
      <HomeBg>
        <Header />
        <HomeContents>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <HomeRightPart>
            <BannerContainer display={bannerDisplay} data-testid="banner">
              <BannerLeft>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <BannerDesc>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerDesc>
                <BannerButton>GET IT NOW</BannerButton>
              </BannerLeft>
              <BannerRight>
                <BannerCloseBtn onClick={this.onClickClose} data-testid="close">
                  <AiOutlineClose size={25} />
                </BannerCloseBtn>
              </BannerRight>
            </BannerContainer>
            <SearchBoxContainer>
              <SearchBox
                type="search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <SearchIcon
                type="button"
                data-testid="searchButton"
                onClick={this.onClickSearchIcon}
              >
                <AiOutlineSearch size={25} />
              </SearchIcon>
            </SearchBoxContainer>
            {this.renderHomeContents()}
          </HomeRightPart>
        </HomeContents>
      </HomeBg>
    )
  }
}

export default Home
