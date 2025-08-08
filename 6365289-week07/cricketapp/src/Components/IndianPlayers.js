import React from 'react';

function IndianPlayers() {
  const oddTeam = ["Rohit", "Gill", "Kohli", "Shreyas", "Pant"];
  const evenTeam = ["Rahul", "SKY", "Hardik", "Jadeja", "Shami", "Bumrah"];

  // Destructuring example
  const [p1, p2, p3, p4, p5] = oddTeam;
  const [q1, q2, q3, q4, q5, q6] = evenTeam;

  // Merging arrays using spread operator
  const T20players = ["Kohli", "Rohit", "SKY"];
  const RanjiTrophy = ["Jadeja", "Rahul", "Shubman"];
  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
        <li>{p4}</li>
        <li>{p5}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{q1}</li>
        <li>{q2}</li>
        <li>{q3}</li>
        <li>{q4}</li>
        <li>{q5}</li>
        <li>{q6}</li>
      </ul>

      <h3>Merged T20 and Ranji Trophy Players</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
