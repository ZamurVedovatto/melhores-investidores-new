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

import data from "./../../lib/posts/posts.json";

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
      info: data[0]
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
                        Um empreendedor deve ter na ponta da língua a resposta de três perguntas primordiais para o sucesso do seu negócio: <span className="font-weight-bold">O quê, por quê e Como</span>.
                        </p>
                        <p>
                        A pergunta <span className="font-weight-bold">"O quê?"</span> deve trazer em sua resposta a definição do negócio, ou melhor dizendo, o propósito da empresa. Nesta resposta teremos o que terá terá valor para o cliente e quem serão esses clientes. As outras duas perguntas, <span className="font-weight-bold">"Por quê?" e "Como?"</span> trarão em suas respostas a base para se criar valor na sua empresa, a identidade da marca.
                        </p>

                        <p>
                        O <span className="font-weight-bold">"Como?</span> são as ações que guiarão todos os colaboradores para que o negócio atinja os seus objetivos. É o envolvimento de todos que atuam no dia-a-dia da empresa do alinhado à estratégias do negócio.
                        </p>

                        <p>
                        Para que os valores da organização façam parte do cotidiano e se tornem consistentes, podemos nos apegar a três pilares que nos guiarão a atingir nossos objetivos.
                        </p>

                        <blockquote>
                          <p>Quando se pensa em empreender, é preciso ter a resposta de três perguntas fundamentais para montar o seu modelo de negócios: O Quê, Por Quê e Como.</p>
                        </blockquote>
                        <p className={`${artigoStyles.subtitle}`}>1) Envolvimento genuíno dos colaboradores</p>
                        <p>
                        Não à toa, os colaboradores são os clientes internos de uma organização. Se os próprios colaboradores não abraçarem a causa do negócio, tenha certeza que os clientes externos também não o farão. Além de manter os colaboradores motivados, acolhendo-os em suas ambições e valorizando suas características, devemos transformá-los em defensores genuínos da marca. Isso se dará quando os colaboradores se sentirem engajados ao negócio, tenham a sensação de reconhecimento de que estão se desenvolvendo ao cumprirem suas tarefas e atingirem suas metas.
                        </p>
                        <p>
                        Um colaborador engajado passa a ter a sensação de dono do negócio e sua atuação será diferenciada. São colaboradores engajados que trazem soluções e inovações alinhadas ao propósito do negócio.
                        </p>
                        <p className={`${artigoStyles.subtitle}`}>2) Inovação</p>
                        <p>
                          <img className="wp-image-4861 alignleft"  src={info.images[1]} alt="" width="338" height="423" />Inovação não precisa ser necessariamente um produto ou serviço novo, e sim a maneira como esse produto é oferecido ao cliente. Para isso, é necessário conhecer o consumidor, entender o mercado e com isso proporcionar uma nova experiência, objetivando conquistar e fidelizar o cliente. A Apple é um excelente exemplo. O IPod, Iphone e Ipad já eram produtos existentes no mercado, mas ainda não tinham atingido seu potencial máximo. Inovação, qualidade e excelência fazem parte dos valores da Apple.
                        </p>
                        <p className={`${artigoStyles.subtitle}`}>3) Responsabilidade Social</p>
                        <p>Significa que a empresa vai além do propósito de lucrar. Uma empresa que tem em seus valores Responsabilidade Social não se preocupa apenas com o seu desempenho e o de seus colaboradores. Ela também se preocupa com os seus clientes, fornecedores e meio ambiente. O mercado e os consumidores estão cada vez mais atentos ao consumo inteligente e a sustentabilidade. A responsabilidade social torna-se um fator decisivo não apenas para os clientes, mas também para os acionistas que irão investir na empresa.
                        </p>

                        <blockquote>
                          <p>Os valores criados para sua empresa vão definir o valor da sua marca no mercado.</p>
                        </blockquote>

                      </div>
                      {/* Fim - Conteudo aqui */}
  
  
                      <div className="clearfix"></div>
                      {/* <div className="single_tag_share">
                        <PostHashs hashtags={info.hashtags} />
                        <PostShare related={info.related} />
                      </div> */}
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