import './../styles/Nav.scss';
import { Fragment } from 'react';
import MainHeader from './header/MainHeader';

const Nav = () => {
   return(
   <Fragment>
      <MainHeader />
      <div className="search_form_menu_personal">
         <div className="menu_mobile_large_close"><span className="jl_close_wapper search_form_menu_personal_click"><span className="jl_close_1"></span><span className="jl_close_2"></span></span>
         </div>
         <form method="get" className="searchform_theme" action="index.html#">
            <input type="text" placeholder="Buscar..." value="" name="s" className="search_btn" />
            <button type="submit" className="button"><i className="fa fa-search"></i>
            </button>
         </form>
      </div>
      <div className="mobile_menu_overlay"></div>
   </Fragment>
   )
}

export default Nav;