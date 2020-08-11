import homeStyles from "./home.module.scss";
import HeroSection from "./../components/home/hero-section";
import LatestArticles from "./../components/home/latest-articles";

import Servers from "./../constants/servers";
const api = Servers.api;

const Home = (props) => {
	const { posts } = props;
	return (
		<section className={homeStyles.sectionHome}>
			<div className='jl_home_section'>
				<div
					className='container'
					style={{ clear: "both", paddingTop: "50px", paddingBottom: "0px" }}
				>
					<HeroSection posts={posts} />
					<LatestArticles posts={posts} />
				</div>
			</div>
		</section>
	);
};

Home.getInitialProps = async (context) => {
	const data = await fetch(`${api}/api/posts`);
	const results = await data.json();
	return {
		posts: results,
	};
};

export default Home;
