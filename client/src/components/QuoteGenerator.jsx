// QuoteGenerator.jsx
export default function QuoteGenerator() {
  return <div>Quote Generator Content</div>;
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function QuoteGenerator() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('/api/quote');
        setData(response.data);
      } catch (err) {
        setError('Failed to load quote.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) return <div>Loading quote...</div>;
  if (error) return <div style={{color: 'red'}}>{error}</div>;
  if (!data) return null;

  return (
    <div>
      <h3>Quote of the Moment</h3>
      <p>"{data.quote}"</p>
    </div>
  );
}
