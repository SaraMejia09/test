import preguntas from './componentes/preguntas.js'
import './App.css';
import { useState } from 'react';
import * as React from 'react';
import {Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,Button} from '@mui/material';


function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  console.log(preguntaActual)
  return (

    <div className="App">

      <div className='Contenedor'>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">{preguntas[preguntaActual].titulo}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >

            {
              preguntas[preguntaActual].opciones.map((respuesta) => (
                <FormControlLabel value={respuesta.textoRespuesta} control={<Radio />} label={respuesta.textoRespuesta} />
              ))
            }

          </RadioGroup>
          <div className='botones'>
            <Button onClick={() => setPreguntaActual(preguntaActual - 1)} variant="contained" color="secondary">
              ANTERIOR
            </Button>

            <Button onClick={() => setPreguntaActual(preguntaActual + 1)} variant="contained" color="success">

              SIGUIENTE
            </Button>
         

          </div>
        </FormControl>
      </div>




    </div>

  );
}

export default App;
