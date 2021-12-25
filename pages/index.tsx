import Head from "next/head";
import Illustration from "../components/Illustration";

export default function Home() {
	return (
		<div className="selection:bg-teal-500 selection:text-white">
			<Head>
				<title>Expo</title>
			</Head>

			<header className="sticky inset-0">
				<nav className="flex items-center justify-between py-4 px-16 bg-teal-500 text-white selection:bg-white selection:text-teal-500">
					<p className="font-bold text-xl">TinoMuzambi</p>
					<ul className="flex gap-4">
						<li className="link">Home</li>
						<li className="link">About</li>
						<li className="link">Projects</li>
						<li className="link">Socials</li>
					</ul>
				</nav>
			</header>

			<main className="px-16">
				<section className="flex items-center mt-8 gap-8 mx-auto w-[100%]">
					<h1 className="text-8xl">
						Look at my <span className="text-teal-500 font-bold">Tailwind</span>
					</h1>
					<Illustration />
				</section>
			</main>

			<footer className=""></footer>
		</div>
	);
}
