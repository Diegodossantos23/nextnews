import { AppProps } from 'next/app';
import React from 'react';
import '../../styles/global.scss';
import { Header } from '../components/Header/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Header/>
     <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
