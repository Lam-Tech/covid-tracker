import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridRow, Header, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VaccineItem extends React.Component {
  render() {
    return (
      <Grid columns={2} divided>
        <GridRow>
          <Header as='h5' textAlign='left'>Name: {this.props.vaccine.ownerName}</Header>
        </GridRow>
        <GridRow>
          <Header as='h5' textAlign='left'>Vaccine Brand: {this.props.vaccine.vaccineType}</Header>
        </GridRow>
        <GridRow>
          <Grid.Column>Dose1 Lot: {this.props.vaccine.dose1Lot}</Grid.Column>
          <Grid.Column>Dose2 Lot: {this.props.vaccine.dose2Lot}</Grid.Column>
        </GridRow>
        <GridRow>
          <Grid.Column>Dose1 Date: {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(this.props.vaccine.dose1Date)}</Grid.Column>
          <Grid.Column>Dose2 Date: {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(this.props.vaccine.dose2Date)}</Grid.Column>
        </GridRow>
        <GridRow>
          <Grid.Column>Dose1 Site: {this.props.vaccine.dose1Site}</Grid.Column>
          <Grid.Column>Dose2 Site: {this.props.vaccine.dose2Site}</Grid.Column>
        </GridRow>
        <GridRow>
          <Image src={this.props.vaccine.card}/>
        </GridRow>
      </Grid>
    );
  }
}

// Require a document to be passed to this component.
VaccineItem.propTypes = {
  vaccine: PropTypes.shape({
    vaccineType: PropTypes.string,
    ownerName: PropTypes.string,
    dose1Lot: PropTypes.number,
    dose1Date: PropTypes.instanceOf(Date),
    dose1Site: PropTypes.string,
    dose2Lot: PropTypes.number,
    dose2Date: PropTypes.instanceOf(Date),
    dose2Site: PropTypes.string,
    card: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(VaccineItem);
