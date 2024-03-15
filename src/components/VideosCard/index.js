import {formatDistanceToNow} from 'date-fns'
import {
  ListItem,
  ThumbnailImg,
  Contents,
  VdoTitle,
  ChannelName,
  ViewsTimeSection,
  ViewCount,
  PublishedAt,
  VideoLink,
} from './styledComponents'

const VideosCard = props => {
  const {videoDetails, isDark} = props
  const {name, publishedAt, thumbnailUrl, title, viewCount, id} = videoDetails
  const publishedTime = formatDistanceToNow(new Date(publishedAt)).split(' ')
  const formattedTime = publishedTime.slice(1, 3).join(' ')
  const titleColor = isDark ? '#f8fafc' : '#181818'
  const textColor = isDark ? '#909090' : '#64748b'
  return (
    <VideoLink to={`/videos/${id}`}>
      <ListItem>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <Contents>
          <VdoTitle color={titleColor}>{title}</VdoTitle>
          <ChannelName color={textColor}>{name}</ChannelName>
          <ViewsTimeSection>
            <ViewCount color={textColor}>{`${viewCount} Views .`}</ViewCount>
            <PublishedAt
              color={textColor}
            >{`${formattedTime} ago`}</PublishedAt>
          </ViewsTimeSection>
        </Contents>
      </ListItem>
    </VideoLink>
  )
}
export default VideosCard
