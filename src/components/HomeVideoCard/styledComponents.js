import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 400px;
`
export const Thumbnail = styled.img`
  width: 260px;
`
export const VideoDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
export const ChannelLogo = styled.img`
  align-self: flex-start;
  width: 50px;
  margin-top: 8px;
  margin-right: 10px;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VdoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #606060;
  margin: 0;
`
export const ViewsTimeSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0;
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #606060;
`
export const PublishedAt = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #606060;
`
