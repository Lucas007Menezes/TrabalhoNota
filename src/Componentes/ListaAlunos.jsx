
function ListaAlunos() {
  const alunos = ["Ana"
  ,
  "Lucas"
  ,
  "Carlos"
  ,
  "Jonas"]
  return (
  <div>
  <h2>Lista de Alunos</h2>
  <ul>
  {alunos.map((aluno, index) => (
  <li key={index}>{aluno01}</li>
  ))}
  </ul>
  </div>
  )
  }
  export default ListaAluno