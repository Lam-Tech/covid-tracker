import React from 'react';
import { Button, Icon, Header, Modal, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Condition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: false,
      status: 'Undetermined',
    };
  }

  render() {
    return (
      <Container>
        <Modal
          basic
          onClose={() => this.setState({ prompt: false })}
          onOpen={() => this.setState({ prompt: true })}
          open={this.state.prompt}
          size='small'
          trigger={<Button inverted color='red'>Check for Symptoms</Button>}
        >
          <Header>
              Answer the following Questions
          </Header>
          <Modal.Content>
            <p>
                Are you sick?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' inverted onClick={() => this.setState({ prompt: false, status: 'Not Safe' })}>
              <Icon name='remove'/> No
            </Button>
            <Button color='green' inverted onClick={() => this.setState({ prompt: false, status: 'Safe' })}>
              <Icon name='checkmark'/> Yes
            </Button>
          </Modal.Actions>
        </Modal>
        <h1>Status:
          <span id="answer"> {this.state.status}</span>
        </h1>
      </Container>
    );
  }
}

export default Condition;
