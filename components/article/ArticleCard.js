import Link from "next/Link";
import Head from 'next/head';
import Layout from "../layout";

const { Component } = require("react");

class ArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info,
      isLoading: false
    }
  }
      
  render() {
    const { id, title, url, images, categories, author, date, hashtags, related } = this.state.info;

    return (
      <div className="box jl_grid_layout1 blog_grid_post_style post-4761 post type-post status-publish format-standard has-post-thumbnail hentry category-sports">
        <div className="post_grid_content_wrapper">
          <div className="image-post-thumb">
            <Link href={`artigos/${url}`} >
              <a className="link_image featured-thumbnail" title={title}>
                <img width="780" height="450" src={images[0]} className="attachment-disto_large_feature_image size-disto_large_feature_image wp-post-image" alt="" />
                <div className="background_over_image"></div>
              </a>
            </Link>
            {
              categories && categories.map(category => 
                <span key={category} className="meta-category-small">
                  <a className="post-category-color-text" style= {{ background: "#36c942" }} href={`artigos&category=${category}`}>{category}</a>
                </span> 
              )
            }
          </div>
          <div className="post-entry-content">
            <div className="post-entry-content-wrapper">
              <div className="large_post_content">
                <h3 className="image-post-title">
                  <a href={`/artigos/${url}`}>{title}</a>
                </h3>
                <span className="jl_post_meta">
                  <span className="jl_author_img_w">
                    <img src="/img/favicon-zamur.png" width="30" height="30" alt={author} className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" />
                    <a href={`/artigos&author=${author}`} title={`Artigos por ${author}`} rel="author">{author}</a>
                  </span>
                  <span className="post-date">
                    <i className="fa fa-clock-o"></i>{date}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleCard;