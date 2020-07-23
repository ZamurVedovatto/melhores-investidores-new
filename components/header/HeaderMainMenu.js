import Link from 'next/Link';

const HeaderMainMenu = () => {
  return (
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
                  </ul>
                </li>
                <Link href="/categoria">
                  <li className="menu-item">
                    <a>Categoria<span className="border-menu"></span></a>
                  </li>
                </Link>
                <Link href="/postLayout">
                  <li className="menu-item">
                    <a>Post Layout<span className="border-menu"></span></a>
                  </li>
                </Link>
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
  )
}

export default HeaderMainMenu;