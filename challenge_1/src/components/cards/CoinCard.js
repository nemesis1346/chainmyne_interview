import React from 'react';
import '../styles/coinCard.scss';

class CoinCard extends React.Component {
    
    render() {
        const { coin } = this.props;
        
        return (
            <div className="post card">
				<div className="img-container">
					<img src={coin.image}></img>
				</div>
					<div className="card-body">
					{((coin.name) && (coin.name != "")) ? <div>{coin.name}</div>: null}
					{((coin.symbol) && (coin.symbol != "")) ? <div>{coin.symbol}</div> : null}
					{((coin.current_price) && (coin.current_price != "")) ? <div>{coin.current_price}</div> : null}
					{((coin.market_cap) && (coin.market_cap != "")) ? <div>{coin.market_cap}</div> : null}
				</div>
            </div>
        )
    }
}

export default CoinCard;