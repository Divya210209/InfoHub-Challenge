// CurrencyConverter.jsx
export default function CurrencyConverter() {
  return <div>Currency Converter Content</div>;
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CurrencyConverter() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Hardcoded example amount; can be made dynamic later
  const amount = 100;

  useEffect(() => {
    const fetchCurrency = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`/api/currency?amount=${amount}`);
        setData(response.data);
      } catch (err) {
        setError('Failed to load currency data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCurrency();
  }, [amount]);

  if (isLoading) return <div>Loading currency conversion...</div>;
  if (error) return <div style={{color: 'red'}}>{error}</div>;
  if (!data) return null;

  return (
    <div>
      <h3>Currency Conversion</h3>
      <p>USD: ${data.usd}</p>
      <p>EUR: €{data.eur}</p>
    </div>
  );
}
