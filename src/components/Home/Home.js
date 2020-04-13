import React from 'react';
import './Home.css';
import { Divider, Card, Grid } from 'semantic-ui-react';
import TripApi from '../../api/TripApi';

class Home extends React.Component {
  
  state = {
    cards: []
  }

  // 1/ create a function: on event click, redirect to page of the trip
  // 2/ in cardsinJSX, set attribute of html to fire the function on click
  onClick() {
    
  }


  componentDidMount() {  
    TripApi.tripIndex()
    .then(res => {
      let cardsDataFromAPI = res.data; // [{},{},{}]
      let cardsInJSX = []; //[<Card/>,<Card/>,<Card/>]
      for (let index in cardsDataFromAPI) {
        cardsInJSX.push(
          <Card>
            <Card.Content>
              <Card.Header>{cardsDataFromAPI[index].title}</Card.Header>
              <Card.Meta>by Lili Verrot</Card.Meta>
              <Card.Description>
                Discover my trip to Morro Bay in 2019
              </Card.Description>
            </Card.Content>
          </Card>
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