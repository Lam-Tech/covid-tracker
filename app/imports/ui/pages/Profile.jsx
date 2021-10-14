import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Container, Header, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import VaccCard from '../components/VaccCard';
import { Vaccine } from '../../api/vaccine/Vaccine';
import DisplayVaccInfo from '../components/DisplayVaccInfo';

/** A simple static component to render some text for the landing page. */
class Profile extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
      <Container textAlign='center'>
        <Header as='h2'>{Meteor.user().username}</Header>
        <DisplayVaccInfo/>
        <br/><VaccCard/><br/>
        <Button size={'big'} as={NavLink} activeClassName="" exact to="/signout" color='red' inverted>Sign Out</Button>
      </Container>
    );
  }
}

Profile.propTypes = {
  ready: PropTypes.bool.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe(Vaccine.userPublicationName);
  return {
    ready: subscription.ready(),
  };
})(Profile);
