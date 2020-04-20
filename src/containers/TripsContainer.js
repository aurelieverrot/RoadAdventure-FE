import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Grid } from 'semantic-ui-react';
import TripApi from '../api/TripApi';
import TripList from '../components/Trip/TripList';
import van from '../images/van.png';
import '../containers/TripsContainer.css'

class TripsContainer extends React.Component {

  state = {
    cards: [], //list of trips I want to display on page
    tripId: '' //this is to store the id of a trip if I want to select one.
  }

  // this takes all the trips form the database, put them in the array
  // cards in the state, and put some content in a card
  componentDidMount() {  
    TripApi.tripIndex()
    .then(res => {
      let cardsDataFromAPI = res.data; // [{},{},{}]
      let cardsInJSX = []; //[<Card/>,<Card/>,<Card/>]
      
      for (let index in cardsDataFromAPI) {
        let tripId = cardsDataFromAPI[index]._id
        cardsInJSX.push(
          <div className="ui basic segment">
            <a key={tripId} href={`/trips/${tripId}`}>
            <div className="ui card horizontal">
              <div className="image">
                <img src={van}/>
              </div>
              <div className="content cardTrip">
                <p className="header">{cardsDataFromAPI[index].title}</p>
              </div>  
              <div className="description tripCard">
                {cardsDataFromAPI[index].shortText}
              </div>
            </div>
            </a>
          </div>
          
          
        )
        this.setState({
          tripId: tripId
        })
      };
      this.setState({
        cards: cardsInJSX
      });
    });
  };

  // Logic to separate the cards array in three, 
  // to have 3 rows of cards in the render

  // let results = {
  //   0: [],
  //   1: [],
  //   2: []
  // }
  
  // for(index in arr) {
  //   results[index % 3].push(arr[index]);
  // }



  render() {
    return(
      <>
        <TripList cards={this.state.cards} />
      </>
    )
  }
}

export default TripsContainer;