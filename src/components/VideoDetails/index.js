import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoDetailsContainer,
  Contents,
  LoaderContainer,
  VideoDetail,
  VideoTitle,
  TopSection,
  ViewsTimeSection,
  ViewCount,
  PublishedAt,
  ButtonSection,
  CustomButton,
  Text,
  HorizontalLine,
  BottomSection,
  ProfileImage,
  VideoAboutSection,
  ChannelName,
  SubscribersCount,
  Description,
  SideBarContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videoData: [],
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const videoDetails = fetchedData.video_details
      const updatedData = {
        name: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
        subscriberCount: videoDetails.channel.subscriber_count,
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({videoData: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoDetailView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, addVideos, savedVideos} = value
        const titleColor = isDarkTheme ? '#f9f9f9' : '#212121'
        const color = isDarkTheme ? '#d7dfe9' : '#475569'
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const {videoData, isDisliked, isLiked} = this.state
        const {name, profileImageUrl, subscriberCount, description} = videoData
        const {publishedAt, title, videoUrl, viewCount, id} = videoData
        const publishedTime = formatDistanceToNow(new Date(publishedAt)).split(
          ' ',
        )
        const formattedTime = publishedTime.slice(1, 3).join(' ')
        const index = savedVideos.findIndex(each => each.id === id)
        let isSaved
        if (index !== -1) {
          isSaved = true
        } else {
          isSaved = false
        }
        const saveVideo = () => {
          addVideos(videoData)
        }
        const saveIconColor = isSaved ? '#2563eb' : '#64748b'

        return (
          <VideoDetail bgColor={bgColor} data-testid="videoItemDetails">
            <ReactPlayer url={videoUrl} controls width="100%" />
            <VideoTitle color={titleColor}>{title}</VideoTitle>
            <TopSection>
              <ViewsTimeSection>
                <ViewCount color={color}>{`${viewCount} Views .`}</ViewCount>
                <PublishedAt
                  color={color}
                >{`${formattedTime} ago`}</PublishedAt>
              </ViewsTimeSection>
              <ButtonSection>
                <CustomButton type="button" onClick={this.onClickLike}>
                  <AiOutlineLike
                    size={25}
                    color={isLiked ? '#2563eb' : '#64748b'}
                  />
                  <Text color={isLiked ? '#2563eb' : '#64748b'}>Like</Text>
                </CustomButton>
                <CustomButton type="button" onClick={this.onClickDislike}>
                  <AiOutlineDislike
                    size={25}
                    color={isDisliked ? '#2563eb' : '#64748b'}
                  />
                  <Text color={isDisliked ? '#2563eb' : '#64748b'}>
                    Dislike
                  </Text>
                </CustomButton>
                <CustomButton type="button" onClick={saveVideo}>
                  <BiListPlus size={25} color={saveIconColor} />
                  <Text color={saveIconColor}>
                    {isSaved ? 'Saved' : 'Save'}
                  </Text>
                </CustomButton>
              </ButtonSection>
            </TopSection>
            <HorizontalLine />
            <BottomSection>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <VideoAboutSection>
                <ChannelName color={titleColor}>{name}</ChannelName>
                <SubscribersCount
                  color={color}
                >{`${subscriberCount} subscribers`}</SubscribersCount>
                <Description color={color}>{description}</Description>
              </VideoAboutSection>
            </BottomSection>
          </VideoDetail>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderChoices = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderVideoDetailView()
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
        <Contents>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <VideoDetailsContainer>{this.renderChoices()}</VideoDetailsContainer>
        </Contents>
      </>
    )
  }
}
export default VideoDetails
