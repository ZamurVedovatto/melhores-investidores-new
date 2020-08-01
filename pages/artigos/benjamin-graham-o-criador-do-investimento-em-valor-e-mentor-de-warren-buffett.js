import React, { Component } from 'react';

import artigoStyles from './artigos.module.scss';

import Head from 'next/head';
import Layout from '../../components/layout'
import PostTopInfo from '../../components/post/PostTopInfo'
import PostHashs from '../../components/post/PostHashs'
import PostShare from '../../components/post/PostShare'
import PostAuthor from '../../components/post/PostAuthor'
import PostRelateds from '../../components/post/PostRelateds'
import PostAnchorLinks from '../../components/post/PostAnchorLinks'
import PostSidebar from '../../components/post/PostSidebar'

import data from "./../../lib/posts/3.json";

class PostExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: {}
    }
  }

  componentWillMount() {
    this.getInfo();
  }

  getInfo() {
    this.setState({
      info: data
    })
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
    
                      {/* Conteudo aqui */}
                      <div className="post_content">
                        <p className={`${artigoStyles.subtitle}`}>Quem foi Benjamin Graham?</p>
                        <p>Economista por formação, mentor de Warren Buffett e considerado o precursor da estratégia de investimento denominada Buy and Hold. Graham é considerado um dos maiores investidores de todos os tempos.</p>
                        <p>Nascido em Londres no ano de 1894, Graham perdeu o pai na infância e sentiu na pele a pobreza, após a sua família perder todas as economias na derrocada financeira que ficou conhecida como Bank Panic (pânico dos banqueiros).</p>
                        <p>Ao invés de se tornar um coitado, Graham usou o período de sofrimento e pobreza para se tornar um ótimo estudante. Conquistou bolsa de estudos e se formou com louvor na Universidade de Columbia.</p>
                        <blockquote>
                          <p>As pessoas não conseguem prever o que irá acontecer no mercado de ações.</p>
                        </blockquote>
                        <p className={`${artigoStyles.subtitle}`}>Maturidade e criação do seu legado</p>
                        <p>Aos 25 ele já possuía grande prestígio atuando em um emprego em Wall Street. Porém, em mais um revés, sente a falência novamente na pele, perdendo quase todos os seus investimentos durante a crise de 1929.</p>
                        <p>Como lição tirada após esse momento e após se reerguer, escreve junto a David Dodd o livro que hoje é considerado um dos mais importantes sobre Análise Fundamentalista, intitulado Security Analysis.</p>
                        <blockquote>
                          <p>Uma operação de investimento é aquela que, por meio da análise, promete segurança para o principal e um retorno adequado. As operações que não vão ao encontro destas exigências são especulativas.</p>
                        </blockquote>
                        <p className={`${artigoStyles.subtitle}`}>O investidor inteligente</p>
                        <p>Porém, sua maior obra seria lançada em 1949. O Investidor Inteligente é leitura fundamental para investidores do Value Investing. Nesta obra, Graham cunha o método onde deve-se analisar os balanços patrimoniais e o fluxo de caixa da empresa para saber se a sua ação estava cara ou barata.</p>
                        <p>
                          <img className="wp-image-4861 alignleft" src={info.images[1]} alt="" width="338" height="423" />
                        </p>
                        <p>Estes princípios buscam evitar perdas e auxiliam o investidor a ter uma maior disciplina emocional.</p>
                        <p>Investindo em ações que possuem cotações menores que o seu valor intrínseco, ou seja, com maior margem de segurança, tendem a manter o investidor mais tranquilo do que aqueles que compraram ações nos topos pensando que aquele papel iria se valorizar ainda mais.</p>
                        <p className={`${artigoStyles.subtitle}`}>Lição principal</p>
                        <p>Além da margem de segurança, Graham considerava ações como negócios e não como ativos especulativos.</p>
                        <p>Hoje os seus ensinamentos são considerados válidos, atemporais e essenciais para que um investidor chegue ao sucesso ao longo prazo. E a lição principal é a de que o mercado não pode ditar as nossas decisões no de investimento.</p>
                        <p className={`${artigoStyles.subtitle} `}>Referências</p>
                        <p className={`${artigoStyles.referencias}`}>
                          <a href="https://portaleducando.com/o-guru-da-analise-fundamentalista/" target="_blank">Portal Educando</a>
                        </p>
                        <p className={`${artigoStyles.referencias}`}>
                          <a href="https://sejamidas.com/margem-de-seguranca-em-acoes/" target="_blank">Seja Mídas</a>
                        </p>
                        <p className={`${artigoStyles.referencias}`}>
                          <a href="https://clubedovalor.com.br/benjamin-graham/" target="_blank">Clube do Valor</a>
                        </p>


                        {/*
                        
                        <p className={`${artigoStyles.subtitle}`}></p>
                        <p className={`${artigoStyles.subtitle}`}></p>
                        <p className={`${artigoStyles.subtitle}`}></p>
                        <p className={`${artigoStyles.subtitle}`}></p>

                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>

                        <blockquote>
                          <p></p>
                        </blockquote>
                        <blockquote>
                          <p></p>
                        </blockquote>
                        <blockquote>
                          <p></p>
                        </blockquote>

                        <p>
                          <img className="wp-image-4861 alignleft"  src={info.imgSecondary} alt="" width="338" height="423" />
                        </p>
                        <p>
                          <img className="wp-image-4861 alignleft"  src={info.imgSecondary} alt="" width="338" height="423" />
                        </p>
                        <p>
                          <img className="wp-image-4861 alignleft"  src={info.imgSecondary} alt="" width="338" height="423" />
                        </p>
                        <p>
                          <img className="wp-image-4861 alignleft"  src={info.imgSecondary} alt="" width="338" height="423" />
                        </p>
                        
                        <p>
                          <a href="https://comoinvestir.thecap.com.br/grandes-investidores-de-sucesso-bolsa/" target="_blank">The Cap</a>
                        </p>
                        <p>
                          <a href="https://www.infomoney.com.br/perfil/warren-buffett/" target="_blank">Info Money</a>
                        </p>
                        
                        */}

                      </div>
                      {/* Fim - Conteudo aqui */}
  
  
                      <div className="clearfix"></div>
                      <div className="single_tag_share">
                        <PostHashs hashtags={info.hashtags} />
                        <PostShare related={info.related} />
                      </div>
                      <PostRelateds  />
                      <PostAuthor author={info.author} />
                      <PostAnchorLinks />
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