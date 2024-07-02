
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tokens', tokenRoutes);
app.post('/quotes', async (req, res) => {
  const { srcChainId, srcQuoteTokenAddress, srcQuoteTokenAmount, dstChainId, dstQuoteTokenAddress, slippage } = req.body;

  try {
    const response = await axios.get('https://aggregator-api.xy.finance/v1/quote', {
      params: {
        srcChainId,
        srcQuoteTokenAddress,
        srcQuoteTokenAmount,
        dstChainId,
        dstQuoteTokenAddress,
        slippage
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send('Error fetching quote');
  }
});

app.post('/params', async (req, res) => {
  const { tokenAddress, spender, amount } = req.body;

  try {
    const response = await axios.get('https://aggregator-api.xy.finance/v1/approveTx', {
      params: {
        tokenAddress,
        spender,
        amount
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching transaction params:', error);
    res.status(500).send('Error fetching transaction params');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
