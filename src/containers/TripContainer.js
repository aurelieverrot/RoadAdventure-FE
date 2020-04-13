import React from 'react';
import { Card } from 'semantic-ui-react';
import TripApi from '../api/TripApi';
import TripList from '../components/Trip/TripList';

class TripContainer extends React.Component {

  state = {
    cards: []
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
      <>
        <TripList cards={this.state.cards} />
        {/* <Card.Group>
          {this.state.cards}
        </Card.Group> */}
      </>
    )
  }
}

export default TripContainer;