import React from 'react';
import { Button, Icon, Header, Modal, Container } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Statuses } from '../../api/status/Status';

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

  checkUserStatus() {
    const owner = Meteor.userId();
    const date = this.today;
    const status = 'Undetermined';
    const userStatus = this.props.statuses;

    if (userStatus.length !== 0) {
      this.setState({ status: userStatus });
    } else {
      Statuses.collection.insert({ owner, date, status },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Remember to check in today', 'success');
          }
        });
    }
  }

  componentDidMount() {
    this.checkUserStatus();
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

Condition.propTypes = {
  statuses: PropTypes.array.isRequired,
};

export default withRouter(Condition);
