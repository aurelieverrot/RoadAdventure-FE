import React from 'react';
import ProfileForm from './ProfileForm';

class Profile extends React.Component {

  state = {
    username: '',
    email: '',
    trips: []
  }

  render() {
    return(
      <ProfileForm />
      

    )
  }

}

export default Profile;