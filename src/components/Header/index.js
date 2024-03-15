import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoMoon} from 'react-icons/io5'
import {AiOutlineClose} from 'react-icons/ai'
import {BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavBar,
  LogoLink,
  LogoContainer,
  Logo,
  MenuContainer,
  MenuList,
  ListItem,
  ThemeButton,
  ProfileImage,
  ModalContainer,
  ModalMsg,
  LogoutButton,
  LogoutIconButton,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  MenuButton,
  SideBarContainer,
  SideBarClose,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#3b82f6'
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const bgColor = isDarkTheme ? '#231f20' : '#f8fafc'
      const logoImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onChangeTheme = () => {
        toggleTheme()
      }
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavBar bgColor={bgColor}>
          <LogoLink to="/">
            <LogoContainer>
              <Logo src={logoImageUrl} alt="website logo" />
            </LogoContainer>
          </LogoLink>
          <MenuContainer>
            <MenuList>
              <ListItem>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onChangeTheme}
                >
                  {isDarkTheme ? (
                    <BsBrightnessHigh color="#ffffff" size={30} />
                  ) : (
                    <IoMoon size={30} />
                  )}
                </ThemeButton>
              </ListItem>
              <ListItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <MenuButton type="button" color={color}>
                      <GiHamburgerMenu size={25} color={textColor} />
                    </MenuButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <SideBarContainer bgColor={bgColor}>
                      <SideBarClose type="button" onClick={() => close()}>
                        <AiOutlineClose size={25} color={textColor} />
                      </SideBarClose>
                      <SideBar />
                    </SideBarContainer>
                  )}
                </Popup>
              </ListItem>
              <ListItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" color={color} bgColor={bgColor}>
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ModalContainer bgColor={bgColor}>
                      <ModalMsg color={color}>
                        Are you sure, you want to logout?
                      </ModalMsg>
                      <ButtonsContainer>
                        <CloseButton type="button" onClick={() => close()}>
                          Cancel
                        </CloseButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </ModalContainer>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <LogoutIconButton
                      type="button"
                      color={color}
                      bgColor={bgColor}
                    >
                      <FiLogOut size={30} color={color} />
                    </LogoutIconButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ModalContainer bgColor={bgColor}>
                      <ModalMsg color={color}>
                        Are you sure, you want to logout?
                      </ModalMsg>
                      <ButtonsContainer>
                        <CloseButton type="button" onClick={() => close()}>
                          Cancel
                        </CloseButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </ModalContainer>
                  )}
                </Popup>
              </ListItem>
            </MenuList>
          </MenuContainer>
        </NavBar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
