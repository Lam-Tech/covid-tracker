import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Modal, Header, Button, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vaccine } from '../../api/vaccine/Vaccine';
import VaccineItem from './VaccineItem';

/** A simple static component to render some text for the landing page. */
class DisplayVaccInfo extends React.Component {
  constructor(props) {
    super(props);
    this.owner = Meteor.user().username;
    this.state = {
      prompt: false,
    };
  }

  render() {
    return (
      <Container>
        <Modal
          onClose={() => this.setState({ prompt: false })}
          onOpen={() => this.setState({ prompt: true })}
          open={this.state.prompt}
          size='large'
          trigger={<Button size='big' inverted color='red'>Display Vaccine Info</Button>}
        >
          <Header size='huge' textAlign='center'>
              Vaccine Info
          </Header>
          <Modal.Content>
            <div>{this.props.vaccine.map((vaccine) => <VaccineItem key={vaccine._id} vaccine={vaccine} />)}</div>
          </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>
      </Container>
    );
  }
}

DisplayVaccInfo.propTypes = {
  vaccine: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe(Vaccine.userPublicationName);
  const ready = subscription.ready();
  const vaccine = Vaccine.collection.find({}).fetch();
  return {
    vaccine,
    ready,
  };
})(DisplayVaccInfo);
