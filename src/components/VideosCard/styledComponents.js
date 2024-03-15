import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`
export const ThumbnailImg = styled.img`
  width: 200px;
  margin-right: 20px;
`
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const VdoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const ViewsTimeSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const PublishedAt = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
