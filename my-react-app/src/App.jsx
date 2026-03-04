import { useState, useEffect } from 'react';
import axios from "axios";

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
    <>
      <h1>Lista Attori</h1>
    
    </>
  );
}

export default App;
