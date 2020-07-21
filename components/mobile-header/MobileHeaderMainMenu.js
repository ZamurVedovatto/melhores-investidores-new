const MobileHeaderMainMenu = () => {
  return (
    <ul id="mobile_menu_slide" className="menu_moble_slide">
      <li className="menu-item menu-item-has-children"> <a href="index.html#">Para Aprender<span className="border-menu"></span></a>
        <ul className="sub-menu">
          <li className="menu-item menu-item-has-children"> <a href="index.html#">Post Layout<span className="border-menu"></span></a>
            <ul className="sub-menu">
              <li className="menu-item">
                <a href="post-layout-1.html">Post layout 1<span className="border-menu"></span></a>
              </li>
              <li className="menu-item">
                <a href="post-layout-2.html">Post layout 2<span className="border-menu"></span></a>
              </li>
              <li className="menu-item">
                <a href="post-layout-3.html">Post layout 3<span className="border-menu"></span></a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="menu-item">
        <a href="gaming.html">Artigos<span className="border-menu"></span></a>
      </li>
    </ul>
  )
}

export default MobileHeaderMainMenu;