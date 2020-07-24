import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Home from './home';

const Index = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home />
    </Layout>
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