import React from 'react';
import Layout from '../../components/layout'
import data from "./../../lib/posts/posts.json";
import ArticleCard from '../../components/article/ArticleCard';

function ArtigoMain() {
  return (
    <Layout>
      <div className="jl_post_loop_wrapper jl_grid_4col_home">
        <div className="container" id="wrapper_masonry">
          <div className="row">
            <div className="col-md-12 grid-sidebar">
              <div className="jl_wrapper_cat">
                <div id="content_masonry">
                  {
                    data && data.map(post => 
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

export default ArtigoMain;