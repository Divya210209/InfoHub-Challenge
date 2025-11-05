// WeatherModule.jsx
export default function WeatherModule() {
  return <div>Weather Module Content</div>;
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function WeatherModule() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('/api/weather');
        setData(response.data);
      } catch (err) {
        setError('Failed to load weather data.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (isLoading) return <div>Loading weather...</div>;
  if (error) return <div style={{color: 'red'}}>{error}</div>;
  if (!data) return null;

  return (
    <div>
      <h3>Weather Info</h3>
      <p>Temperature: {data.temperature}°C</p>
      <p>Condition: {data.description}</p>
    </div>
  );
}

