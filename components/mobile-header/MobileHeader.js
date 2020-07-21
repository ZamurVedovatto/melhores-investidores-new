import MobileHeaderMainMenu from './MobileHeaderMainMenu';
import MobileHeaderSecondaryMenu from './MobileHeaderSecondaryMenu';

const MobileHeader = () => {
  return (
    <div id="content_nav" className="jl_mobile_nav_wrapper">
      <div id="nav" className="jl_mobile_nav_inner">
        <div className="menu_mobile_icons mobile_close_icons closed_menu">
          <span className="jl_close_wapper">
            <span className="jl_close_1"></span>
            <span className="jl_close_2"></span>
          </span>
      </div>
      <MobileHeaderMainMenu />
      {/* <span className="jl_none_space"></span> */}
      <MobileHeaderSecondaryMenu />
    </div>
  </div>
  )
}

export default MobileHeader;