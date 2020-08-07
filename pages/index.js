import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Home from './home';

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home />
    </Layout>
  )
}

export default Index;