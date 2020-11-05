import { FaBars } from 'react-icons/fa';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Annika</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/discover'>Lessons</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/services'>Booking</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/signup'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
