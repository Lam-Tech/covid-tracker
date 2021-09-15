import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Container textAlign='center' fluid className='landing'>
        <Header as='h1'>Help Stop Covid</Header>
        <p>by checking in for covid status daily</p>
        <Button.Group size='huge'>
          <Button as={NavLink} exact to="/signup" inverted color='green'>Sign In</Button>
          <Button.Or/>
          <Button as={NavLink} exact to="/signin" inverted color='red'>Log In</Button>
        </Button.Group>
      </Container>
    );
  }
}

export default Landing;
