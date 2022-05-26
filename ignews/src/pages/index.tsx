import styles from '../../styles/home.module.scss';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
   <React.Fragment>
        <Head>
          <title>
          Inicio | id.news
          </title>
        </Head>
        <h1 className={styles.title}>
          Ig <span>News</span>
        </h1>
   </React.Fragment>
  )
}
