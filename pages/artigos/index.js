import React, { Component } from 'react';
import Layout from '../../components/layout'
import data from "./../../lib/posts/posts.json";
import ArticleCard from '../../components/article/ArticleCard';

class ArtigoMain extends Component {
  // TODO carregar params para selecionar posts por categories
  // https://nextjs.org/docs/routing/dynamic-routes

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    this.setArticlesData();
  }

  setArticlesData() {
    let articles = data;
    this.setState({ articles })
  }

  render() {
    const { articles } = this.state;

    return (
      <Layout>
        <div className="jl_post_loop_wrapper jl_grid_4col_home">
          <div className="container" id="wrapper_masonry">
            <div className="row">
              <div className="col-md-12 grid-sidebar">
                <div className="jl_wrapper_cat">
                  <div id="content_masonry">
                    {
                      articles && articles.map(post => 
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
}

export default ArtigoMain;