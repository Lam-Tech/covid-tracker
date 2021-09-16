import React from 'react';
import { Button, Icon, Image, Modal, Container, Form } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Moderna', value: 'Moderna' },
  { key: 'p', text: 'Pfizer', value: 'Pfizer' },
  { key: 'j', text: 'Johnson Johnson', value: 'Johnson Johnson' },
];

/** A simple static component to render some text for the landing page. */
class VaccCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: false,
    };
  }

  handleChange = (e, { value }) => this.setState({ value })

  editUserStatus() {
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
          trigger={<Button color='green' inverted>Edit Vaccine Card</Button>}
        >
          <Modal.Header size='huge'>
              Fill in the Vaccine information
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input placeholder='First name' label='First Name' />
                <Form.Input placeholder='Last name' label='Last Name'/>
                <Form.Select
                  label='Type of Vaccine'
                  options={options}
                  placeholder='Vaccine'
                />
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Description>
            <Image size='medium' url='images/Placeholder.png' wrapped />
          </Modal.Description>
          <Modal.Actions>
            <Button color='red' inverted onClick={() => this.editUserStatus(false)}>
              <Icon name='remove'/> Cancel
            </Button>
            <Button color='green' inverted onClick={() => this.editUserStatus(true)}>
              <Icon name='checkmark'/> Upload
            </Button>
          </Modal.Actions>
        </Modal>
      </Container>
    );
  }
}

export default VaccCard;
