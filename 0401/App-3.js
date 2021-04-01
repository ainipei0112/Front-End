import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
   return (
     <div>
     <h1>Who lives in my Garage?</h1>
     <Car />
     </div>
   );
}

export default Garage;
