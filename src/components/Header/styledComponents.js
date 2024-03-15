import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.bgColor};
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const LogoContainer = styled.div`
  margin-left: 15px;
`
export const Logo = styled.img`
  width: 120px;
`
export const MenuContainer = styled.div`
  margin-right: 15px;
`
export const MenuList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ListItem = styled.li`
  padding-right: 15px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 100%;
`
export const ProfileImage = styled.img`
  width: 45px;
  margin-right: 15px;
  margin-left: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  width: 350px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
export const ModalMsg = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const LogoutButton = styled.button`
  width: 130px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 600;
  background: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  margin-right: 10px;
  width: 50px;
  border: 0;
  background: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CloseButton = styled.button`
  width: 120px;
  height: 30px;
  background-color: transparent;
  color: #909090;
  border: 1px solid #909090;
  border-radius: 5px;
  margin: 20px;
`
export const ConfirmButton = styled.button`
  width: 120px;
  height: 30px;
  background-color: #3b82f6;
  color: white;
  border: 0;
  border-radius: 5px;
`
export const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: ${props => props.bgColor};
`
export const SideBarClose = styled.button`
  background-color: transparent;
  border: 0;
  align-self: flex-end;
`
