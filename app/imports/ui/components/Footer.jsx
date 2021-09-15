import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
      <Menu secondary borderless fluid widths={3} className='footer'>
        {this.props.currentUser ? (
          [<Menu.Item as={NavLink} activeClassName="active" exact to="/home" key='home'><Icon size='large' name='pencil alternate' color='teal'/></Menu.Item>,
            <Menu.Item as={NavLink} activeClassName="active" exact to="/past-history" key='past-history'><Icon size='large' name='calendar alternate' color='teal'/></Menu.Item>,
            <Menu.Item as={NavLink} activeClassName="active" exact to="/profile" key='profile'><Icon size='large' name='address book outline' color='teal'/></Menu.Item>]
        ) : ''}
      </Menu>
    );
  }
}

Footer.propTypes = {
  currentUser: PropTypes.string,
};

const FooterContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Footer);

export default withRouter(FooterContainer);
