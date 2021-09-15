import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import VaccCard from '../components/VaccCard';

/** A simple static component to render some text for the landing page. */
class Profile extends React.Component {
  render() {
    return (
      <Container textAlign='center' fluid>
        <VaccCard/>
        <Button as={NavLink} exact to="/signout" inverted color='blue'>Sign out</Button>
      </Container>
    );
  }
}

export default Profile;
