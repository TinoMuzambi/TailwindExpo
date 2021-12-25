import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Expo</title>
			</Head>

			<header>
				<nav className="flex items-center justify-between p-4 bg-teal-500 text-white">
					<p className="font-bold text-xl">TinoMuzambi</p>
					<ul className="flex gap-4">
						<li className="link">About</li>
						<li className="link">Projects</li>
						<li className="link">Socials</li>
					</ul>
				</nav>
			</header>

			<main className=""></main>

			<footer className=""></footer>
		</>
	);
}
