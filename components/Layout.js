import './../styles/General.scss'
import Nav from './Nav';
import Footer from './Footer';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <section className="mobile_nav_class jl-has-sidebar">
      <div className="options_layout_wrapper jl_radius jl_none_box_styles jl_border_radiuss">
        <div className="options_layout_container full_layout_enable_front">
        <Nav />
        { props.children }
        <Footer />
        </div>
      </div>
      <div id="go-top">
        <a href="index.html#go-top"><i className="fa fa-angle-up"></i></a>
      </div>
    </section>
  )
}

export default Layout;