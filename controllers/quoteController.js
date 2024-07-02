const xyFinanceService = require('../services/xyFinanceService');

exports.getQuote = async (req, res) => {
  const { srcChainId, srcQuoteTokenAddress, srcQuoteTokenAmount, dstChainId, dstQuoteTokenAddress, slippage } = req.body;

  if (!srcChainId || !srcQuoteTokenAddress || !srcQuoteTokenAmount || !dstChainId || !dstQuoteTokenAddress || !slippage) {
    return res.status(400).send('All fields are required.');
  }

  try {
    const quoteParams = {
      srcChainId,
      srcQuoteTokenAddress,
      srcQuoteTokenAmount,
      dstChainId,
      dstQuoteTokenAddress,
      slippage
    };
    const quote = await xyFinanceService.getQuote(quoteParams);
    res.json(quote);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
