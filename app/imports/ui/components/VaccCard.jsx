import React from 'react';
import { Button, Icon, Image, Modal, Container, Header, ModalContent, Segment } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import {
  AutoForm,
  ErrorsField,
  HiddenField,
  NumField,
  SelectField,
  SubmitField,
  TextField,
} from 'uniforms-semantic';
import { Vaccine } from '../../api/vaccine/Vaccine';

const bridge = new SimpleSchema2Bridge(Vaccine.schema);

/** A simple static component to render some text for the landing page. */
class VaccCard extends React.Component {
  constructor(props) {
    super(props);
    this.owner = Meteor.user().username;
    this.state = {
      prompt: false,
    };
  }

  submit(data) {
    const owner = this.owner;
    const { vaccineType, dose1Lot, dose1Date, dose1Site, dose2Lot, dose2Date, dose2Site } = data;

    if (Vaccine.collection.findOne({ owner }) === undefined) {
      Vaccine.collection.insert({ owner, vaccineType, dose1Lot, dose1Date, dose1Site, dose2Lot, dose2Date, dose2Site },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Vaccine card created successfully', 'success');
          }
        });
    } else {
      const _id = Vaccine.collection.findOne({ owner })._id;
      Vaccine.collection.update(_id, { $set: { vaccineType, dose1Lot, dose1Date, dose1Site, dose2Lot, dose2Date, dose2Site } },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Vaccine card updated successfully', 'success');
          }
        });
    }
    this.setState({ prompt: false });
  }

  render() {
    return (
      <Container>
        <Modal
          onClose={() => this.setState({ prompt: false })}
          onOpen={() => this.setState({ prompt: true })}
          open={this.state.prompt}
          size='large'
          trigger={<Button color='green' inverted>Create/Edit Vaccine Card</Button>}
        >
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)}>
            <Segment>
              <Modal.Header size='huge'>
              Fill in the Vaccine information
              </Modal.Header>
              <ModalContent image>
                <Image size='large' src='https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg'wrapped/>
                <Modal.Description>
                  <SelectField
                    name = "vaccineType"
                    label='Vaccine Type'
                    placeholder='VaccineType'
                  />
                  <Header>First Does</Header>
                  <NumField
                    name = "dose1Lot"
                    decimal={false}
                    label='Lot Number'
                    placeholder='1234567'
                  />
                  <NumField
                    name = "dose1Date"
                    label='Data Received'
                    placeholder='mm/dd/yyyy'
                  />
                  <TextField
                    name = "dose1Site"
                    label='Clinic Site'
                    placeholder='queens,etc'
                  />
                  <Header>Second Does</Header>
                  <NumField
                    name = "dose2Lot"
                    decimal={false}
                    label='Lot Number'
                    placeholder='1234567'
                  />
                  <NumField
                    name = "dose2Date"
                    label='Data Received'
                    placeholder='mm/dd/yyyy'
                  />
                  <TextField
                    name = "dose2Site"
                    label='Clinic Site'
                    placeholder='queens,etc'
                  />
                </Modal.Description>
              </ModalContent>
              <Modal.Actions>
                <Button color='red' inverted onClick={() => this.setState({ prompt: false })}>
                  <Icon name='remove'/> Cancel
                </Button>
                <SubmitField value="Submit"/>
                <ErrorsField/>
                <HiddenField name="owner" value={this.owner}/>
              </Modal.Actions>
            </Segment>
          </AutoForm>
        </Modal>
      </Container>
    );
  }
}

// Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use.
VaccCard.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vaccine.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  return {
    ready,
  };
})(VaccCard);
