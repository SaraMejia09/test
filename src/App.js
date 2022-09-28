import preguntas from './componentes/preguntas.js'
import './App.css';
import { useState } from 'react';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  console.log(preguntaActual)
  return (
    <div className="App">


      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{preguntas[preguntaActual].titulo}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >

          {
            preguntas[preguntaActual].opciones.map((respuesta) => (
              <FormControlLabel value="other" control={<Radio />} label={respuesta.textoRespuesta} />
            ))
          }

        </RadioGroup>
        <div>

          <button onClick={() => setPreguntaActual(preguntaActual - 1)}>Anterior</button>
          <button onClick={() => setPreguntaActual(preguntaActual + 1)}>Siguiente</button>


        </div>
      </FormControl>



      {
   /*
 
     {preguntas[preguntaActual].titulo}

    <div>

     <button onClick={()=>setPreguntaActual(preguntaActual -1)}>Anterior</button>
     <button onClick={()=>setPreguntaActual(preguntaActual +1)}>Siguiente</button>
     

    </div>
 */}
    </div>

  );
}

export default App;
