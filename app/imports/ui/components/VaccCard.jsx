import React from 'react';
import { Button, Icon, Image, Modal, Container, Header, ModalContent, Input, Select } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { Vaccine } from '../../api/stuff/Vaccine';

const options = [
  { key: 'm', text: 'Moderna', value: 'Moderna' },
  { key: 'p', text: 'Pfizer', value: 'Pfizer' },
  { key: 'j', text: 'Johnson Johnson', value: 'Johnson Johnson' },
  { key: 'a', text: 'AstraZeneca', value: 'AstraZeneca' },
  { key: 'c', text: 'Other', value: 'Other' },
];

/** A simple static component to render some text for the landing page. */
class VaccCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: false,
      name: this.name,
      vaccineType: this.vaccineType,
      dose1Lot: this.dose1Lot,
      dose1Date: this.dose1Date,
      does1Site: this.dose1Site,
      dose2Lot: this.dose2Lot,
      dose2Date: this.dose2Date,
      does2Site: this.dose2Site,
    };
  }

  handleChange = (e, { value }) => this.setState({ value })

  editVaccine() {
    if (true) {
      Vaccine.collection.update(Meteor.userId, {
        $set: {
          name: this.name,
          vaccineType: this.vaccineType,
          dose1Lot: this.dose1Lot,
          dose1Date: this.dose1Date,
          does1Site: this.dose1Site,
          dose2Lot: this.dose2Lot,
          dose2Date: this.dose2Date,
          does2Site: this.dose2Site,
        },
      },
      (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Status updated successfully', 'success')));
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
          size='Large'
          trigger={<Button color='green' inverted>Edit Vaccine Card</Button>}
        >
          <Modal.Header size='huge'>
              Fill in the Vaccine information
          </Modal.Header>
          <ModalContent image>
            <Image size='Large' src='https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg'wrapped/>
            <Modal.Description>
              <Input
                label='Name'
                placeholder='Full Name'
                value={this.name}
              />
              <Select
                label='Vaccine Type'
                placeholder='VaccineType'
                options={options}
                value={this.vaccineType}
              />
              <Header>First Does</Header>
              <Input
                label='Lot Number'
                placeholder='1234567'
                value={this.dose1Lot}
              />
              <Input
                label='Data Received'
                placeholder='mm/dd/yyyy'
                value={this.dose1Date}
              />
              <Input
                label='Clinic Site'
                placeholder='queens,etc'
                value={this.dose1Site}
              />
              <Header>Second Does</Header>
              <Input
                label='Lot Number'
                placeholder='1234567'
                value={this.dose2Lot}
              />
              <Input
                label='Data Received'
                placeholder='mm/dd/yyyy'
                value={this.dose2Date}
              />
              <Input
                label='Clinic Site'
                placeholder='queens,etc'
                value={this.dose2Site}
              />
            </Modal.Description>
          </ModalContent>
          <Modal.Actions>
            <Button color='red' inverted onClick={() => this.editVaccine(false)}>
              <Icon name='remove'/> Cancel
            </Button>
            <Button color='green' inverted onClick={() => this.editVaccine(true)}>
              <Icon name='checkmark'/> Upload
            </Button>
          </Modal.Actions>
        </Modal>
      </Container>
    );
  }
}

export default VaccCard;
