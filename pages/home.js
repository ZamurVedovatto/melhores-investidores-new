import homeStyles from './home.module.scss';

import HeroSection from './../components/home/hero-section';
import LatestArticles from "./../components/home/latest-articles";

const Home = () => {
  return (
    <section className={homeStyles.sectionHome}>
      <div className="jl_home_section">
        <div className="container" style={{clear: "both", paddingTop: "50px", paddingBottom: "0px" }}>
          <HeroSection />
          <LatestArticles />
        </div>
      </div>
    </section>
  )
}

export default Home;