import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda a técnica pomodoro</a>
      <a href='https://www.linkedin.com/in/gabriel-massaia-8710b1222/https://www.linkedin.com/notifications/?filter=all'>
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </a>
    </footer>
  );
}
