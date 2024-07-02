import React, { useState } from 'react';
import axios from 'axios';
import './QuoteForm.css';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    srcChainId: '',
    srcQuoteTokenAddress: '',
    srcQuoteTokenAmount: '',
    dstChainId: '',
    dstQuoteTokenAddress: '',
    slippage: ''
  });
  const [quote, setQuote] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/quotes', formData);
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="quote-form">
      <h2>Get a Quote</h2>
      <form onSubmit={handleSubmit}>
        <input type="
