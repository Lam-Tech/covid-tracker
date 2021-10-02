import React from 'react';
import { Button, Icon, Image, Modal, Container, Header, ModalContent, Input, Select } from 'semantic-ui-react';
import swal from 'sweetalert';

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
    super(props)
    this.state = {
      prompt: false,
    };
  }

  editVaccine(temp) {
    // eslint-disable-next-line eqeqeq
    if (temp) {
      this.setState({ prompt: false });
      swal('Success', 'Vaccine Information Saved', 'success');
    } else {
      this.setState({ prompt: false });
    }

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
                required
              />
              <Select
                label='Vaccine Type'
                placeholder='VaccineType'
                options={options}
                value={this.vaccineType}
                required
              />
              <Header>First Does</Header>
              <Input
                label='Lot Number'
                placeholder='1234567'
                value={this.dose1Lot}
                required
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
