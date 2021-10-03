import React from 'react';
import { Button, Icon, Image, Modal, Container, Header, ModalContent, Segment } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Vaccine } from '../../api/vaccine/Vaccine';

class UserProfile extends React.Component {
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
          trigger={<Button color='green' inverted>User Profile</Button>}
        >
          <segment>
            <Modal.Header size='huge'>
              User information
            </Modal.Header>

          </segment>

        </Modal>
      </Container>

    );
  }
}

UserProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vaccine.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  return {
    ready,
  };
})(UserProfile);
