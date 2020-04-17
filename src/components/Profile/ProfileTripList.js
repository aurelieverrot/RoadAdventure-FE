import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import './Profile.css';


class ProfileTripList extends React.Component {

  state = {
    createTrip: false,
    newTrip: {
      title: '',
      shortText: '',
      status: true
    }
  }  

  toggleNewTrip = () => {
    this.setState({
      createTrip: true
    })
  }

  closeTripForm = () => {
    this.setState({
      createTrip: false
    })
  }

  createNewTrip = () => {
    
  }

  handleCheckedBox = () => {
      this.setState({
        newTrip: {
          status: false
        }
      })
  }

  render() {

    if (this.state.createTrip === false){
      return(
        <>
        <h2>Your Trips</h2>
          <Button onClick={this.toggleNewTrip} className="newtrip"><span>+ </span>Create a New Trip</Button>
          <div className="column">
          {this.props.trips}
          </div>
        </>)
    } else {
      return(
        <>
          <h2>Add a New Trip</h2>
          
          <div className="column">
          <Form className="">
            <Form.Group className="form-column" widths='equal'>
              <Form.Input name='trip-title' fluid label='Title of my trip'/>
              <Form.TextArea name='trip-description' fluid label='Describe briefly your trip'/>
            </Form.Group>
            <Form.Group inline>
              <label>Trip Status: </label>
              <Form.Checkbox 
                label='Check this box if this Road Trip has already ended'
                onClick={this.handleCheckedBox} />
            </Form.Group>
            <Button className="addtrip" onClick={this.createNewTrip}>Create My New Trip!</Button><Button className="closetrip" onClick={this.closeTripForm}>Nevermind! I'll do it later!</Button>
          </Form>
          
          </div>
        </>
      )
    }
    
  }
}



export default ProfileTripList;