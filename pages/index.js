import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import fetch from 'isomorphic-unfetch';
import Home from './home';

const Index = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <Home /> */}
      {
        posts.map(p => <span>{p.title}</span>)
      }
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