import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridRow, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VaccineItem extends React.Component {
  render() {
    return (
    /*
      <Card>
        <Card.Body>
          <Card.Subtitle>Vaccine Brand</Card.Subtitle>
          <Card.Text>{this.props.vaccine.vaccineType}</Card.Text>
          <Card.Subtitle>Dose1 Lot</Card.Subtitle>
          <Card.Text>{this.props.vaccine.dose1Lot}</Card.Text>
          <Card.Subtitle>Dose1 Date</Card.Subtitle>
          <Card.Text></Card.Text>
          <Card.Subtitle>Dose1 Site</Card.Subtitle>
          <Card.Text>{this.props.vaccine.dose1Site}</Card.Text>
          <Card.Subtitle>Dose2 Lot</Card.Subtitle>
          <Card.Text>{this.props.vaccine.dose2Lot}</Card.Text>
          <Card.Subtitle>Dose2 Date</Card.Subtitle>
          <Card.Text></Card.Text>
          <Card.Subtitle>Dose2 Site</Card.Subtitle>
          <Card.Text>{this.props.vaccine.dose2Site}</Card.Text>
        </Card.Body>
      </Card>
      */
      <Grid columns={2} divided>
        <Header textAlign='center'>Vaccine Brand: {this.props.vaccine.vaccineType}</Header>
        <GridRow>
          <Grid.Column>Dose1 Lot:  {this.props.vaccine.dose1Lot}</Grid.Column>
          <Grid.Column>Dose2 Lot:  {this.props.vaccine.dose2Lot}</Grid.Column>
        </GridRow>
        <GridRow>
          <Grid.Column>Dose1 Date:  {this.props.vaccine.dose1Lot}</Grid.Column>
          <Grid.Column>Dose2 Date:  {this.props.vaccine.dose2Lot}</Grid.Column>
        </GridRow>
        <GridRow>
          <Grid.Column>Dose1 Site: {this.props.vaccine.dose1Site}</Grid.Column>
          <Grid.Column>Dose2 Site: {this.props.vaccine.dose2Site}</Grid.Column>
        </GridRow>
      </Grid>
    );
  }
}

// Require a document to be passed to this component.
VaccineItem.propTypes = {
  vaccine: PropTypes.shape({
    vaccineType: PropTypes.string,
    dose1Lot: PropTypes.number,
    dose1Date: PropTypes.date,
    dose1Site: PropTypes.string,
    dose2Lot: PropTypes.number,
    dose2Date: PropTypes.date,
    dose2Site: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(VaccineItem);