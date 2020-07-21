import './../styles/Nav.scss';
import Link from 'next/Link';
import { Fragment } from 'react';

const Nav = () => {
  return(
    // <div className="navbar">
    //   <Link href="/">
    //     <span className="link">Home</span>
    //   </Link>
    //   <Link href="/about">
    //     <span className="link">About</span>
    //   </Link>
    // </div>
    <Fragment>
      <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style3_custom jl_cusdate_head">
      <div className="header_top_bar_wrapper ">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="menu-primary-container navigation_wrapper">
                     <ul id="jl_top_menu" className="jl_main_menu">
                        <li className="menu-item menu-item-home current-menu-item page_item page-item-4212 current_page_item menu-item-4461"><a href="index.html#" aria-current="page">Home<span className="border-menu"></span></a>
                        </li>
                        <li className="menu-item menu-item-3602"><a href="index.html#">Member<span className="border-menu"></span></a>
                        </li>
                        <li className="menu-item menu-item-3606"><a href="index.html#">special offer<span className="border-menu"></span></a>
                        </li>
                        <li className="menu-item menu-item-3598"><a href="index.html#">Info!!<span className="border-menu"></span></a>
                        </li>
                     </ul>
                  </div>
                  <div className="jl_top_bar_right"> <span className="jl_current_title">Current Date:</span> 7 July, 2020</div>
               </div>
            </div>
         </div>
      </div>
  
      <div className="jl_blank_nav"></div>
      <div id="menu_wrapper" className="menu_wrapper jl_menu_sticky jl_stick ">
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
  
                  <div className="menu-primary-container navigation_wrapper">
                     <ul id="mainmenu" className="jl_main_menu">
                        <li className="menu-item menu-item-has-children"> <a href="index.html#">Home<span className="border-menu"></span></a>
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
                        <li className="menu-item menu-item-has-children"> <a href="index.html#">Features<span className="jl_menu_lb jl_lb_blue">New</span><span className="border-menu"></span></a>
                           <ul className="sub-menu">
                              <li className="menu-item menu-item-has-children"> <a href="index.html#">Post Layout<span className="border-menu"></span></a>
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
                              <li className="menu-item menu-item-has-children"> <a href="index.html#">Post Format<span className="border-menu"></span></a>
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
                        <li className="menu-item"><a href="gaming.html">Gaming<span className="border-menu"></span></a>
                        </li>
                        <li className="menu-item"><a href="active.html">Active<span className="border-menu"></span></a>
                        </li>
                        <li className="menupost menu-item"> <a href="business.html">Business<span className="jl_menu_lb jl_lb_red">Hot</span><span className="border-menu"></span></a>
                           <ul className="sub-menu menu_post_feature">
                              <li> <span className="jl_none_space"></span>
                                 <div id="disto_recent_large_widgets-2" className="widget main_post_style"> <span className="jl_none_space"></span>
                                    <div className="jl_recent_large">
                                       <div className="recent_post_large_widget">
                                          <div className="image_post feature-item featured-thumbnail">
                                             <a href="index.html#" className="feature-link" title="People are enjoy the job that they love">
                                                <img width="400" height="280" src="/img/bca.jpg" className="attachment-disto_slider_grid_small size-disto_slider_grid_small wp-post-image" alt="" />
                                                <div className="background_over_image"></div>
                                             </a> <span className="meta-category-small"><a className="post-category-color-text" style={{ backgroundColor: '#0015ff' }} href="index.html#">Business</a></span> 
                                          </div>
                                          <div className="wrap_box_style_main image-post-title">
                                             <div className="title_content_wrapper">
                                                <h3 className="image-post-title"><a href="index.html#">
                                                         People are enjoy the job that they love</a>
                                                      </h3>
                                                <span className="jl_post_meta"><span className="jl_author_img_w"> <img src="img/bca.jpg" width="30" height="30" alt="Anna Nikova" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" /><a href="index.html#" title="Posts by Anna Nikova" rel="author">Anna Nikova</a></span><span className="post-date"><i className="fa fa-clock-o"></i>Dec 24, 2016</span></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="recent_post_large_widget">
                                          <div className="image_post feature-item featured-thumbnail">
                                             <a href="index.html#" className="feature-link" title="Nice photo shooting with hand classic style">
                                                <img width="400" height="280" src="/img/bca.jpg" className="attachment-disto_slider_grid_small size-disto_slider_grid_small wp-post-image" alt="" />
                                                <div className="background_over_image"></div>
                                             </a> <span className="meta-category-small"><a className="post-category-color-text" style={{ backgroundColor: '#0015ff' }} href="index.html#">Business</a></span> 
                                          </div>
                                          <div className="wrap_box_style_main image-post-title">
                                             <div className="title_content_wrapper">
                                                <h3 className="image-post-title"><a href="index.html#">
                                                         Nice photo shooting with hand classic style</a>
                                                      </h3>
                                                <span className="jl_post_meta"><span className="jl_author_img_w"> <img src="img/bca.jpg" width="30" height="30" alt="Anna Nikova" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" /><a href="index.html#" title="Posts by Anna Nikova" rel="author">Anna Nikova</a></span><span className="post-date"><i className="fa fa-clock-o"></i>Dec 24, 2016</span></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="recent_post_large_widget">
                                          <div className="image_post feature-item featured-thumbnail">
                                             <a href="index.html#" className="feature-link" title="It’s always fun time and smile in the summer">
                                                <img width="400" height="280" src="/img/bca.jpg" className="attachment-disto_slider_grid_small size-disto_slider_grid_small wp-post-image" alt="" />
                                                <div className="background_over_image"></div>
                                             </a> <span className="meta-category-small"><a className="post-category-color-text" style={{ backgroundColor: '#0015ff' }} href="index.html#">Business</a></span> 
                                          </div>
                                          <div className="wrap_box_style_main image-post-title">
                                             <div className="title_content_wrapper">
                                                <h3 className="image-post-title"><a href="index.html#">
                                                         It’s always fun time and smile in the summer</a>
                                                      </h3>
                                                <span className="jl_post_meta"><span className="jl_author_img_w"> <img src="img/bca.jpg" width="30" height="30" alt="Anna Nikova" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" /><a href="index.html#" title="Posts by Anna Nikova" rel="author">Anna Nikova</a></span><span className="post-date"><i className="fa fa-clock-o"></i>Dec 24, 2016</span></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="recent_post_large_widget">
                                          <div className="image_post feature-item featured-thumbnail">
                                             <a href="index.html#" className="feature-link" title="Best inspire dark photo in the winter season">
                                                <img width="400" height="280" src="/img/bca.jpg" className="attachment-disto_slider_grid_small size-disto_slider_grid_small wp-post-image" alt="" />
                                                <div className="background_over_image"></div>
                                             </a> <span className="meta-category-small"><a className="post-category-color-text" style={{ backgroundColor: '#0015ff' }} href="index.html#">Business</a></span> 
                                          </div>
                                          <div className="wrap_box_style_main image-post-title">
                                             <div className="title_content_wrapper">
                                                <h3 className="image-post-title"><a href="index.html#">
                                                         Best inspire dark photo in the winter season</a>
                                                      </h3>
                                                <span className="jl_post_meta"><span className="jl_author_img_w"> <img src="img/bca.jpg" width="30" height="30" alt="Anna Nikova" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" /><a href="index.html#" title="Posts by Anna Nikova" rel="author">Anna Nikova</a></span><span className="post-date"><i className="fa fa-clock-o"></i>Dec 23, 2016</span></span>
                                             </div>
                                          </div>
                                       </div>
                                    </div> <span className="jl_none_space"></span>
                                 </div>
                              </li>
                           </ul>
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
  
                  <div className="search_header_menu">
                     <div className="menu_mobile_icons"><i className="fa fa-bars"></i>
                     </div>
                     <div className="search_header_wrapper search_form_menu_personal_click"><i className="fa fa-search"></i>
                     </div>
                     <div className="menu_mobile_share_wrapper">
                        <ul className="social_icon_header_top">
                           <li><a className="facebook" href="index.html#" target="_blank"><i className="fa fa-facebook"></i></a>
                           </li>
                           <li><a className="google_plus" href="index.html#" target="_blank"><i className="fa fa-google-plus"></i></a>
                           </li>
                           <li><a className="behance" href="index.html#" target="_blank"><i className="fa fa-behance"></i></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </header>
    
    <div id="content_nav" className="jl_mobile_nav_wrapper">
            <div id="nav" className="jl_mobile_nav_inner">
               <div className="menu_mobile_icons mobile_close_icons closed_menu"><span className="jl_close_wapper"><span className="jl_close_1"></span><span className="jl_close_2"></span></span>
               </div>
               <ul id="mobile_menu_slide" className="menu_moble_slide">
                              <li className="menu-item menu-item-has-children"> <a href="index.html#">Home<span className="border-menu"></span></a>
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
                              <li className="menu-item menu-item-has-children"> <a href="index.html#">Features<span className="jl_menu_lb jl_lb_blue">New</span><span className="border-menu"></span></a>
                                 <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children"> <a href="index.html#">Post Layout<span className="border-menu"></span></a>
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
                                    <li className="menu-item menu-item-has-children"> <a href="index.html#">Post Format<span className="border-menu"></span></a>
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
                              <li className="menu-item"><a href="gaming.html">Gaming<span className="border-menu"></span></a>
                              </li>
                              <li className="menu-item"><a href="active.html">Active<span className="border-menu"></span></a>
                              </li>
                              <li className="menu-item"> <a href="business.html">Business<span className="jl_menu_lb jl_lb_red">Hot</span><span className="border-menu"></span></a>
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
                   <span className="jl_none_space"></span>
               <div id="disto_about_us_widget-2" className="widget jellywp_about_us_widget">
                  <div className="widget_jl_wrapper about_widget_content">
                     <div className="jellywp_about_us_widget_wrapper">
                        <div className="social_icons_widget">
                           <ul className="social-icons-list-widget icons_about_widget_display">
                              <li><a href="index.html#" className="facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                              </li>
                              <li><a href="index.html#" className="google_plus" target="_blank"><i className="fa fa-google-plus"></i></a>
                              </li>
                              <li><a href="index.html#" className="behance" target="_blank"><i className="fa fa-behance"></i></a>
                              </li>
                              <li><a href="index.html#" className="vimeo" target="_blank"><i className="fa fa-vimeo-square"></i></a>
                              </li>
                              <li><a href="index.html#" className="youtube" target="_blank"><i className="fa fa-youtube"></i></a>
                              </li>
                           </ul>
                        </div>
                     </div> <span className="jl_none_space"></span>
                  </div>
               </div>
            </div>
         </div>
         <div className="search_form_menu_personal">
            <div className="menu_mobile_large_close"><span className="jl_close_wapper search_form_menu_personal_click"><span className="jl_close_1"></span><span className="jl_close_2"></span></span>
            </div>
            <form method="get" className="searchform_theme" action="index.html#">
               <input type="text" placeholder="Search..." value="" name="s" className="search_btn" />
               <button type="submit" className="button"><i className="fa fa-search"></i>
               </button>
            </form>
         </div>
        <div className="mobile_menu_overlay"></div>
    </Fragment>
  )
}

export default Nav;