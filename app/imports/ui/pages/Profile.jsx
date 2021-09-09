import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Profile extends React.Component {
  render() {
    return (
      <Container textAlign='center' fluid>
        <Header as='h1'>In progress</Header>
        <Button as={NavLink} exact to="/signout" inverted color='blue'>Sign out</Button>
      </Container>
    );
  }
}

export default Profile;
