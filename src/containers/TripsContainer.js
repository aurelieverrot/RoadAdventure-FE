import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import TripApi from '../api/TripApi';
import TripList from '../components/Trip/TripList';

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
          <Link key={tripId} to={{pathname: `/trips/${tripId}`}}>
            <Card>
              <Card.Content>
                <Card.Header>{cardsDataFromAPI[index].title}</Card.Header>
                <Card.Meta>by Lili Verrot</Card.Meta>
                <Card.Description>
                  {cardsDataFromAPI[index].shortText}
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>
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

  render() {
    return(
      <>
        <TripList cards={this.state.cards} />
      </>
    )
  }
}

export default TripsContainer;