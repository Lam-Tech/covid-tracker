import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Container, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import VaccCard from '../components/VaccCard';

/** A simple static component to render some text for the landing page. */
class Profile extends React.Component {
  render() {
    return (
      <Container textAlign='center'>
        <Header as='h2'>{Meteor.user().username}</Header>
        <Button color='green' inverted>User Profile</Button>
        <br></br><br></br><br></br><VaccCard/><br></br><br></br>
        <Button as={NavLink} activeClassName="" exact to="/signout" color='red' inverted>Sign Out</Button>
      </Container>
    );
  }
}

export default Profile;
