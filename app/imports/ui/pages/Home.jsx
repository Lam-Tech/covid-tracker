import React from 'react';
import { Button, Icon, Header, Modal, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <Container textAlign='center' fluid>
      <Header as='h1'>Hello</Header>
      <p>How are you feeling Today?</p>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<Button inverted color='red'>Check for Symptoms</Button>}
      >
        <Header>
            Answer the following Questions
        </Header>
        <Modal.Content>
          <p>
              Are you LiangLi?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' inverted onClick={() => setOpen(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={() => setOpen(false)}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
}

export default Home;
