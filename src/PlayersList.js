import React from 'react';
import Player from './player';
import players from './players';
import App from './App';


const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {players.map((player, index) => (
        <Player 
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          number={player.number}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

export default App;
