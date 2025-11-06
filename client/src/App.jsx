import React, { useState } from 'react'
import './App.css'
import WeatherModule from './components/WeatherModule'
import CurrencyConverter from './components/CurrencyConverter'
import QuoteGenerator from './components/QuoteGenerator'

export default function App() {
  const [activeTab, setActiveTab] = useState('Weather')

  return (
    <div className="app-root">
      <nav className="flex space-x-2 p-4 bg-gray-100">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Weather' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
          onClick={() => setActiveTab('Weather')}
        >
          Weather
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Currency' ? 'bg-green-600 text-white' : 'bg-white border'}`}
          onClick={() => setActiveTab('Currency')}
        >
          Currency
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Quote' ? 'bg-purple-600 text-white' : 'bg-white border'}`}
          onClick={() => setActiveTab('Quote')}
        >
          Quote
        </button>
      </nav>

      <main className="p-4">
        {activeTab === 'Weather' && <WeatherModule />}
        {activeTab === 'Currency' && <CurrencyConverter />}
        {activeTab === 'Quote' && <QuoteGenerator />}
      </main>
    </div>
  )
}

