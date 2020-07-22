import './../styles/General.scss';
import { Fragment } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Home from './home';
import PostLink from './../components/PostLink';

const Index = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Zamur Borges Vedovatto" />
      <meta name="description" content="Melhores Investidores" />
      <link rel="shortcut icon" href='/favicon.png' type="image/x-icon" />
      <link rel="stylesheet" href="/css/bootstrap.css" type="text/css" media="all" />
      <link rel="stylesheet" href="/css/style.css" type="text/css" media="all" />
      <link rel="stylesheet" href="/css/responsive.css" type="text/css" media="all" />
      <link rel="stylesheet" href="/css/main.css" type="text/css" media="all" />
      <script src="/js/jquery.js"></script>
      <script src="/js/fluidvids.js"></script>
      <script src="/js/infinitescroll.js"></script>
      <script src="/js/justified.js"></script>
      <script src="/js/slick.js"></script>
      <script src="/js/theia-sticky-sidebar.js"></script>
      <script src="/js/aos.js"></script>
      <script src="/js/custom.js"></script>

      {/*  UIkit CSS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/css/uikit.min.css" />
      {/* UIkit JS */}
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/js/uikit.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/js/uikit-icons.min.js"></script>

      <title>Melhores Investidores - Investimento certo</title>
    </Head>
    <Layout>
      <Home />
    </Layout>
  </Fragment>
  )
}

Index.getInitialProps = async ( context ) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const results = await data.json();
  return {
    posts: results
  }
}

export default Index;