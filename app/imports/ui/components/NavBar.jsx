import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '200px' };
    return (
      <div>
        {this.props.currentUser === ' ' ? (
          <Menu secondary style={menuStyle} borderless>
          </Menu>
        ) : (
          <Menu className='home' secondary style={menuStyle} borderless fluid widths={1}>
            <Menu.Item as={NavLink} activeClassName="" exact to="/">
              <Icon name='podcast' size='huge' color='pink'></Icon>
            </Menu.Item>
          </Menu>
        )}
      </div>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
