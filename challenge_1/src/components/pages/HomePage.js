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
    // Fetch coins when the component mounts
    this.props.getCoins();
  }
  render() {
    console.log('COINS');
    const { coins, error } = this.props;
    return (
      <Container className="coins-page-container">
      {coins && coins.length > 0 ? (
        <Row className="app-card-list" id="app-card-list">
        {
          Object.keys(coins).map(key => (
            <Col key={key}>
            <CoinCard index={key} coin={coins[key]} />
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
    coins: state.coinPageReducer.coins,
    error: state.coinPageReducer.error
    };
};

export default connect(
  mapStateToPropsCoinPage,
  {
    getCoins
  }
)(HomePage);
