import React from 'react';
import { Button, Icon, Header, Modal, Container, Form } from 'semantic-ui-react';

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
          size='small'
          trigger={<Button inverted color='red'>Upload/Edit Vaccine Card</Button>}
        >
          <Header size='huge'>
              Fill in the Vaccine information
          </Header>
          <Modal.Content>
            <Form>
              <Form.Input placeholder='First name' />
              <Form.Input placeholder='Last name' />
              <Form.Select
                fluid
                label='Type of Vaccine'
                options={options}
                placeholder='Vaccine'
              />
            </Form>
          </Modal.Content>
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
