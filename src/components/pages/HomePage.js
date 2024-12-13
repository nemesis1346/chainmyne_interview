import React from 'react';
import { connect } from 'react-redux';
import { getCoinsFromCoinGecko } from '../../actions/coinsActions'; // Import your actions
import CoinRow from '../cards/CoinCard'; // Renamed to CoinRow
import { Container, Table, Alert } from 'react-bootstrap'; // Import Bootstrap components
import '../styles/coinPage.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: 10, // Initial countdown value
            sortKey: 'name', // Default sort key
            sortDirection: 'asc', // Default sort direction
        };
    }

    componentDidMount() {
        this.fetchData();

        // Start the countdown timer
        this.interval = setInterval(() => {
            this.setState((prevState) => {
                const newCountdown = prevState.countdown - 1;

                // Reset the countdown and fetch new data if it reaches 0
                if (newCountdown === 0) {
                    this.fetchData();
                    return { countdown: 10 };
                }

                return { countdown: newCountdown };
            });
        }, 1000); // Update every second
    }

    componentWillUnmount() {
        // Clear the interval when the component is unmounted
        clearInterval(this.interval);
    }

    fetchData = () => {
        this.props.getCoinsFromCoinGecko();
    };

    handleSort = (key) => {
        const { sortKey, sortDirection } = this.state;
        let newDirection = 'asc';
        
        // Toggle sorting direction if same column is clicked
        if (key === sortKey && sortDirection === 'asc') {
            newDirection = 'desc';
        }

        this.setState({
            sortKey: key,
            sortDirection: newDirection,
        });
    };

    sortCoins = (coins) => {
        const { sortKey, sortDirection } = this.state;
        return coins.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];

            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    };

    render() {
        const { coins, error } = this.props;
        const { countdown } = this.state;

        const sortedCoins = coins ? this.sortCoins(coins) : [];

        return (
            <Container className="coins-page-container">
                {/* Countdown Timer Display */}
                <div className="countdown-timer">
                    <p>Refreshing in: {countdown} seconds</p>
                </div>

                {/* Table with Coin Data */}
                {coins && coins.length > 0 ? (
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th onClick={() => this.handleSort('image')}>Image</th>
                                <th onClick={() => this.handleSort('name')}>Name</th>
                                <th onClick={() => this.handleSort('symbol')}>Symbol</th>
                                <th onClick={() => this.handleSort('current_price')}>Current Price (USD)</th>
                                <th onClick={() => this.handleSort('market_cap')}>Market Cap (USD)</th>
                                <th onClick={() => this.handleSort('price_change_percentage_24h')}>Price Change 24h %</th>
                                <th onClick={() => this.handleSort('market_cap_rank')}>Market Cap Rank #</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedCoins.map((coin, index) => (
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
