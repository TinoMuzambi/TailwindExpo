module.exports = {
	images: {
		domains: ["unsplash.it"],
	},
	async redirects() {
		return [
			{
				source: "/api/v1",
				destination: "/",
				permanent: true,
			},
		];
	},
};
