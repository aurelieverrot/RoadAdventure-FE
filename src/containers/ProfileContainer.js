import React from 'react';

class ProfileContainer extends React.Component {

  state = {
    username: 'hardcodedName'
  }

  render() {
    return(
      <>
        <h1>Welcome {this.state.username}</h1>

      </>
    )
  }
}

export default ProfileContainer;