import React from 'react';
import styles from './page.module.css';

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Entrar</h2>
      <div className={styles.inputGroup}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/new-post.png" alt="Email Icon" className={styles.icon} />
        <input type="email" placeholder="Email" className={styles.input} />
      </div>
      <div className={styles.inputGroup}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/lock-2.png" alt="Password Icon" className={styles.icon} />
        <input type="password" placeholder="Senha" className={styles.input} />
      </div>
      <a href="#" className={styles.forgotPassword}>Esqueceu a senha?</a>
      <button className={`${styles.btn} ${styles.btnPrimary}`}>Entrar</button>
      <p className={styles.signup}>Não possui uma conta? <a href="#" className={styles.signupLink}>Cadastrar</a></p>
      <div className={styles.divider}>Ou</div>
      <button className={`${styles.btn} ${styles.btnFacebook}`}>
        <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" alt="Facebook Icon" className={styles.btnIcon} />
        Entrar com Facebook
      </button>
      <button className={`${styles.btn} ${styles.btnGoogle}`}>
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon" className={styles.btnIcon} />
        Entrar com Google
      </button>
    </div>
  );
};

export default LoginForm;
