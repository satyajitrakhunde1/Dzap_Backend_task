const axios = require('axios');

const XY_FINANCE_API_URL = 'https://aggregator-api.xy.finance/v1/recommendedTokens';

exports.fetchTokens = async () => {
  try {
    const response = await axios.get(XY_FINANCE_API_URL);
    return response.data.recommendedTokens;
  } catch (error) {
    console.error('Error fetching tokens from XY Finance API:', error);
    throw error;
  }
};

exports.getQuote = async (params) => {
  try {
    const response = await axios.get(`${XY_FINANCE_API_URL}/quote`, {
      params
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching quote from XY Finance API:', error);
    throw error;
  }
};
exports.createTransaction = async (tokenAddress, spender, amount) => {
  try {
    const response = await axios.post(`${XY_FINANCE_API_BASE_URL}/params`, { tokenAddress, spender, amount });
    return response.data;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
};

