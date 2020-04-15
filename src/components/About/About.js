import React from 'react';
import { Card, Icon, Image, Header } from 'semantic-ui-react';
import './About.css';

const About = () => {
  return(
    <main>
      <Header as='h1'>About the developer</Header>
      <Card>
        <Image src='../../images/pic_square.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Aurelie Verrot</Card.Header>
          <Card.Meta>
            <span className='date'>San Francisco</span>
          </Card.Meta>
          <Card.Description>
            Aurelie is a Software Engineer in San Francisco.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://linkedin.com/aurelieverrot" target="_blank" rel="noopener noreferrer">
            <Icon name='linkedin' to="https://linkedin.com/aurelieverrot"/>
          </a>
          <a href="https://github.com/aurelieverrot" target="_blank" rel="noopener noreferrer">
            <Icon name='github' to="https://github.com/aurelieverrot"/> 
          </a>
          <a href="https://twitter.com/LiliVerrot" target="_blank" rel="noopener noreferrer">
            <Icon name='twitter' to="https://twitter.com/LiliVerrot"/>
          </a>
        </Card.Content>
      </Card>

    </main>
  )
}

export default About;