
import styles from './Card.module.css';

function Card({ titulo, conteudo }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.titulo}>{titulo}</h4>
      <p className={styles.conteudo}>{conteudo}</p>
    </div>
  );
}

export default Card;
