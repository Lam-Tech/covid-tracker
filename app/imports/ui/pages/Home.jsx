import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Condition from '../components/Condition';
import { Statuses } from '../../api/status/Status';

/** A simple static component to render some text for the landing page. */
class Home extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
      <Container textAlign='center' fluid>
        <Header as='h1'>Hello!</Header>
        <Header as='h2'>{Meteor.user().username}</Header>
        <Header as='h2'>How are you feeling Today?</Header>
        <Condition/>
      </Container>
    );
  }
}

Home.propTypes = {
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe(Statuses.userPublicationName);
  return {
    ready: subscription.ready(),
  };
})(Home);
