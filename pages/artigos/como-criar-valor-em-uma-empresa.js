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

import data from "./../../lib/posts/1.json";

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
                        <p>
                        Quando se pensa em empreender, é preciso ter a resposta de três perguntas fundamentais para montar o seu modelo de negócios: <span className="font-weight-bold">O quê, por quê e como</span>.
                        </p>
                        <p>
                        <span className="font-weight-bold">O Quê</span> é a etapa principal. Traz a definição do negócio, o propósito da empresa. É de fato o que o empreendedor quer levar aos seus clientes e quem serão esses clientes. Já as perguntas <span className="font-weight-bold">Por Quê e Como</span>, são a base para a criação do valor de uma empresa, ou seja, são a identidade da marca.
                        </p>
                        <p>
                        A resposta do "porquê fazemos o que fazemos" é a essência do negócio. É ter um posicionamento claro e firme do objetivo e é esse objetivo que vai definir a estratégia de crescimento e de valorização da marca. E o "como" essa estratégia se transformará em ação serão as leis que guiaram os colaboradores a atingirem o objetivo.
                        A proposta do valor aparece no plano de negócio, mas existem alguns pilares para que essa cultura seja fortalecia e os valores propostos se tornem consistentes.
                        </p>
                        <blockquote>
                          <p>Quando se pensa em empreender, é preciso ter a resposta de três perguntas fundamentais para montar o seu modelo de negócios: O Quê, Por Quê e Como.</p>
                        </blockquote>
                        <p className={`${artigoStyles.subtitle}`}>1) Envolvimento dos colaboradores</p>
                        <p>
                        Não é novidade que empregados motivados rendem muito mais. Mas não é apenas motivação, é transformar os funcionários em defensores da marca. Trata-se de engajar, desenvolver e reconhecer. É incentivar o colaborador a ter sentimento de dono, de trazer soluções e inovações alinhados aos Valores e propósitos da companhia. A Ambev, por exemplo, tem 10 princípios que norteiam os seus valores. Dos 10, 7 são diretamente relacionados aos seus colaborares e seus desempenhos.
                        </p>
                        <p className={`${artigoStyles.subtitle}`}>2) Inovação</p>
                        <p>
                          <img className="wp-image-4861 alignleft"  src={info.images[1]} alt="" width="338" height="423" />Inovação não precisa ser necessariamente um produto ou serviço novo, e sim a maneira como esse produto é oferecido ao cliente. Para isso, é necessário conhecer o consumidor, entender o mercado e com isso proporcionar uma nova experiência, objetivando conquistar e fidelizar o cliente. A Apple é um excelente exemplo. O IPod, Iphone e Ipad já eram produtos existentes no mercado, mas ainda não tinham atingido seu potencial máximo. Inovação, qualidade e excelência fazem parte dos valores da Apple.</p>
                        
                        <p className={`${artigoStyles.subtitle}`}>3) Responsabilidade Social</p>
                        <p>Significa que a empresa vai além do propósito de lucrar. Uma empresa que tem em seus valores Responsabilidade Social não se preocupa apenas com o seu desempenho e o de seus colaboradores. Ela também se preocupa com os seus clientes, fornecedores e meio ambiente. O mercado e os consumidores estão cada vez mais atentos ao consumo inteligente e a sustentabilidade. A responsabilidade social torna-se um fator decisivo não apenas para os clientes, mas também para os acionistas que irão investir na empresa.
                        </p>
                        <p>
                        Os valores criados para sua empresa vão definir o valor da sua marca no mercado. E se você ainda tem dúvida do peso da marca, Jeff Bezos, CEO da Amazon, empresa mais valiosa do mundo, simplifica essa explicação: "marca é o que as pessoas dizem sobre você quando você não está na sala".
                        </p>
                      </div>
                      {/* Fim - Conteudo aqui */}
  
  
                      <div className="clearfix"></div>
                      <div className="single_tag_share">
                        <PostHashs hashtags={info.hashtags} />
                        <PostShare related={info.related} />
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