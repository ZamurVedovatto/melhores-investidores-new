import HeaderTopBar from './HeaderTopBar';
import HeaderMainMenu from './HeaderMainMenu';
import HeaderSecondaryMenu from './HeaderSecondaryMenu';

const MainHeader = () => {
  return (
    <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style3_custom jl_cusdate_head">
    {/* <HeaderTopBar /> */}
    {/* <div className="jl_blank_nav"></div> */}
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
              <HeaderMainMenu />
              <HeaderSecondaryMenu />
            </div>
          </div>
      </div>
    </div>
  </header>
  )
}

export default MainHeader;