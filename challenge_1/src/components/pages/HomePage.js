import React from 'react';
import { connect } from 'react-redux';
import { getCoinsFromCoinGecko } from '../../actions/coinsActions'; // Import your actions
import CoinRow from '../cards/CoinCard'; // Renamed to CoinRow
import { Container, Table, Alert } from 'react-bootstrap'; // Import Bootstrap components
import '../styles/coinPage.css';

class HomePage extends React.Component {
    componentDidMount() {
        // Fetch coins when the component mounts
        this.props.getCoinsFromCoinGecko();
    }

    render() {
        const { coins, error } = this.props;

        return (
            <Container className="coins-page-container">
                {coins && coins.length > 0 ? (
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Current Price(USD)</th>
                                <th>Market Cap(USD)</th>
                                <th>Price Change 24h %</th>
                                <th>Market Cap Rank #</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin, index) => (
                                <CoinRow key={index} coin={coin} />
                            ))}
                        </tbody>
                    </Table>
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

const mapStateToPropsCoinPage = (state) => {
    return {
        coins: state.coinPageReducer.coins,
        error: state.coinPageReducer.error,
    };
};

export default connect(mapStateToPropsCoinPage, { getCoinsFromCoinGecko })(HomePage);
