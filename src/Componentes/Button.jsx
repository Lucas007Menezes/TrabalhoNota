import styles from './Button.module.css';

function Button({ texto, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {texto}
    </button>
  );
}

export default Button;
  