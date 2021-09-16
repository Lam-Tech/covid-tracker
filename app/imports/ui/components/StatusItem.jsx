import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StatusItem extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.status.date}</Table.Cell>
        <Table.Cell>{this.props.status.status}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
StatusItem.propTypes = {
  status: PropTypes.shape({
    _id: PropTypes.string,
    owner: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(StatusItem);
