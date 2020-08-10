import Link from "next/Link";

const { Component, useState, useEffect } = require("react");

const ArticleRecentCard = (props) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    let info = {
      id: props.post.id,
      title: props.post.title,
      url: props.post.url,
      images: props.post.images,
      categories: props.post.categories,
      author: props.post.author,
      date: props.post.date,
      hashtags: props.post.hashtags,
      related: props.post.related
    }
    setInfo(info);
  }, [props.post]);

  return (
    <li>
      <Link href={info.url} >
        <a className="jl_small_format feature-image-link image_post featured-thumbnail" title={info.title}>
          <img width="120" height="120" src={info.images[0]} className="attachment-disto_small_feature size-disto_small_feature wp-post-image" alt={info.title} />
          <div className="background_over_image"></div>
        </a>
      </Link>
      <div className="item-details">
        <span className="meta-category-small">
          {
            info.categories && info.categories.map(category => 
              <a className="post-category-color-text" style={{ background: "#d800f9" }}>
                {category}
              </a>
            )
          }
        </span> 
        <h3 className="feature-post-title">
          <Link href={info.url} >
            <a>{info.title}</a>
          </Link>
        </h3>
        <span className="post-meta meta-main-img auto_image_with_date">
          <span className="post-date"><i className="fa fa-clock-o"></i>{info.date}</span>
        </span>
      </div>
    </li>
  )
}

export default ArticleRecentCard;