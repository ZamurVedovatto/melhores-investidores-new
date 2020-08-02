import HeaderTopBar from './header-top-bar';
import HeaderMainMenu from './header-main-menu';
import HeaderMenuMobile from './header-menu-mobile';


const MainHeader = () => {
  return (
    <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style5_custom headcus5_custom">
      <HeaderTopBar />
      <HeaderMainMenu />
      <HeaderMenuMobile />
    </header>
  )
}

export default MainHeader;