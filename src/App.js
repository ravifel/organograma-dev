import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <div>
      <Banner />
      <CampoTexto label="Nome" />
      <CampoTexto label="Cargo" />
      <CampoTexto label="Imagem" />
    </div>
  );
}

export default App;
