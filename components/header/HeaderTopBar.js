const HeaderTopBar = () => {
  return (
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
  )
}

export default HeaderTopBar;