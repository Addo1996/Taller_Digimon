
import { useState, useEffect } from 'react';
import './App.css';
import DigimonCard from './components/DigimonCard.jsx';

function App() {
    const [digimons, setDigimons] = useState([]);

    useEffect(() => {
        const obtenerDigimons = async () => {
            const response = await fetch(
                'https://digimon-api.vercel.app/api/digimon'
            );

            const datos = await response.json();

            setDigimons(datos);
        };

        obtenerDigimons();
    }, []);

   
return (
    <div className="pagina">
        <header className="encabezado">
            <div className="logo-digimon">
                DIGIMON
                <span>DIGITAL MONSTERS</span>
            </div>

            <p></p><h1>Catálogo de Digimon</h1>
        </header>

        <div className="contenedor">
            {digimons.map((digimon) => (
                <DigimonCard
                    key={digimon.name}
                    digimon={digimon}
                />
            ))}
        </div>
    </div>
);

}

export default App;
