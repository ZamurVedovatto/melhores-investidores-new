import './../styles/General.scss';
import { Fragment } from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Home from './home';

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