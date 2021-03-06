import literaturaStyles from "./literatura.module.scss";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import LivrosMain from "./../components/livros/LivrosMain";
import fetch from "isomorphic-unfetch";
import Servers from "./../constants/servers";
const api = Servers.api;

const LiteraturaMain = (props) => {
	const { livros } = props;

	return (
		<Layout>
			<Head>
				<title>{siteTitle} - Literatura</title>
			</Head>
			<LivrosMain livros={livros} />
		</Layout>
	);
};

LiteraturaMain.getInitialProps = async (context) => {
	const data = await fetch(`${api}/api/livros`);
	const results = await data.json();
	return {
		livros: results,
	};
};

export default LiteraturaMain;
