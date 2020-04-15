import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sticky } from 'semantic-ui-react';
import './Header.css';

const NavBar = (props) => {
  return(
    <div>
      <Sticky>
        <Menu inverted style={{ margin: 0 }}>
          <Menu.Item><Link to="/">Home</Link></Menu.Item>
          <Menu.Item><Link to="/about">About</Link></Menu.Item>
          <Menu.Item><Link to="/trips">Trips</Link></Menu.Item>
          <Menu.Item><Link to="/profile">My Profile</Link></Menu.Item>
          <Menu.Item position='right'><Link to="/login">Signup / Login</Link></Menu.Item>
          <Menu.Item onClick={props.onClick}><Link to ="/">Logout</Link></Menu.Item>
        </Menu>
      </Sticky>
    </div>
  )
}

export default NavBar;
