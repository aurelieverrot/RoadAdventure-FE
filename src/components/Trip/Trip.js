import React from 'react';
import TripApi from '../../api/TripApi';
import UserApi from '../../api/UserApi';
import { Button, Grid, Divider } from 'semantic-ui-react';
import { Redirect, withRouter } from 'react-router-dom';
import './Trip.css';

class Trip extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    title: '',
    status: '',
    shortText: '',
    user: '',
    tripUserId: ''
  }

  componentDidMount() {
    let tripId = window.location.pathname.split('/')[2]
    TripApi.tripShow(tripId)
      .then(res => {
        // updates state with TripApi call
        if (res.data.status === true) {
          this.setState({
            status: 'on the road'
          })
        } else {
          this.setState({
            status: 'This Road Trip has ended'
        })}
        this.setState({
          title: res.data.title,
          shortText: res.data.shortText
        })
        // updates state with username using UserApi call, because Trip only knows User id
        UserApi.show(res.data.user)
        .then(res => {
          this.setState({
            user: res.data.username, 
            tripUserId: res.data._id
          })
        })
    })
  }

  deleteTrip = () => {
    let tripId = window.location.pathname.split('/')[2]
    TripApi.tripDelete(tripId)
    .then(res => {
      console.log('trip deleted')
      this.props.history.push('/profile')
    })
  }

  render() {
    let extraContent = []
    if (this.props.id === this.state.tripUserId) {
      extraContent.push(
        <>
          <Button onClick={this.deleteTrip}>Delete this trip</Button>
        </>
      )
    }
      
    return (
      <div className="big-div-trip">
        <h1>{this.state.title}</h1>
        <h3 className="description-trip">{this.state.shortText}</h3>
        <Grid columns={2} relaxed='very'>
          <Grid.Column >
            <h3>Created by: {this.state.user}</h3>
            <h3>Status: {this.state.status}</h3>
          </Grid.Column>
          <Grid.Column >
            {extraContent}
          </Grid.Column>
        </Grid>
        <Divider className="stopList-divider"/>
        <h2 className="stopsList-title">List of stops</h2>
      </div>
    )
  }
}

export default withRouter(Trip);