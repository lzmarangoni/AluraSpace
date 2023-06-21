import Cabecalho from "./components/Cabecalho";
import logo from './components/Cabecalho/logo.png'
import "./styles/estilosGlobais.scss"

function App() {
  return (
    <div >
      <Cabecalho imagem={logo}/>
    </div>
  );
}

export default App;
