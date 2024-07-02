const xyFinanceService = require('../services/xyFinanceService');

exports.getTokens = async (req, res) => {
  try {
    const tokens = await xyFinanceService.fetchTokens();
    res.json(tokens);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};