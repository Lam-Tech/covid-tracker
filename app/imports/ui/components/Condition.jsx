import React from 'react';
import { Button, Icon, Header, Modal, Container } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { Statuses } from '../../api/status/Status';

/** A simple static component to render some text for the landing page. */
class Condition extends React.Component {
  constructor(props) {
    super(props);
    this.owner = Meteor.user().username;
    this.today = new Date().toLocaleString().split(',')[0];
    this.state = {
      prompt: false,
      status: 'Undetermined',
    };
  }

  newUserStatus() {
    const owner = this.owner;
    const date = this.today;
    const status = 'Undetermined';

    if (Statuses.collection.findOne({ owner, date }) === undefined) {
      Statuses.collection.insert({ owner, date, status },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Today is a new day', 'Remember to check in!', 'success');
          }
        });
    }
  }

  editUserStatus(safe) {
    const owner = this.owner;
    const date = this.today;
    let status;
    const _id = Statuses.collection.findOne({ owner, date })._id;

    if (safe) {
      status = 'Safe';
    } else {
      status = 'Not Safe';
    }

    Statuses.collection.update(_id, { $set: { owner, date, status } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Status updated successfully', 'success')));
    this.setState({ prompt: false, status: status });

  }

  statusColor(status) {
    if (status === 'Safe') return 'green';
    if (status === 'Not Safe') return 'red';
    return 'black';
  }

  componentDidMount() {
    this.newUserStatus();
    this.setState({ status: Statuses.collection.findOne({ owner: this.owner, date: this.today }).status });
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
          trigger={<Button size='big' inverted color='red'>Check for Symptoms</Button>}
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
            <Button color='red' inverted onClick={() => this.editUserStatus(false)}>
              <Icon name='checkmark'/> Yes
            </Button>
            <Button color='green' inverted onClick={() => this.editUserStatus(true)}>
              <Icon name='remove'/> No
            </Button>
          </Modal.Actions>
        </Modal>
        <Header>
          Date:
          <span> {this.today}</span>
        </Header>
        <Header as='h2' color={this.statusColor(this.state.status)}>
          Status:
          <span id="answer"> {this.state.status}</span>
        </Header>
      </Container>
    );
  }
}

export default Condition;
