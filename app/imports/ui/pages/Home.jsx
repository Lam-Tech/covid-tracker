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
    console.log(this.props.userStatus);
    return (
      <Container textAlign='center' fluid>
        <Header as='h1'>Hello</Header>
        <p>How are you feeling Today?</p>
        <Condition statuses={this.props.userStatus}/>
      </Container>
    );
  }

}

Home.propTypes = {
  userStatus: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe(Statuses.userPublicationName);
  const today = new Date().toLocaleString().split(',')[0];
  return {
    userStatus: Statuses.collection.find({ owner: Meteor.userId(), date: today }).fetch(),
    ready: subscription.ready(),
  };
})(Home);
