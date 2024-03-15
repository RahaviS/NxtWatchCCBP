import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  min-height: 100%;
  background-color: ${props => props.bgColor};
`
export const SideMenuList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 100%;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const MenuLink = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  margin: 10px;
  width: 90%;
  padding: 10px;
  background-color: ${props => props.bgColor};
`
export const ContactSection = styled.div`
  margin-top: 100px;
  padding: 10px;
`
export const Text = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 600;
  padding: 20px;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const Image = styled.img`
  width: 50px;
`
