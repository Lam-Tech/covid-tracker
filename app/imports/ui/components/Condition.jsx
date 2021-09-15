import React from 'react';
import { Button, Icon, Header, Modal, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Condition extends React.Component {
  constructor(props) {
    super(props);
    this.today = new Date().toLocaleString().split(',')[0];
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
          <Header size='huge'>
              Do any of the following apply to you?
          </Header>
          <Modal.Content>
            <p>
              Have you tested positive for COVID-19 and are on home isolation?
            </p>
            <p>
                Any of the Symptoms apply to you
            </p>
            <ul>
              <li>Fever greater than 100.4 °F or feeling feverish</li>
              <li>Cough</li>
              <li>Shortness of Breath</li>
              <li>Sore throat</li>
              <li>Unexplained musle/body aches</li>
              <li>Nausea</li>
              <li>Loss of senses of taste</li>
              <li>Runny nose</li>
              <li>Headache</li>
              <li>Skin Rash</li>
              <li>Chest pain</li>
            </ul>
            <p>
              Check for Recent COVID-19 Exposure:
            </p>
            <ul>
              <li>
                Have you traveled out of the state and are currently under quarantine orders by
                the Department of Health or your medical care provider ?
              </li>
              <li>
                Are you unvaccinated and have been in close contact (&lt;6 feet for &ge; 15 minutes,
                cumulatively, over a 24-hour period) with anyone who has an active, diagnosed case
                of COVID-19?  Note: Healthcare students/personnel wearing appropriate
                PPE at ALL TIMES while caring for a patient with COVID-19 would NOT be considered
                a close contact (ref. DOH medical advisory #16)
              </li>
              <li>
                Has the Department of Health told you that you have been in contact with a person
                with COVID-19 and you are not vaccinated?
              </li>
            </ul>
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
        <h1>
          Date:
          <span> {this.today}</span>
        </h1>
        <h1>
          Status:
          <span id="answer"> {this.state.status}</span>
        </h1>
      </Container>
    );
  }
}

export default Condition;
