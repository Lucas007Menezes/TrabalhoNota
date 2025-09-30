
import Alerta from './Componentes/Alerta';
import ListaAlunos from './Componentes/ListaAlunos';
import Header from './Componentes/Header'; 
import Footer from './Componentes/Footer'; 
import Button from './Componentes/Button';
import Acoes from './Componentes/Acoes';
import Card from './Componentes/Card';

const handleButtonClick = () => {alert("O botão futurista foi clicado!");};

function App() {
  return (
  <>
  <div>
  <h1>Olá, sejá bem-vindo</h1>
  <h2>Lucas Menezes</h2>
  </div>

  
  <div>
  <Header />
  <main>
  <h1>Aplicação React</h1>
  <p>ADS (Front-End) 2MA - UniNassau</p>
  </main>
  <Footer />
  </div>

<div>
  <ListaAlunos /> 
</div>

  <div>
  <h1>Play React</h1>
  </div>

  <div>
  <Button texto= "Clique aqui"
  onClick={handleButtonClick}/>
  </div>
  

 <div>
 <Alerta tipo="sucesso" />
 <Alerta tipo="erro" />
 <Alerta tipo="aviso" />
 </div>

<div>
<Acoes texto="Salvar" />
<Acoes texto="Cancelar" />
<Acoes texto="Enviar" />

</div>


<div>
<h2></h2>
<Card titulo="React" conteudo="Biblioteca para construir interfaces." />
<Card titulo="Vite" conteudo="Ferramenta rápida de build e dev server." />
</div>





  </>
  )
  }
  
  export default App

  