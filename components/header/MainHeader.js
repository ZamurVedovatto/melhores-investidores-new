import HeaderTopBar from './HeaderTopBar';
import HeaderMainMenu from './HeaderMainMenu';
import HeaderSecondaryMenu from './HeaderSecondaryMenu';
import Link from 'next/Link';

const MainHeader = () => {
  return (
    <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style5_custom headcus5_custom">
      <HeaderTopBar />
      <HeaderMainMenu />
    </header>
  )
}

export default MainHeader;