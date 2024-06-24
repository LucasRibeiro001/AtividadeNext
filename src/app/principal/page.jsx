import React from 'react';
import styles from './page.module.css'

const Main = () => {
    return (
        
        <div className={styles.main} id="main">

            <div className={styles.navbar}>
                <div className={styles.logo}>Finance</div>
                <ul>
                    <li>Desempenho</li>
                    <li>Lembretes</li>
                    <li>Perfil</li>
                </ul>
            </div>

            <div className={styles.title}>Receitas</div>
            <div className={styles.receitas}>
                <label htmlFor="fixa" className={styles.label}>Fixa:</label>
                <input type="text" id="fixa" className={styles.input} placeholder="R$ 0,00" />
                <label htmlFor="extra" className={styles.label}>Extra:</label>
                <input type="text" id="extra" className={styles.input} placeholder="R$ 0,00" />
                <button className={styles.button}>Adicionar</button>
            </div>
            <div className={styles.despesas}>
                <div className={styles.title}>Despesas</div>
                <label htmlFor="agua" className={styles.label}>Água:</label>
                <input type="text" id="agua" className={styles.input} placeholder="R$ 0,00" />
                <label htmlFor="energia" className={styles.label}>Energia:</label>
                <input type="text" id="energia" className={styles.input} placeholder="R$ 0,00" />
                <label className={styles.label} htmlFor="internet">Internet:</label>
                <input type="text" id="internet" className={styles.input} placeholder="R$ 0,00" />
                <button className={styles.button}>Calcular</button>
            </div>

            <div className={styles.title}>Resultados</div>
            
            <div className={styles.results}>
            
                <div>
                    <p>Saldo atual</p>
                    <p className={styles.current}>R$ 0,00</p>
                </div>
                <div>
                    <p>Saída</p>
                    <p className={styles.outgoing}>R$ 0,00</p>
                </div>
            </div>
        </div>
    );
};

export default Main;
