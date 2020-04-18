import React from 'react';
import UserApi from '../api/UserApi';
import TripApi from '../api/TripApi';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ProfileTripList from '../components/Profile/ProfileTripList';
import ProfileForm from '../components/Profile/ProfileForm';

class ProfileContainer extends React.Component {

  state = {
    trips: [],
    user: {

    }
  }


  componentDidMount() {
    // selects only the list of trips from the logged User
    TripApi.tripIndex()
    .then(res => {
      let userTrips = res.data.filter((trip) => {
        return trip.user === this.props.id
      })
      let tripCards = [];
      for (let i in userTrips) {
        let tripId = userTrips[i]._id
        tripCards.push(
          <>
          <Link key={tripId} to={{pathname: `/trips/${tripId}`}}>
            <Card>
              <Card.Content>
                <Card.Header>{userTrips[i].title}</Card.Header>
                <Card.Description>
                  {userTrips[i].shortText}
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>
          </>
        )
      }
      this.setState({
        trips: tripCards
      })
    })
    // finds User info for ProfileFrom
    UserApi.show(this.props.id)
    .then(res => {
      console.log(res.data)
      this.setState({
        user: res.data
      })
    })
  }

  updateList = () => {
    TripApi.tripIndex()
    .then(res => {
      let userTrips = res.data.filter((trip) => {
        return trip.user === this.props.id
      })
      let tripCards = [];
      for (let i in userTrips) {
        let tripId = userTrips[i]._id
        tripCards.push(
          <>
          <Link key={tripId} to={{pathname: `/trips/${tripId}`}}>
            <Card>
              <Card.Content>
                <Card.Header>{userTrips[i].title}</Card.Header>
                <Card.Description>
                  {userTrips[i].shortText}
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>
          </>
        )
      }
      this.setState({
        trips: tripCards
      })
    })
  }



  render() {
    return(
      <>
        <h1>Welcome {this.props.user}</h1>
        <Grid columns={2} relaxed="very">
          <Grid.Column >
            <ProfileForm user={this.state.user}/>
          </Grid.Column >
          <Grid.Column >
            <ProfileTripList user={this.state.user} trips={this.state.trips} updateList={this.updateList}/>
          </Grid.Column >
        </Grid>
      </>
    )
  }
}

export default ProfileContainer;