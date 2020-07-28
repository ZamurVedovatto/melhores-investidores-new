import React, { Component } from "react";

class PostHashs extends Component {
  render() {
    const { hashtags } = this.props;
    return (
      <div className="tag-cat">
        <ul className="single_post_tag_layout">
          {
            hashtags.map((hashtag) => (
              <li key={hashtag}>
                <a href="post-layout-6.html#" rel="tag">{hashtag}</a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default PostHashs;