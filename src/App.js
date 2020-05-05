import React from 'react';
import './App.css';
import Nav from './components/Nav';
import AddFav from './components/AddFav';
import MyLinks from './components/MyLinks';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <AddFav />
        <MyLinks />
      </main>
    </div>
  );
}

export default App;
