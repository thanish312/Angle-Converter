import React, { useState } from 'react';
import './App.css';

const Converter = () => {
  const [conversionType, setConversionType] = useState('radToDms'); // 'radToDms' or 'dmsToRad'
  const [radians, setRadians] = useState('');
  const [degrees, setDegrees] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [result, setResult] = useState('');

  const convertToDMS = () => {
    const rad = parseFloat(radians);
    if (isNaN(rad)) {
      setResult('Invalid radian input');
      return;
    }

    const deg = rad * (180 / Math.PI);
    const d = Math.floor(deg);
    const min = (deg - d) * 60;
    const m = Math.floor(min);
    const sec = (min - m) * 60;
    const s = Math.round(sec);

    setResult(`${d}° ${m}' ${s}"`);
  };

  const convertToRadians = () => {
    const d = parseFloat(degrees) || 0;
    const m = parseFloat(minutes) || 0;
    const s = parseFloat(seconds) || 0;

    if (isNaN(d) || isNaN(m) || isNaN(s)) {
      setResult('Invalid DMS input');
      return;
    }

    const deg = d + m / 60 + s / 3600;
    const rad = deg * (Math.PI / 180);

    setResult(`${rad.toFixed(6)} radians`);
  };

  const handleConversion = () => {
    if (conversionType === 'radToDms') {
      convertToDMS();
    } else {
      convertToRadians();
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ width: '500px' }}>
        <h2 className="text-center mb-4">Angle Converter</h2>
        <div className="btn-group mb-4" role="group">
          <button type="button" className={`btn ${conversionType === 'radToDms' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setConversionType('radToDms')}>Radian to DMS</button>
          <button type="button" className={`btn ${conversionType === 'dmsToRad' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setConversionType('dmsToRad')}>DMS to Radian</button>
        </div>

        {conversionType === 'radToDms' ? (
          <div className="mb-3">
            <label htmlFor="radianInput" className="form-label">Enter Radians</label>
            <input
              type="number"
              className="form-control"
              id="radianInput"
              value={radians}
              onChange={(e) => setRadians(e.target.value)}
              placeholder="e.g., 1.57"
            />
          </div>
        ) : (
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="degreeInput" className="form-label">Degrees</label>
              <input type="number" className="form-control" id="degreeInput" value={degrees} onChange={(e) => setDegrees(e.target.value)} placeholder="D°" />
            </div>
            <div className="col">
              <label htmlFor="minuteInput" className="form-label">Minutes</label>
              <input type="number" className="form-control" id="minuteInput" value={minutes} onChange={(e) => setMinutes(e.target.value)} placeholder="M'" />
            </div>
            <div className="col">
              <label htmlFor="secondInput" className="form-label">Seconds</label>
              <input type="number" className="form-control" id="secondInput" value={seconds} onChange={(e) => setSeconds(e.target.value)} placeholder='S"' />
            </div>
          </div>
        )}

        <button className="btn btn-success w-100" onClick={handleConversion}>
          Convert
        </button>

        {result && (
          <div className="alert alert-info mt-4" role="alert">
            <strong>Result:</strong> {result}
          </div>
        )}
      </div>
      <div className="attribution">Made by Thanish</div>
    </div>
  );
};

export default Converter;