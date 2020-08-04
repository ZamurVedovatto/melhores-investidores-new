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



                        <p>
                          <img className="wp-image-4861 alignleft" src={info.images[1]} alt="" width="338" height="423" />textoaqui
                        </p>

                        <p>
                          <img className="wp-image-4861 alignleft" src={info.images[1]} alt="" width="338" height="423" />textoaqui
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