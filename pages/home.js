import Head from 'next/head';
import './../styles/Home.scss';
import OldLayout from './../components/OldLayout';

const Home = () => {
  return (
    <section className="section-home">
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
        <title>Melhores Investidores - Investimento certo</title>
      </Head>

      <OldLayout />
    </section>
  )
}

export default Home;