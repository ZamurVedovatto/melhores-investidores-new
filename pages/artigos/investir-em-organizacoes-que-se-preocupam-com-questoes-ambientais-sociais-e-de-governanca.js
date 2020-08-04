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
      info: data[4],
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
                        {/* <p>Mais importante do que termos boas idéias é colocarmos nossas ideias em prática e, melhor ainda, concluí-las, terminar os projetos iniciados. É claro que também é importante criarmos nossos projetos baseados em uma boa teoria, mas nada mais motivante e revigorante do que tirar as ideias do papel e vê-las criando corpo.</p> */}
                        <p>O mundo caminha para a direção onde todos devem agir pensando nas consequências dos seus atos, fazendo o bem para os outros e para o mundo em que vivemos. E não seria diferente no mundo dos investimentos.</p>

                        <p>A preocupação Ambiental, Social e de Governança (sigla ESG em inglês - Environmental, social and corporate governance), trata-se dos três pilares primordiais a serem considerados em um processo de análise de investimentos. Segundo quem defende a teoria, a incorporação dos três critérios tende a minimizar os riscos dos investimentos e trazer retornos maiores a <a uk-tooltip={this.openDict('longo prazo')} className={`${artigoStyles.dictLink}`}>longo prazo</a>.</p>
                        
                        <p>
                          <img className="wp-image-4861 alignleft" src={info.images[1]} alt="" width="338" height="423" />Em nosso país, as <a uk-tooltip={this.openDict('organização')} className={`${artigoStyles.dictLink}`}>organizações</a> ainda não tem suas <a uk-tooltip={this.openDict('estratégia empresarial')} className={`${artigoStyles.dictLink}`}>estratégias</a> voltadas fortemente para os aspectos de preocupação ambiental, social e de governança. São critérios que, por muitas vezes, são contornados e inseridos nos relatórios da empresa somente para preencher o checklist de empresa sustentável ou algo relacionado a isso.
                        </p>
                        <p>Mas há de se considerar que a temática do ESG vem se alastrando e é algo que, certamente, tende a se disseminar. Atualmente tem gestores de fundos de investimentos que optam por não investir em certos setores, tais como de bebidas, armas e cigarros, mas o buraco é mais embaixo. Os critérios ESG devem fazer parte do dia a dia da empresa, desde a forma como se gerencia, o processo de contratação de <a uk-tooltip={this.openDict('fornecedor')} className={`${artigoStyles.dictLink}`}>fornecedores</a> até o processo de seleção de pessoal, onde todas as etapas devem se modificar a fim de se enquadrarem ao ESG.</p>
                        <blockquote>
                          <p>Você considera importante investirmos em empresas que efetivamente se preocupam com os critérios do ESG?</p>
                        </blockquote>
                        <p>A análise do investidor e dos gestores de investimento, quando baseada nos pilares do ESG, tende a exigir que os líderes das empresas se adaptem continuamente aos seus critérios. É uma tendência de crescimento orgânico, onde as organizações acabarão tendo que se adequar ao que os investidores exigem.
                        </p>  
                        <p>E você, considera importante que foquemos as nossas análises e investimentos em organizações que se preocupam efetivamente com os critérios do <a uk-tooltip={this.openDict('esg')} className={`${artigoStyles.dictLink}`}>ESG</a>?</p>

                        <p className={`${artigoStyles.subtitle}`}>Referências</p>
                        <p>
                          <a href="https://m.sebrae.com.br/sites/PortalSebrae/artigos/o-que-sao-estrategias-empresariais,e4df6d461ed47510VgnVCM1000004c00210aRCRD" target="_blank">SEBRAE</a>
                        </p>
                        <p>
                          <a href="https://conteudos.xpi.com.br/coe/relatorios/esg-investimentos-sustentaveis-e-rentaveis/" target="_blank">XP Investimentos</a>
                        </p>
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