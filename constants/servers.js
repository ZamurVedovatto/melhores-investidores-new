const prod = {
	api: "https://www.melhoresinvestidores.com.br",
};

const dev = {
	api: "http://localhost:3000",
};

export default process.env.NODE_ENV === "development" ? dev : prod;
