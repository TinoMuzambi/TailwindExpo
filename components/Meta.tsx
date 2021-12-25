import Head from "next/head";

interface MetaProps {
	title?: string;
	description?: string;
	keywords?: string;
	url?: string;
	image?: string;
}

const Meta: React.FC<MetaProps> = ({
	title,
	description,
	keywords,
	url,
	image,
}): JSX.Element => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#000000" />
		<meta name="keywords" content={keywords} />
		<meta name="description" content={description} />

		{/* <!-- Google / Search Engine Tags --> */}
		<meta itemProp="name" content={title} />
		<meta itemProp="description" content={description} />
		<meta itemProp="image" content={image} />

		{/* <!-- Facebook Meta Tags --> */}
		<meta property="og:url" content={url} />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={image} />

		{/* <!-- Twitter Meta Tags --> */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content={image} />

		<meta charSet="utf-8" />
		<link rel="icon" href="/favicon.svg" />
		<meta name={title} content={title} />
		<link rel="apple-touch-icon" href="/logo192.png" />
		<link rel="manifest" href="/manifest.json" />
		<title>{title}</title>

		<link rel="preconnect" href="https://a.storyblok.com" />
	</Head>
);

Meta.defaultProps = {
	title: "Tailwind Expo | TinoMuzambi",
	keywords: "tailwind, tailwindcss, css, typescript, nextjs, react, reactjs",
	description:
		"My first dive into using Tailwind CSS. This is a simple landing page with a hero section, a cards section, contact form and a footer, fully responsive. This is a Next.js site with TypeScript.",
	image: "https://a.storyblok.com/f/105639/512x512/03489159d5/logo512.png",
	url: "",
};

export default Meta;
