import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Home from './home';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
  const{ posts } = props;
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home posts={posts} />
    </Layout>
  )
}

Index.getInitialProps = async ( context ) => {
  const data = await fetch('http://localhost:3000/api/posts');
  const results = await data.json();
  return {
    posts: results
  }
}

export default Index;