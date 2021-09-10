import React from 'react';
import { Button, Icon, Header, Modal, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
function Condition() {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
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
          <Button color='green' inverted onClick={() => setOpen(false) }>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      <h1 id="answer">HMMMMMM</h1>
    </Container>
  );
}

export default Condition;
