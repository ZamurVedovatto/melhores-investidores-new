import Link from "next/Link";
import Head from 'next/head';
import Layout from "../layout";

const { Component } = require("react");

class ArticleRecentCard extends Component {
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
      <li>
        <Link href={`artigos/${url}`} >
          <a className="jl_small_format feature-image-link image_post featured-thumbnail" title={title}>
            <img width="120" height="120" src={images[1]} className="attachment-disto_small_feature size-disto_small_feature wp-post-image" alt={title} />
            <div className="background_over_image"></div>
          </a>
        </Link>
        <div className="item-details">
          <span className="meta-category-small">
            <Link href={`artigos/${url}`} >
              <a className="post-category-color-text" style={{ background: "#d800f9" }} href="post-layout-6.html#">{categories[0]}</a>
            </Link>
          </span> 
          <h3 className="feature-post-title">
            <Link href={`artigos/${url}`} >
              <a>{title}</a>
            </Link>
          </h3>
          <span className="post-meta meta-main-img auto_image_with_date">
            <span className="post-date"><i className="fa fa-clock-o"></i>{date}</span>
          </span>
        </div>
    </li>
    )
  }
}

export default ArticleRecentCard;