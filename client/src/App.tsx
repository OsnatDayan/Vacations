import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNavBar } from './components/MainNavBar';


function App() {

  return (
    <div className="text-light bg-dark" >
      <MainNavBar />
    </div>
  );
}

export default App;
