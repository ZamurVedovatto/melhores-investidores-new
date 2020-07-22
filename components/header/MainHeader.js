import HeaderTopBar from './HeaderTopBar';
import HeaderMainMenu from './HeaderMainMenu';
import HeaderSecondaryMenu from './HeaderSecondaryMenu';
import Link from 'next/Link';

const MainHeader = () => {
  return (
    <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style5_custom headcus5_custom">
    <HeaderTopBar />
    {/* <div className="jl_blank_nav"></div> */}

    <div className="jl_blank_nav"></div>
        <div id="menu_wrapper" className="menu_wrapper  jl_menu_sticky jl_stick ">
          <div className="container">
            <div className="row">
              <div className="main_menu col-md-12">

                <div className="menu-primary-container navigation_wrapper">
                  <ul id="mainmenu" className="jl_main_menu">
                              <li className="menu-item menu-item-has-children"> <a href="index-2.html#">Home<span className="border-menu"></span></a>
                                 <ul className="sub-menu">                                    
                                    <li className="menu-item"><a href="index.html">Home Demo 1<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="index-1.html">Home Demo 2<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="index-2.html">Home Demo 3<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="index-3.html">Home Demo 4<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="index-4.html">Home Demo 5<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="index-5.html">Home Demo 6<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="index-6.html">Home Demo 7<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="index-7.html">Home Demo 8<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="index-8.html">Home Demo 9<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="index-9.html">Home Demo 10<span className="border-menu"></span></a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item menu-item-has-children"> <a href="index-2.html#">Features<span className="jl_menu_lb jl_lb_blue">New</span><span className="border-menu"></span></a>
                                 <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children"> <a href="index-2.html#">Post Layout<span className="border-menu"></span></a>
                                       <ul className="sub-menu">
                                          <li className="menu-item"><a href="post-layout-1.html">Post layout 1<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-layout-2.html">Post layout 2<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-layout-3.html">Post layout 3<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-layout-4.html">Post layout 4<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-layout-5.html">Post layout 5<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-layout-6.html">Post layout 6<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-layout-7.html">Post layout 7<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-layout-8.html">Post layout 8<span className="border-menu"></span></a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"> <a href="index-2.html#">Post Format<span className="border-menu"></span></a>
                                       <ul className="sub-menu">
                                          <li className="menu-item"><a href="post-format-1.html">Post format standard<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-format-2.html">Post format gallery<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-format-3.html">Post Format Qoute<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-format-4.html">Post format video<span className="border-menu"></span></a>
                                          </li>
                                          <li className="menu-item"><a href="post-format-5.html">Post format audio<span className="border-menu"></span></a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item"><a href="author.html">Author Page<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="category.html">Category Page<span className="border-menu"></span></a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item">
                                <Link href="categoria">
                                  <a>Categoria<span className="border-menu"></span></a>
                                </Link>
                              </li>
                              <li className="menu-item"><a href="active.html">Active<span className="border-menu"></span></a>
                              </li>

                              <li className="menu-item menu-item-has-children"> <a href="shop.html">Shop<span className="jl_menu_lb jl_lb_yellow">Now</span><span className="border-menu"></span></a>
                                 <ul className="sub-menu">
                                    <li className="menu-item"><a href="myaccount.html">My account<span className="border-menu"></span></a>
                                    </li>
                                    <li className="menu-item"><a href="cart.html">Cart<span className="border-menu"></span></a>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


    {/* <div id="menu_wrapper" className="menu_wrapper jl_menu_sticky jl_stick ">
      <div className="container">
        <div className="row">
            <div className="main_menu col-md-12">
              <div className="logo_small_wrapper_table">
                  <div className="logo_small_wrapper">
                    <a className="logo_link" href="index.html">
                      <img src="/img/logo/mi07_cropped.png" alt="Just another WordPress site" />
                    </a>  
                  </div>
              </div>
              <HeaderMainMenu />
              <HeaderSecondaryMenu />
            </div>
          </div>
      </div>
    </div> */}
  </header>
  )
}

export default MainHeader;