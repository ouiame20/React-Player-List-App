import React from 'react';
import './App.css';
import PlayersList from './components/PlayersList';


function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Carte des Joueurs de la FIFA</h1>
      <PlayersList />
    </div>
  );
}

export default App;
