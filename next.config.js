module.exports = {
	images: {
		domains: ["unsplash.it", "source.unsplash.com"],
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
