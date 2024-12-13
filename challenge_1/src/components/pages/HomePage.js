import React from "react";
import { connect } from "react-redux";
import {
  getCoins
} from "../../actions/coinsActions"; // Import your actions
import CoinCard from '../cards/CoinCard';
import { Container, Row, Col, Alert } from 'react-bootstrap'; // Import Bootstrap components
import '../styles/coinPage.css'

class HomePage extends React.Component {
  
  componentWillMount() {
    // Fetch projects when the component mounts
    this.props.getCoins();
  }
  render() {
    console.log('COINS');
    const { projects, error } = this.props;
    return (
      <Container className="software-projects-page-container">
      {projects && projects.length > 0 ? (
        <Row className="app-card-list" id="app-card-list">
        {
          Object.keys(projects).map(key => (
            <Col key={key}>
            <CoinCard index={key} project={projects[key]} />
            </Col>
          ))
        }
        </Row>
      ) : (
        <Alert variant="danger">
        <Alert.Heading>Error</Alert.Heading>
        <p>{error}</p>
        </Alert>
      )}
      </Container>
    );
  }
}

const mapStateToPropsCoinPage = state => {
  //In this case objects is gonna be applied to the props of the component
  return {
    projects: state.coinPageReducer.projects,
    error: state.coinPageReducer.error
    };
};

export default connect(
  mapStateToPropsCoinPage,
  {
    getCoins
  }
)(HomePage);
