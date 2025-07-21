import React from 'react';
import Converter from './Converter';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Converter />
      <Analytics />
    </div>
  );
}

export default App;