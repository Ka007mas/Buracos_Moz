import React, { useState } from 'react';

const ReportPage = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer algo como salvar a denúncia, exibir um mapa, etc.
    console.log('Denúncia recebida:', { location, description });
  };

  return (
    <div>
      <h1>Denunciar um Buraco</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="location">Localização:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar Denúncia</button>
      </form>
    </div>
  );
};

export default ReportPage;
