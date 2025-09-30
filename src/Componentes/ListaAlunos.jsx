
// src/Componentes/ListaAlunos.jsx
import styles from './ListaAlunos.module.css';

function ListaAlunos() {
  const alunos = ["Ana", "Lucas", "Carlos", "Jonas"];

  return (
    <div className={styles.container}>
      <h3 className={styles.titulo}>Lista de Alunos</h3>
      <div>
        {alunos.map((aluno, index) => (
          <div key={index} className={styles.item}>
            {aluno}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaAlunos;
