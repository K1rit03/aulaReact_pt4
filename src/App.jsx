import { useState } from 'react'; // Importando useState
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cabecalho />
      <Home />
      <Rodape />
    </>
  );
}

export default App;
