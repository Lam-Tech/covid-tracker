import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Container, Form, Header, Message } from 'semantic-ui-react';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
export default class Signin extends React.Component {

  // Initialize component state with properties for login and redirection.
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
  }

  // Update the form controls each time the user interacts with them.
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  // Handle Signin submission using Meteor's account mechanism.
  submit = () => {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  // Render the signin form.
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/home' } };
    // if correct authentication, redirect to page instead of login screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    // Otherwise return the Login form.
    return (
      <Container id="signin-page" textAlign='center' className='signupbg'>
        <Header as="h1" textAlign="center">
              Welcome Back
        </Header>
        <Form className='form' onSubmit={this.submit}>
          <Form.Input
            id="signin-form-email"
            label='Email'
            name="email"
            type="email"
            width={10}
            placeholder="E-mail address"
            onChange={this.handleChange}
          />
          <Form.Input
            id="signin-form-password"
            name="password"
            label='Password'
            placeholder="Password"
            type="password"
            width={10}
            onChange={this.handleChange}
          />
          <Form.Button className='button' id="signup-form-submit" content="Submit" color='green'/>
        </Form>
        <Header width={6}>
          <Link to="/signup">Click here to Register</Link>
        </Header>
        {this.state.error === '' ? (
          ''
        ) : (
          <Message error
            header="Login was not successful"
            content={this.state.error}
          />
        )}
      </Container>
    );
  }
}

// Ensure that the React Router location object is available in case we need to redirect.
Signin.propTypes = {
  location: PropTypes.object,
};
