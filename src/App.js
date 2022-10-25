import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="Dara Science"/>
    </div>
  );
}

export default App;
