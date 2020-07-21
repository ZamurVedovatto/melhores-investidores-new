const HeaderSecondaryMenu = () => {
  return (
    <div className="search_header_menu">
      <div className="menu_mobile_icons">
        <i className="fa fa-bars"></i>
      </div>
      <div className="search_header_wrapper search_form_menu_personal_click">
        <i className="fa fa-search"></i>
      </div>
      <div className="menu_mobile_share_wrapper">
        <ul className="social_icon_header_top">
          <li>
            <a className="facebook" href="index.html#" target="_blank"><i className="fa fa-facebook"></i></a>
          </li>
          <li>
            <a className="google_plus" href="index.html#" target="_blank"><i className="fa fa-instagram"></i></a>
          </li>
          <li>
            <a className="behance" href="index.html#" target="_blank"><i className="fa fa-tumblr"></i></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderSecondaryMenu;