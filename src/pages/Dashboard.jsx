import React from 'react';

export default function Dashboard() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <div className="card-image-container">
            <div className="card-image">
              <img src="src/assets/card1.jpg" alt="Card Image" />
            </div>
          </div>
          <div className="card-name">
            <h3>Criminal Jurisprudence & Procedure</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-image-container">
            <div className="card-image">
              <img src="src/assets/card2.jpg" alt="Card Image" />
            </div>
          </div>
          <div className="card-name">
            <h3>Law Enforcement Administration</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-image-container">
            <div className="card-image">
              <img src="src/assets/card3.jpg" alt="Card Image" />
            </div>
          </div>
          <div className="card-name">
            <h3>Criminalistics</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-image-container">
            <div className="card-image">
              <img src="src/assets/card4.jpg" alt="Card Image" />
            </div>
          </div>
          <div className="card-name">
            <h3>Crime Detection & Investigation</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-image-container">
            <div className="card-image">
              <img src="src/assets/card5.jpg" alt="Card Image" />
            </div>
          </div>
          <div className="card-name">
            <h3>Sociology of Crimes & Ethics</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
