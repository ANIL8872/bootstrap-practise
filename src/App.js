import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <Row>
        <Col style={{backgroundColor:"red"}}xs={{ span: 7 }}>First, but unordered</Col>
        <Col style={{backgroundColor:"green"}}xs={{ order: 2 }}>Second, but last</Col>
        <Col xs={{ order: 1}}>Third, but second</Col>
      </Row>
    </Container>
  );
}

export default App;
