import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sticky } from 'semantic-ui-react';
import './Header.css';

class NavBar extends React.Component {
  
  render() {
    let leftLinks = [];
    let rightLinks = [];
  // not Logged
    let notLoggedLabels = ['Home', 'About', 'Trips', 'Signup / Login'];
    let notLoggedLeftLinks = {
      '/': "",
      '/about': "",
      '/trips': ""
    };
    let notLoggedRightLinks = { 
      '/login': "",
    };
  // Logged
    let loggedLabels = ['Home', 'About', 'Trips', 'My Profile', 'Logout'];
    let loggedLeftLinks = { 
      '/': "",
      '/about': "",
      '/trips': "",
      '/profile': "", 
    };
    let loggedRightLinks = { 
      '/': "",
    };
    
  // if a user is logged display this buttons, else display other buttons
    if (this.props.user === null) {
      //if no user loggedin
      let idx = 0;
      for (let key in notLoggedLeftLinks) {
        leftLinks.push(<Menu.Item><Link to={ key } key={ idx } className={ notLoggedLeftLinks[key] }>{notLoggedLabels[idx]}</Link></Menu.Item>);
        idx += 1;
      };
      for (let key in notLoggedRightLinks) {
        rightLinks.push(<Menu.Item position={'right'}><Link to={ key } key={ idx } className={ notLoggedRightLinks[key] }>{notLoggedLabels[idx]}</Link></Menu.Item>);
        idx += 1;
      };
    } else {
      // a user is loggedin
      let idx = 0;
      for (let key in loggedLeftLinks) {
        leftLinks.push(<Menu.Item><Link to={ key } key={ idx } className={ loggedLeftLinks[key] }>{loggedLabels[idx]}</Link></Menu.Item>);
        idx += 1;
      };

      for (let key in loggedRightLinks) {
        rightLinks.push(<Menu.Item position={'right'}><Link onClick={this.props.logout} to={ key } key={ idx } className={ loggedRightLinks[key] }>{loggedLabels[idx]}</Link></Menu.Item>);
        idx += 1;
      };
    }

    return(
      <div>
        <Sticky>
          <Menu inverted style={{ margin: 0 }}>
            {leftLinks}
            {rightLinks}
          </Menu>
        </Sticky>
      </div>
    )
  }
}

export default NavBar;
