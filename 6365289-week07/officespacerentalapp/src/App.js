import React from "react";
import "./App.css";

function App() {
  const offices = [
    {
      name: "Tech Tower",
      rent: 55000,
      address: "Salt Lake, Kolkata",
      image: "https://via.placeholder.com/300x200?text=Tech+Tower"
    },
    {
      name: "Startup Hub",
      rent: 75000,
      address: "Electronic City, Bangalore",
      image: "https://via.placeholder.com/300x200?text=Startup+Hub"
    },
    {
      name: "Innovate Point",
      rent: 60000,
      address: "Hinjewadi, Pune",
      image: "https://via.placeholder.com/300x200?text=Innovate+Point"
    },
    {
      name: "Enterprise Block",
      rent: 45000,
      address: "Cyberabad, Hyderabad",
      image: "https://via.placeholder.com/300x200?text=Enterprise+Block"
    }
  ];

  return (
    <div className="App">
      <h1>🏢 Office Space Rental Portal</h1>

      <div className="office-container">
        {offices.map((office, index) => (
          <div key={index} className="office-card">
            <img src={office.image} alt={office.name} />
            <h2>{office.name}</h2>
            <p><strong>Address:</strong> {office.address}</p>
            <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
              <strong>Rent:</strong> ₹{office.rent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
