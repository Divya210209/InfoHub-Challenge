import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
import React, { useState } from 'react';
import WeatherModule from './components/WeatherModule';
import CurrencyConverter from './components/CurrencyConverter';
import QuoteGenerator from './components/QuoteGenerator';

function App() {
  const [activeTab, setActiveTab] = useState('Weather');

  return (
    <div>
      {/* Tab buttons */}
      <nav>
        <button onClick={() => setActiveTab('Weather')}>Weather</button>
        <button onClick={() => setActiveTab('Currency')}>Currency</button>
        <button onClick={() => setActiveTab('Quote')}>Quote</button>
      </nav>

      {/* Conditional Rendering of Modules */}
      <main>
        {activeTab === 'Weather' && <WeatherModule />}
        {activeTab === 'Currency' && <CurrencyConverter />}
        {activeTab === 'Quote' && <QuoteGenerator />}
      </main>
    </div>
  );
}
<nav className="flex space-x-2 p-4 bg-gray-100">
  <button
    className={`px-4 py-2 rounded ${activeTab==='Weather'? 'bg-blue-600 text-white' : 'bg-white border'}`}
    onClick={() => setActiveTab('Weather')}
  >
    Weather
  </button>
  <button
    className={`px-4 py-2 rounded ${activeTab==='Currency'? 'bg-green-600 text-white' : 'bg-white border'}`}
    onClick={() => setActiveTab('Currency')}
  >
    Currency
  </button>
  <button
    className={`px-4 py-2 rounded ${activeTab==='Quote'? 'bg-purple-600 text-white' : 'bg-white border'}`}
    onClick={() => setActiveTab('Quote')}
  >
    Quote
  </button>
</nav>


export default App;

