import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import Condition from '../components/Condition';

/** A simple static component to render some text for the landing page. */
class Home extends React.Component {
  render() {
    return (
      <Container textAlign='center' fluid>
        <Header as='h1'>Hello</Header>
        <p>How are you feeling Today?</p>
        <Condition/>
      </Container>
    );
  }
}

export default Home;
