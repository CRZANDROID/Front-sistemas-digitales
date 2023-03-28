import '../assets/styles/appContainer.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../database';
import { onValue, ref } from 'firebase/database';

const HomeBody = () => {
  const espDataRef = ref(database, '/test');
  const [temperature, setTemperature] = useState('--');
  const [pressure, setPressure] = useState('--');
  const [humidity, setHumidity] = useState('--');

  useEffect(() => {
    onValue(espDataRef, (snapshot) => {
      snapshot.forEach(childSnapshot => {
        const keyName = childSnapshot.key;
        const data = childSnapshot.val();

        console.log(`${keyName}: ${data}`);
        switch (keyName) {
          case 'temperature':
            setTemperature(data);
            break;
          case 'humidity':
            setHumidity(data);
            break;

          case 'pressure':
            setPressure(data);
            break

          default:
            break;
        }
      });
    });
  }, [humidity, pressure, temperature]);

  return (
    <div>
      <div className='container' style={{ marginTop: '4rem' }}>
        <div className='row' style={{ gap: '1rem', marginLeft: '1.5em' }}>
          <div
            className='col-md-4 d-flex flex-column align-items-center py-2'
            style={{
              background: 'rgba(0,0,0,.4)',
              textAlign: 'center',
              color: 'white',
              width: '25rem',
              borderRadius: '1em',
            }}
          >
            <h2>Humedad</h2>
            <h2>{humidity}%</h2>
          </div>
          <div
            className='col-md-4 d-flex flex-column align-items-center py-2'
            style={{
              background: 'rgba(0,0,0,.4)',
              textAlign: 'center',
              color: 'white',
              width: '25rem',
              borderRadius: '1em',
            }}
          >
            <h2>Temperatura</h2>
            <h2>{temperature}°C</h2>
          </div>
          <div
            className='col-md-4 d-flex flex-column align-items-center py-2'
            style={{
              background: 'rgba(0,0,0,.4)',
              textAlign: 'center',
              color: 'white',
              width: '25rem',
              borderRadius: '1em',
            }}
          >
            <h2>Presión</h2>
            <h2>{Number(pressure * 0.00750062).toFixed(2)} mmHg</h2>
            <h2>{Number(pressure / 101325).toFixed(2)} atm</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
