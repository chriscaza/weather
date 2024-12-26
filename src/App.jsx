import { useEffect, useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://api.weatherapi.com/v1/current.json?key=795ffba897b347c984f215602242412&q=20.768703,-103.443375')
      .then(response => response.json())
      .then(datos => {
        setWeather(datos);
      })
      .catch(error => {
        console.error('Hubo un error:', error);
      });
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h2>{weather.location.name}</h2>
          <p>{weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
          <p>{weather.current.humidity}</p>
        </div>
      ) : (
        <p>Cargando...</p> 
      )}
    </div>
  );
}

export default App;
