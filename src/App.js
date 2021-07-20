import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* App Body */}
      {/* Sidebar */}
      <div className="app__body">
       <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
