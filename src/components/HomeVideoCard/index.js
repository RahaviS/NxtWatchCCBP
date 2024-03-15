import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoListItem,
  Thumbnail,
  VideoDetailsSection,
  ChannelLogo,
  VideoDetails,
  VdoTitle,
  ChannelName,
  ViewsTimeSection,
  ViewCount,
  PublishedAt,
  VideoLink,
} from './styledComponents'

const HomeVideoCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoData} = props
      const {name, profileImageUrl, publishedAt, id} = videoData
      const {thumbnailUrl, title, viewCount} = videoData
      const publishedTime = formatDistanceToNow(new Date(publishedAt)).split(
        ' ',
      )
      const formattedTime = publishedTime.slice(1, 3).join(' ')

      const titleColor = isDarkTheme ? '#f9f9f9' : '#424242'

      return (
        <VideoLink to={`/videos/${id}`}>
          <VideoListItem>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsSection>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <VideoDetails>
                <VdoTitle color={titleColor}>{title}</VdoTitle>
                <ChannelName>{name}</ChannelName>
                <ViewsTimeSection>
                  <ViewCount>{`${viewCount} Views .`}</ViewCount>
                  <PublishedAt>{`${formattedTime} ago`}</PublishedAt>
                </ViewsTimeSection>
              </VideoDetails>
            </VideoDetailsSection>
          </VideoListItem>
        </VideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default HomeVideoCard
