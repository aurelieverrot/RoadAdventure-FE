import React from 'react';
import { List } from 'semantic-ui-react';

const TripList = (props) => {

  return(
    <List>
      <List.Item>
          {props.cards}
      </List.Item>
    </List>
    
  )
}

export default TripList;