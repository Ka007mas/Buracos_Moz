import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import L from 'leaflet';  // Importar o Leaflet
import './App.css';

// Páginas de exemplo
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';

function App() {
  useEffect(() => {
    // Verificar se o mapa já foi inicializado
    if (document.getElementById('map')._leaflet_id) {
      return;  // O mapa já foi inicializado, então não faz nada
    }

    // Inicializar o mapa quando o componente for montado
    const map = L.map('map', {
      center: [-25.9653, 32.5898], // Coordenadas iniciais (ajuste conforme necessário)
      zoom: 13, // Nível de zoom inicial
    });

    // Adicionar a camada de tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);  // O mapa será inicializado quando o componente for montado

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
