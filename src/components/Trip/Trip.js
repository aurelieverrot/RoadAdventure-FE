import React from 'react';
import TripApi from '../../api/TripApi';

class Trip extends React.Component {

  state = {
    title: '',
    status: '',
    shortText: ''
  }

  componentDidMount() {
    
    let tripId = window.location.pathname.split('/')[2]
    TripApi.tripShow(tripId)
      .then(res => {

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
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <h3>Created by:</h3>
        <h3>Status: {this.state.status}</h3>
        <h3>{this.state.shortText}</h3>
        <h2>List of stops</h2>
      </>
    )
  }
  
}

export default Trip;