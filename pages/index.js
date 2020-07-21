import './../styles/General.scss';

import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Home from './home';
import PostLink from './../components/PostLink';

const Index = (props) => {
  const { posts } = props;

  return (
    <Layout>
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