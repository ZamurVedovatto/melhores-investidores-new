import FooterTopLeft from './FooterTopLeft';
import FooterTopCenter from './FooterTopCenter';
import FooterTopRight from './FooterTopRight';

const FooterTop = () => {
  return (
    <div className="footer-columns">
      <div className="container">
        <div className="row">
          <FooterTopLeft />
          <FooterTopCenter />
          <FooterTopRight />
        </div>
      </div>
    </div>
  )
}

export default FooterTop;