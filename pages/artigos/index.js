import React, { Component } from 'react';
import axios from 'axios';

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
import ArticleCard from '../../components/article/ArticleCard';

class ArtigoMain extends Component {
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
    console.log(info);
    return (
      <Layout>
        <Head>
          <title>{this.state.info.title}</title>
        </Head>
        <div className="jl_post_loop_wrapper jl_grid_4col_home">
          <div className="container" id="wrapper_masonry">
            <div className="row">
              <div className="col-md-12 grid-sidebar">
                <div className="jl_wrapper_cat">
                  <div id="content_masonry">
                    <ArticleCard info={info} />
                    <ArticleCard info={info} />
                    <ArticleCard info={info} />
                    <ArticleCard info={info} />
                    <ArticleCard info={info} />
                    <ArticleCard info={info} />
                    <ArticleCard info={info} />
                    <ArticleCard info={info} />
                  </div>
                </div>
                <nav className="jellywp_pagination">
                  <ul className="page-numbers">
                    <li><span aria-current="page" className="page-numbers current">1</span>
                    </li>
                    <li><a className="page-numbers" href="index-1.html#">2</a>
                    </li>
                    <li><a className="page-numbers" href="index-1.html#">3</a>
                    </li>
                    <li><span className="page-numbers dots">&hellip;</span>
                    </li>
                    <li><a className="page-numbers" href="index-1.html#">6</a>
                    </li>
                    <li><a className="next page-numbers" href="index-1.html#"><i className="fa fa-long-arrow-right"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArtigoMain;