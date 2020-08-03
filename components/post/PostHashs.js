import React, { Component } from "react";
import Link from "next/Link";

class PostHashs extends Component {
  render() {
    const { hashtags } = this.props;
    return (
      <div className="tag-cat">
        <ul className="single_post_tag_layout">
          {
            hashtags.map((hashtag) => (
              <li key={hashtag}>
                <Link href={`/dicionario-do-investidor?term=${hashtag}`}>
                  <a rel="tag">{hashtag}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default PostHashs;