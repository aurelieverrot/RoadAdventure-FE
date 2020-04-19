import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Divider, Card, Grid } from 'semantic-ui-react';
import TripApi from '../../api/TripApi';

class Home extends React.Component {
  
  state = {
    cards: []
  }

  componentDidMount() {  
    TripApi.tripIndex()
    .then(res => {
      let cardsDataFromAPI = res.data; 

      let randomCards = []
      while (randomCards.length < 3) {
        randomCards.push(cardsDataFromAPI[Math.floor(Math.random()*cardsDataFromAPI.length)])
      }
      console.log(randomCards)

      let cardsInJSX = []; 
      for (let index in randomCards) {
        let tripId = randomCards[index]._id
        cardsInJSX.push(
          <Link key={tripId} to={{pathname: `/trips/${tripId}`}}>
            <Card>
              <Card.Content>
                <Card.Header>{randomCards[index].title}</Card.Header>
                <Card.Description>
                  {randomCards[index].shortText}
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>
        )
      };
      this.setState({
        cards: cardsInJSX
      });
    });
  };

  render() {
    return(
      <main>
        <div className="background">Photo background here</div>
        <Divider />
        <div className="browse-trips">
          <h1>Browse Trips</h1>    
        </div>
        <div className="browse-trips">
          <Grid columns={3} relaxed='very'>
            <Card.Group>
              {this.state.cards}
            </Card.Group>
          </Grid>
        </div>
      </main>
    )}
}

export default Home;