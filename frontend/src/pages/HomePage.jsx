import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Mapa de Buracos nas Estradas</h1>
      <div id="map" style={{ width: '100%', height: '400px' }}></div> {/* Mapa aqui */}
    </div>
  );
}

export default HomePage;
