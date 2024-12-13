import CoinGeckoApi from "../api/CoinGeckoApi";
import * as CONSTANTS from "../constants/types";
import * as ERRORS from '../constants/errors';

export const getCoinsFromCoinGecko = () => {
  return (dispatch) => {
    CoinGeckoApi.getCoinsFromCoinGecko()
      .then(res => {
        let coinList = [];
        res.forEach(doc => {
          // console.log(doc)
          coinList.push(doc);
        });
        dispatch(getCoinsSuccess(coinList));
      })
      .catch(err => {
        console.log('ERROR GET COINS');
        console.log(err);
        dispatch(handleError(err.message));
      });
  }
}

const getCoinsSuccess = coins => {
  return {
    type: CONSTANTS.GET_COINS_SUCCESS,
    coins: coins
  };
};

const handleError = message => {
  return {
    type: ERRORS.ERROR_MIDDLEWARE,
    error: message
  };
};
