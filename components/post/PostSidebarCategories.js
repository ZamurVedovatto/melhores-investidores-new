const { Component } = require("react");
import data from "./../../lib/posts/posts.json";

class PostSidebarCategories extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
  }

  componentWillMount() {
    this.setCategories();
  }

  setCategories() {
    let artigos = data;
    let categories = [];
    artigos.map((artigo) => {
      artigo.categories.map((cat) => categories.push(cat))
    })
    categories = this.uniq(categories);
    this.setState({
      categories
    })
  }

  count(value) {
    return this.filter(x => x==value).length;
  }

  uniq(array) {
    return array.sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
  }

  render() {
    const { categories } = this.state;
    return(
      <div id="disto_category_image_widget_register-5" className="widget jellywp_cat_image">
        <div className="wrapper_category_image">
          <div className="category_image_wrapper_main">
            {
              categories && categories.map(category => 
                <div key={category} className="category_image_bg_image">
                  <a className="category_image_link" href={`/artigos?category=${category}`}>
                    <span className="jl_cm_overlay">
                      <span className="jl_cm_name">{category}</span>
                      {/* <span className="jl_cm_count">11</span> */}
                    </span>
                  </a>
                  <div className="category_image_bg_overlay" style={{ background: "#ed1c1c" }}></div>
                </div>
              )
            }
          </div>
          <span className="jl_none_space"></span>
        </div>
      </div>
    )
  }
}

export default PostSidebarCategories;