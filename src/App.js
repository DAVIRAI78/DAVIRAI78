import { useState } from 'react';
import Banner from './componente/Banner/Banner';
import Formulario from './componente/CampoTexto/Formulario';
import Catalogo from './componente/Catalogo';

function App() {

  const catalogo = [
    {
      nome: " Ricambi : www.euautopezzi.it", 
      corPrimaria: "#57C278",
      corSecondaria: "#D9F7E9",
    },
    {
      nome: "Carrozzeria : www.auto-doc.it",
      corPrimaria: "#82CFFA",
      corSecondaria: "#E8F8FF"
    },
    {
      nome: "Accessori : www.mtelaborazioni.it",
      corPrimaria: "#A6D157",
      corSecondaria: "#F0F8E2"
    }
    ]
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {catalogo.map (catalogo => <Catalogo key={catalogo.nome} nome={catalogo.nome} corPrimaria={catalogo.corPrimaria} corSecondaria={catalogo.corSecondaria} />)}
    </div>
  );

}

export default App;
