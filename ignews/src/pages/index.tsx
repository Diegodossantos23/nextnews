import { GetStaticProps } from 'next';

import Head from 'next/head';

import React from 'react';

import { stripe } from '../services/stripe';

import { SubscribeButton } from '../components/SubscribeButton/index';

import styles from './home.module.scss';

/* 3 ways to populate a page */

// Client-side rendering
// Server-side rendering
// Static Site Generation
interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

const Home: React.FC = ({ product }: HomeProps) => {
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
              <span>for {product.amount} month</span>
            </p>
            <SubscribeButton priceId={product.priceId} />
          </section>

          <img src="/images/avatar.svg" alt="Girl coding"/>
        </main>
   </React.Fragment>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1L48tLF6zrcwSKc8OlIoTOVb', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 + 24, // 24 hours
  }
  
}
