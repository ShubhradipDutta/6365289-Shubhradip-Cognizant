import React from 'react';

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 65 },
    { name: "Shubman Gill", score: 75 },
    { name: "Rishabh Pant", score: 90 },
    { name: "KL Rahul", score: 55 },
    { name: "Hardik Pandya", score: 60 },
    { name: "Jasprit Bumrah", score: 30 },
    { name: "Mohammed Shami", score: 40 },
    { name: "Ravindra Jadeja", score: 95 },
    { name: "Suryakumar Yadav", score: 82 },
    { name: "Shreyas Iyer", score: 67 },
  ];

  // Filter players with score below 70 using arrow function
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
