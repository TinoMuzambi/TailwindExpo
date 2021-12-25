module.exports = {
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
