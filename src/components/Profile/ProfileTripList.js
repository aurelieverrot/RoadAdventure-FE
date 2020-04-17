import React from 'react';
import { Button } from 'semantic-ui-react';
import './Profile.css';


const ProfileTripList = (props) => {

  

  
    return(
      <>
      <h2>Your Trips</h2>
        <Button className="newtrip"><span>+ </span>Create a New Trip</Button>
        <div className="column">
        {props.trips}
        </div>
      </>

    )
}



export default ProfileTripList;