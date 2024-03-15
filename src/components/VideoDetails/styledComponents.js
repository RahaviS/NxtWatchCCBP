import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`
export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
export const LoaderContainer = styled.div`
  align-self: center;
  margin-top: 100px;
`
export const VideoDetail = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
`
export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ViewsTimeSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const PublishedAt = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const CustomButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Text = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 600;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  color: ${props => props.color};
`
export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const ProfileImage = styled.img`
  align-self: flex-start;
  width: 50px;
  margin: 20px;
`
export const VideoAboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const SubscribersCount = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const SideBarContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
