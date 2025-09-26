
import Alerta from './Componentes/Alerta'
import Botao from './Componentes/Button'
import ListaAlunos from './Componentes/ListaAlunos'
import Header from './Componentes/Header'; // Importa o cabeçalho
import Footer from './Componentes/Footer'; // Importa o rodapé


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
<H2>Ana, Lucas, Carlos, Jonas</H2>
</div>

  <div>
  <h1>Eventos no React</h1>
  <Botao />
  </div>
  

 <div>
 <Alerta tipo="sucesso" />
 <Alerta tipo="erro" />
 <Alerta tipo="aviso" />
 </div>




  </>
  )
  }
  
  export default App

  