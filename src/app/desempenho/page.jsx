// components/Header.js
import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';

export default function Page (){
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.title}>Desempenho</div>
      
      <div className={styles.filter}>

        <label htmlFor="filter" className={styles.label}>Filtrar</label>

        <select id="filter" className={styles.select}>

          <option value="agua">Água</option>
          <option value="energia">Energia</option>
          <option value="energia">Internet</option>
          <option value="energia">Escola</option>
          <option value="energia">Telefone</option>
        </select>
        
      </div>
      
      </div>
    <div className={styles.chart}>
      <Image src="/home/chart.png" alt="chart" width={500} height={500} />
    </div>
      
      
      </div>
  );
}