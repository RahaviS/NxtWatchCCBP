import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SideNavBar,
  SideMenuList,
  NavLink,
  MenuLink,
  ContactSection,
  Text,
  IconsContainer,
  Image,
} from './styledComponents'

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, updateTab} = value
      const color = isDarkTheme ? '#ffffff' : '#212121'
      const bgColor = isDarkTheme ? '#231f20' : '#f8fafc'
      const activeTabBgColor = isDarkTheme ? '#909090' : '#f1f1f1'

      const onClickHomeTab = () => {
        updateTab('Home')
      }

      const onClickTrendingTab = () => {
        updateTab('Trending')
      }

      const onClickGamingTab = () => {
        updateTab('Gaming')
      }

      const onClickSavedVideosTab = () => {
        updateTab('saved-videos')
      }

      return (
        <SideNavBar bgColor={bgColor}>
          <SideMenuList>
            <NavLink to="/">
              <MenuLink
                color={color}
                bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
                onClick={onClickHomeTab}
              >
                <IoMdHome
                  style={{marginRight: '15px'}}
                  size={30}
                  color={activeTab === 'Home' ? '#ff0000' : 'none'}
                />
                Home
              </MenuLink>
            </NavLink>
            <NavLink to="/trending">
              <MenuLink
                color={color}
                bgColor={activeTab === 'Trending' ? activeTabBgColor : 'none'}
                onClick={onClickTrendingTab}
              >
                <HiFire
                  style={{marginRight: '15px'}}
                  size={30}
                  color={activeTab === 'Trending' ? '#ff0000' : 'none'}
                />
                Trending
              </MenuLink>
            </NavLink>
            <NavLink to="/gaming">
              <MenuLink
                color={color}
                bgColor={activeTab === 'Gaming' ? activeTabBgColor : 'none'}
                onClick={onClickGamingTab}
              >
                <SiYoutubegaming
                  style={{marginRight: '15px'}}
                  size={30}
                  color={activeTab === 'Gaming' ? '#ff0000' : 'none'}
                />
                Gaming
              </MenuLink>
            </NavLink>
            <NavLink to="/saved-videos">
              <MenuLink
                color={color}
                bgColor={
                  activeTab === 'saved-videos' ? activeTabBgColor : 'none'
                }
                onClick={onClickSavedVideosTab}
              >
                <MdPlaylistAdd
                  style={{marginRight: '15px'}}
                  size={30}
                  color={activeTab === 'saved-videos' ? '#ff0000' : 'none'}
                />
                Saved Videos
              </MenuLink>
            </NavLink>
          </SideMenuList>
          <ContactSection>
            <Text color={color}>CONTACT US</Text>
            <IconsContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <Text color={color}>
              Enjoy! Now to see your channels and recommendations!
            </Text>
          </ContactSection>
        </SideNavBar>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default SideBar
