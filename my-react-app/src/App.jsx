import { useState, useEffect } from 'react';
import axios from "axios";
import "./app.css";


function App() {
  const [actors, setActors] = useState([]); 

  
  const fetchActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then(response => {
        setActors(response.data);
      })
      .catch(error => console.error("Errore nel recupero dati:", error));
  };

  useEffect(fetchActors, []);

  return (
    <main>
      <h1 className='titolo'>Lista di Attori</h1>
      <section className='actor'>
        {actors.map(actor => (
          <article  key={actor.id}className="actor-card" > 
            <div className='img-container'>
              <img src={actor.image} alt= "" />
            </div>
            
            <div className='info'>
              <h2>{actor.name}</h2>
              <p><strong>Anno di nascita:</strong> {actor.birth_year}</p>
              <p><strong>Nazionalità:</strong> {actor.nationality}</p>
              <p><strong>Biografia:</strong> {actor.biography}</p>
              <p><strong>Riconoscimenti:</strong> {actor.awards.join(" - ")}</p>
              <p><strong>Conosciuto per:</strong> {actor.known_for.join(" - ")}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
