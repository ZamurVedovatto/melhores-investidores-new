const { Component } = require("react");
import data from "./../../lib/posts/posts.json";
import ArticleRecentCard from "../article/ArticleRecentCard";

class PostSidebarPosts extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    this.setArticles();
  }

  setArticles() {
    let articles = data.reverse().slice(0,4);
    this.setState({ articles })
  }

  render() {
    const { articles } = this.state;
    return(
      <div id="disto_recent_post_widget-7" className="widget post_list_widget">
        <div className="widget_jl_wrapper"><span className="jl_none_space"></span>
          <div className="widget-title">
            <h2>Artigos Recentes</h2>
          </div>
          <div>
            <ul className="feature-post-list recent-post-widget">
              {
                articles && articles.map(post => 
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