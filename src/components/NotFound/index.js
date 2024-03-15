import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundContents,
  SideBarContainer,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const textColor = isDarkTheme ? '#909090' : '#64748b'
      const titleColor = isDarkTheme ? '#f8fafc' : '#181818'
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundContents>
            <SideBarContainer>
              <SideBar />
            </SideBarContainer>
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImg src={imgUrl} alt="not found" />
              <NotFoundTitle color={titleColor}>Page Not Found</NotFoundTitle>
              <NotFoundDesc color={textColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundDesc>
            </NotFoundContainer>
          </NotFoundContents>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFound
