import { useState, useEffect } from 'react'
import axios from "axios";


function App() {
  const [actor, setactor] = useState("");

  function fetchActor(){
    axios.get("https://lanciweb.github.io/demo/api/actors/")
    .then((res)=>setactor(res.id))
    .catch(console.error(error));
    
  }
  useEffect (fetchActor, []);

  return (
    <>
      
    </>
  )
}

export default App
