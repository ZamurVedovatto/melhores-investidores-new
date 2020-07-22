import './../styles/Home.scss';

import HeroSection from './../components/home/HeroSection';
import SpotlightSection from './../components/home/SpotlightSection';
import LatestArticles from "./../components/home/LatestArticles";

const Home = () => {
  return (
    <section className="section-home">
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