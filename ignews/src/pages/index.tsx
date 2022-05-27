import Head from 'next/head';
import React from 'react';

import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
   <React.Fragment>
        <Head>
          <title>
           Home | id.news
          </title>
        </Head>
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>👏 Hey, Welcome</span>
            <h1>News about the <span>React</span> world.</h1>
            <p>
              Get access to all the publications <br/>
              <span>$for $9.90 month</span>
            </p>
          </section>

          <img src="/images/avatar.svg" alt="Girl coding"/>
        </main>
   </React.Fragment>
  )
}

export default Home;
