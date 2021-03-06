import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Header, Message } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /* Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
  }

  /* Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /* Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { email, password } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /* Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/home' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
      <Container id="signup-page" textAlign='center' className='signupbg'>
        <Header as="h1" textAlign="center">
            Create account
        </Header>
        <Form className='form' onSubmit={this.submit}>
          <Form.Input
            id="signin-form-name"
            label="Name"
            type="name"
            width={10}
            text='name'
            placeholderposition="center"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <Form.Input
            id="signup-form-email"
            name="email"
            type="email"
            label="Email"
            width={10}
            placeholder="E-mail address"
            onChange={this.handleChange}
          />
          <Form.Input
            id="signup-form-password"
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            width={10}
            onChange={this.handleChange}
          />
          <Form.Button className='button' id="signup-form-submit" content="Submit" color='green'/>
        </Form>
        <Header width={6}>
            Already have an account? <Link to="/signin">Log in</Link>
        </Header>
        {this.state.error === '' ? (
          ''
        ) : (
          <Message
            error
            header="Registration was not successful"
            content={this.state.error}
          />
        )}
      </Container>
    );
  }
}

/* Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
