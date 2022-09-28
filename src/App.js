import preguntas from './componentes/preguntas.js'
import './App.css';
import {useState} from 'react';

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  console.log(preguntaActual)
  return (
    <div className="App">
 
     {preguntas[preguntaActual].titulo}

    <div>

     <button onClick={()=>setPreguntaActual(preguntaActual -1)}>Anterior</button>
     <button onClick={()=>setPreguntaActual(preguntaActual +1)}>Siguiente</button>
     

    </div>
    </div>
  );
}

export default App;
