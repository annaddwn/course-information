import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-4/5">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
