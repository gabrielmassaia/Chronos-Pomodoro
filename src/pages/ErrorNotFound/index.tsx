import styles from './styles.module.css';

export function ErrorNotFound() {
  return (
    <>
      <div className={styles.error}>
        <h3>Opsss.... Você acabou se perdendo</h3>
        <div>
          <a href=''>
            <button className={styles.buttonHome}>Voltar para Home</button>
          </a>
        </div>
      </div>
    </>
  );
}
