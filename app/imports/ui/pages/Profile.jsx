import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Container, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import VaccCard from '../components/VaccCard';
import DisplayVaccInfo from '../components/DisplayVaccInfo';

/** A simple static component to render some text for the landing page. */
class Profile extends React.Component {
  render() {
    return (
      <Container textAlign='center'>
        <Header as='h2'>{Meteor.user().username}</Header>
        <DisplayVaccInfo/>
        <br></br><VaccCard/><br></br>
        <Button size={'big'} as={NavLink} activeClassName="" exact to="/signout" color='red' inverted>Sign Out</Button>
      </Container>
    );
  }
}

export default Profile;
