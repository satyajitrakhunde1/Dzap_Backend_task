
exports.getParams = async (req, res) => {
  try {
    const { tokenAddress, spender, amount } = req.body;
    const params = await xyFinanceService.createTransaction(tokenAddress, spender, amount);
    res.json(params);
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).send('Server Error');
  }
};
