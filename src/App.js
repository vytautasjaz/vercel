import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent'

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;