import './../styles/General.scss';
import { Fragment } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Home from './home';
import Categoria from './categoria';
import PostLink from './../components/PostLink';

const Index = (props) => {
  const { posts } = props;

  return (
    <Fragment>
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