import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const menuStyle = { paddingLeft: '700px' };
    return (
      <footer className="footer">
        <Container fixed={'true'} style={menuStyle}>
          <Menu secondary borderless widths={3}>
            {this.props.currentUser ? (
              [<Menu.Item as={NavLink} activeClassName="active" exact to="/home" key='home'>Home</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/past-history" key='past-history'>Past</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/profile" key='profile'>Profile</Menu.Item>]
            ) : ''}
          </Menu>
        </Container>
      </footer>
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
