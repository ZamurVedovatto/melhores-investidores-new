import React, { Component } from 'react';

import artigoStyles from './artigos.module.scss';

import Head from 'next/head';
import Layout from '../../components/layout'
import PostTopInfo from '../../components/post/PostTopInfo'
import PostHashs from '../../components/post/PostHashs'
import PostAuthor from '../../components/post/PostAuthor'
import PostSidebar from '../../components/post/PostSidebar'

import data from "./../../lib/posts/posts.json";
import dict from './../../lib/dicionario/dicionario.json';

class PostExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: {},
      dictionary: []
    }
  }

  componentWillMount() {
    this.getInfo();
  }

  getInfo() {
    this.setState({
      info: data[5],
      dictionary: dict
    })
  }

  openDict(term) {
    let significado = '';
    this.state.dictionary.forEach((termLoop) => {
      if (termLoop.termo.toLowerCase() === term.toLowerCase()) {
        significado = termLoop.conteudo[0];
      }
    })
    return significado;
  }
    
  render() {
    const { info } = this.state;
    return (
      <Layout>
        <Head>
          <title>{this.state.info.title}</title>
        </Head>
        <section className="content_main clearfix jl_spost">
          <div className="container">
            <div className="row main_content">
              <div className="col-md-8 loop-large-post" id="content">
                <div className="widget_container content_page">
                  <div className="post type-post status-publish format-standard has-post-thumbnail hentry category-crazy tag-food tag-inspiration">
                    <div className="single_section_content box blog_large_post_style">
                      <PostTopInfo info={info} />
    
                      {/* <a uk-tooltip={this.openDict('TERMOAQUI')} className={`${artigoStyles.dictLink}`}>TERMOAQUI</a> */}

                      {/* Conteudo aqui */}
                      <div className="post_content">

                        <p>Uma reserva de emergência é um montante reservado para eventualidades e imprevistos, tais como problemas de saúde, demissões, crises e eventuais momentos em que nossos rendimentos são menores do que os esperados.</p>

                        <p>Mas antes de mais nada, você sabe por que devemos ter uma reserva de emergência?
                        O motivo primordial é evitarmos dívidas e empréstimos. Este tipo de despesa normalmente possui juros altíssimos e pode nos encrencar ainda mais.
                        </p>
                        <p>Por exemplo, caso você tenha um emprego que te remunere em R$4.000,00 ao mês e as suas despesas mensais girem em torno de R$3.500,00, como você faria para pagar essas despesas se for demitido amanhã? Optando por um empréstimo, momentaneamente você vai conseguir arcar com suas despesas, mas logo o montante que você pegou emprestado acabará e, além das despesas fixas mensais, você agora tem as parcelas do empréstimo para quitar.</p>

                        <p>
                          <img className="wp-image-4861 alignleft" src={info.images[1]} alt="" width="338" height="423" />Agora, se a eventualidade da demissão citada acima acontecesse e você tenha se preparado antes, criando uma reserva de emergência que supra as suas necessidades básicas por um período de 6 a 12 meses, você não precisará recorrer a um empréstimo bancário e nem pedir dinheiro para amigos ou familiares. Tendo a reserva de emergência, você estará mais tranquilo em relação às suas despesas enquanto você se adequa ao momento até conquistar uma nova oportunidade de trabalho ou crie um novo negócio.
                        </p>

                        <p>Os valores da reserva de emergência devem ser alocados em investimentos seguros e de alta <a uk-tooltip={this.openDict('liquidez')} className={`${artigoStyles.dictLink}`}>liquidez</a>, desta forma, poderemos utilizá-los assim que houver necessidade e sem ter uma surpresa inconveniente do montante estar menor do que o investido.</p>

                        <blockquote>
                          <p>A bolsa de valores é o maior instrumento de preservação de patrimônio e multiplicação de capital ao longo do tempo, se soubermos escolher as ações certas</p>
                        </blockquote>

                        <p>Um outro ponto importante é criar a nossa reserva de emergência antes de começar a investir. Os investimentos em <a uk-tooltip={this.openDict('renda variável')} className={`${artigoStyles.dictLink}`}>renda variável</a> tem a qualidade de serem interessantes a médio e <a uk-tooltip={this.openDict('longo prazo')} className={`${artigoStyles.dictLink}`}>longo prazo</a>, devido ao crescimento do valor patrimonial das empresas, crescimento dos lucros, aquisições, entre outros. A bolsa de valores é o maior instrumento de preservação de patrimônio e multiplicação de capital ao longo do tempo, se soubermos escolher as <a uk-tooltip={this.openDict('ação')} className={`${artigoStyles.dictLink}`}>ações</a> certas.</p>

                        <p>Mas, caso você precise vender parte das suas ações para quitar uma eventual emergência, o seu patrimônio pode estar valendo menos do o que foi investido (investimentos em ações/bolsa de valores são investimentos de renda variável), e isso fará você perder dinheiro. Além do mais, optando pelo <a uk-tooltip={this.openDict('value investing')} className={`${artigoStyles.dictLink}`}>value investing</a> e/ou <a uk-tooltip={this.openDict('buy and hold')} className={`${artigoStyles.dictLink}`}>buy and hold</a>, em poucos momentos devemos nos desfazermos de nossas ações, e cobrir uma eventual emergência não é um deles.</p>

                      </div>
                      {/* Fim - Conteudo aqui */}  
  
                      <div className="clearfix"></div>
                      <div className="single_tag_share">
                        <PostHashs hashtags={info.hashtags} />
                        {/* <PostShare related={info.related} /> */}
                      </div>
                      {/* <PostRelateds  /> */}
                      <PostAuthor author={info.author} />
                      {/* <PostAnchorLinks /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" id="sidebar">
                <PostSidebar />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PostExample;