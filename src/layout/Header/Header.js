import React from 'react';
import { Menu, Sticky } from 'semantic-ui-react';
import './Header.css';

const NavBar = () => {
  return(
    <div>
      <Sticky>
        <Menu inverted style={{ margin: 0 }}>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>My Profile</Menu.Item>
          <Menu.Item position='right'>Sign Up</Menu.Item>
          <Menu.Item >Login</Menu.Item>
          <Menu.Item >Logout</Menu.Item>
        </Menu>
      </Sticky>
    </div>
  )
}

export default NavBar;
