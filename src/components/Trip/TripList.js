import React from 'react';
import { List } from 'semantic-ui-react';

const TripList = (props) => {

  return(
    <List>
      
      <List.Item key={props.cards._id}>
          {props.cards}
          
      </List.Item>
      
    </List>
  )
}

export default TripList;