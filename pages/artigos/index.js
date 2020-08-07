import React, { Component } from 'react';
import Layout from '../../components/layout';
import ArticleCard from '../../components/article/ArticleCard';
import fetch from 'isomorphic-unfetch';

const ArtigoMain = (props) => {
  // TODO carregar params para selecionar posts por categories
  // https://nextjs.org/docs/routing/dynamic-routes

  const { posts } = props;

  return (
    <Layout>
      <div className="jl_post_loop_wrapper jl_grid_4col_home">
        <div className="container" id="wrapper_masonry">
          <div className="row">
            <div className="col-md-12 grid-sidebar">
              <div className="jl_wrapper_cat">
                <div id="content_masonry">
                  {
                    posts && posts.map(post => 
                      <ArticleCard key={post.id} info={post} />
                    )
                  }
                </div>
              </div>
              {/* TODO  colocar infinite scrool aqui */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )

}

ArtigoMain.getInitialProps = async ( context ) => {
  const data = await fetch('http://localhost:3000/api/posts');
  const results = await data.json();
  return {
    posts: results
  }
}

export default ArtigoMain;