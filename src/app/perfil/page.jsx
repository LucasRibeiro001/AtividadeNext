import Head from 'next/head';
import styles from './page.module.css';
import Image from 'next/image';



function ProfilePage() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>User Profile</title>
        <link rel="stylesheet" href="styles.css" />
      </Head>

      <div className={styles.options}>
        Configurações de Perfil
      </div>

      <div className={styles.profile}>
        <Image src='/home/user.jpg' width={150} height={150}/>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Nome de usuário</label>
          <input type="text" id="username" value="João da Silva" />
          <button className={styles.editBtn}>&#9998;</button>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" value="******" />
          <button className={styles.editBtn}>&#9998;</button>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" value="joaosilva@gmail.com" />
          <button className={styles.editBtn}>&#9998;</button>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.saveBtn}>Salvar Alterações</button>
          <button className={styles.resetBtn}>Redefinir Alterações</button>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;