import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react';
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
          // <Link key={tripId} to={{pathname: `/trips/${tripId}`}}>
          //   <Card>
          //     <Card.Content>
          //       <Card.Header>{cardsDataFromAPI[index].title}</Card.Header>
          //       <Card.Description>
          //         {cardsDataFromAPI[index].shortText}
          //       </Card.Description>
          //     </Card.Content>
          //   </Card>
          // </Link>
          
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

  render() {
    return(
      <>
        <TripList cards={this.state.cards} />
      </>
    )
  }
}

export default TripsContainer;