import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Statuses } from '../../api/status/Status';
import StatusItem from '../components/StatusItem';

/** A simple static component to render some text for the landing page. */
class PastHistory extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">Past History</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.statuses.map((status) => <StatusItem key={status._id} status={status} />)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

PastHistory.propTypes = {
  statuses: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Statuses.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const statuses = Statuses.collection.find({}).fetch();
  return {
    statuses,
    ready,
  };
})(PastHistory);
