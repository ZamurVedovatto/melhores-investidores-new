import { Component } from 'react';
import literaturaStyles from './literatura.module.scss';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import LivrosMain from './../components/livros/LivrosMain';

class DicionarioDoInvestidor extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    }
  }

  render() {

    return (
      <Layout>
        <Head>
          <title>{siteTitle} - Literatura</title>
        </Head>
        <LivrosMain />
      </Layout>
    )

  }
}

export default DicionarioDoInvestidor;