import React from 'react';
import './Home.css';
import { Divider, Card } from 'semantic-ui-react';

const Home = () => {
  return(
    <main>
      <div className="background">Photo background here</div>
      <Divider />
      <div className="browse-trips">
        <h1>Browse Trips</h1>    
      </div>
      <div className="browse-trips">
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Road to Morro Bay</Card.Header>
              <Card.Meta>by Lili Verrot</Card.Meta>
              <Card.Description>
                Discover my trip to Morro Bay in 2019
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </main>
  )
}

export default Home;