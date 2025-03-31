import React from 'react';
import { Card } from 'react-bootstrap';

// Le composant Player reçoit les props de PlayerList.js
const Player = ({ name, team, nationality, number, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
        <Card.Text>
          Nationalité: {nationality}<br />
          Numéro: {number}<br />
          Âge: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
