const HeaderMainMenu = () => {
  return (
    <div className="menu-primary-container navigation_wrapper">
      <ul id="mainmenu" className="jl_main_menu">
        <li className="menu-item menu-item-has-children">
          <a href="index.html#">Para Aprender<span className="border-menu"></span></a>
          <ul className="sub-menu">
              <li className="menu-item menu-item-has-children">
                <a href="index.html#">Post Layout<span className="border-menu"></span></a>
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
              <li className="menu-item"><a href="author.html">Dicionário das Finanças<span className="border-menu"></span></a>
              </li>
          </ul>
        </li>
        <li className="menu-item"><a href="gaming.html">Artigos<span className="border-menu"></span></a>
        </li>
      </ul>
    </div>
  )
}

export default HeaderMainMenu;