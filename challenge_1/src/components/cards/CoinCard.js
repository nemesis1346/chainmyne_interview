import React from 'react';

class CoinRow extends React.Component {
    render() {
        const { coin } = this.props;

        return (
            <tr>
                <td>
                    <img src={coin.image} alt={coin.name} style={{ width: '30px', height: '30px' }} />
                </td>
                <td>{coin.name || 'N/A'}</td>
                <td>{coin.symbol || 'N/A'}</td>
                <td>{coin.current_price || 'N/A'}</td>
                <td>{coin.market_cap || 'N/A'}</td>
				<td>{coin.price_change_percentage_24h || 'N/A'}</td>
				<td>{coin.market_cap_rank || 'N/A'}</td>
            </tr>
        );
    }
}

export default CoinRow;
