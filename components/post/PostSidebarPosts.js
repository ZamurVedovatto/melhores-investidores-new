const { Component } = require("react");
import data from "./../../lib/posts/posts.json";
import ArticleRecentCard from "../article/ArticleRecentCard";

class PostSidebarPosts extends Component {
  render() {
    return(
      <div id="disto_recent_post_widget-7" className="widget post_list_widget">
        <div className="widget_jl_wrapper"><span className="jl_none_space"></span>
          <div className="widget-title">
            <h2>Artigos Recentes</h2>
          </div>
          <div>
            <ul className="feature-post-list recent-post-widget">
              {
                data && data.map(post => 
                  <ArticleRecentCard key={post.id} info={post} />
                )
              }
            </ul>
          </div>
          <span className="jl_none_space"></span>
        </div>
      </div>
    )
  }
}

export default PostSidebarPosts;