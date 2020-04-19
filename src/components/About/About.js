import React from 'react';
import { Card, Icon, Image, Header, Grid, Divider } from 'semantic-ui-react';
import './About.css';
import pic from '../../images/pic_square.jpg';

const About = () => {
  console.log(pic)
  return(
    <main>
      <Header as='h1'>About Road Adventure</Header>
      <Grid centered columns={2} width={8}>
        <Grid.Column className="column-left" textAlign="justified">
          <p id="road-text">I love travelling, and I love Road Trips!
            People often ask me what was my last trip, what was my itinary, 
            what needs to be seen at each stop...<br/>
            So I had the idea of this website, where you can share your 
            experience, help others, and also find inspiration for your 
            next Road Trip! The website is a work in progress, many other 
            features will be added in the next few months, so keep coming, 
            and feed the database with your discoveries.<br/>
            <br/>
            Have Fun and Drive Safe!<br/>
            - Aurelie -</p>
        </Grid.Column>
        <Grid.Column className="column-right">
          <Card className="aboutPage">
            <Grid centered columns={2} >
              <Grid.Column className="columnInCard">
                <Image src={pic} ui={false} className="pic"/>
              </Grid.Column>
              <Grid.Column className="columnInCard">
                <Card.Content>
                  <Card.Header as='h2'>Aurelie Verrot</Card.Header>
                  
                  <Card.Description textAlign="justified">
                    I am Software Engineer in San Francisco.<br/>
                    After 12+ years in Quality, Safety, and Environmental Management, 
                    and having settled my expatriation in the US, I started to learn 
                    software development. In 2019 I finally decided to change my career
                    path and enrolled myself in the Software Engineering Immersive bootcamp 
                    at General Assembly in San Francisco.<br/>
                    <i className="us flag"></i><i className="fr flag"></i>
                  </Card.Description>
                </Card.Content>
                <Divider />
                <Card.Content extra>
                  <a href="https://www.linkedin.com/in/aurelieverrot/" target="_blank" rel="noopener noreferrer">
                    <Icon name='linkedin' to="https://www.linkedin.com/in/aurelieverrot/"/>
                  </a>
                  <a href="https://github.com/aurelieverrot" target="_blank" rel="noopener noreferrer">
                    <Icon name='github' to="https://github.com/aurelieverrot"/> 
                  </a>
                  <a href="https://twitter.com/LiliVerrot" target="_blank" rel="noopener noreferrer">
                    <Icon name='twitter' to="https://twitter.com/LiliVerrot"/>
                  </a>
                </Card.Content>
              </Grid.Column>
            </Grid>
          </Card>
        </Grid.Column>
      </Grid>
    </main>
  )
}

export default About;