import React, { Component, useState, useEffect } from "react";
import Link from "next/Link";

const PostHashs = (props) => {
  const [ hashtags, setHashtags] = useState([]);
  useEffect(() => {
    setHashtags(prosp.hashtags);
  }, [props.hashtags]);

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

export default PostHashs;