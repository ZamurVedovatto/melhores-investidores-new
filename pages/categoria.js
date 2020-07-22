import Layout from '../components/Layout';

const Categoria = () => {

  return (
    <Layout>
      <section className="categoria-section">
        <div className="main_title_wrapper category_title_section jl_cat_img_bg">
          <div className="category_image_bg_image" style={{ backgroundImage: "url('/img/1920x982.jpg')" }}></div>
          <div className="category_image_bg_ov"></div>
          <div className="jl_cat_title_wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12 main_title_col">
                  <div className="jl_cat_mid_title">
                    <h3 className="categories-title title">Business</h3>
                    <p>Sample category description goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Categoria;