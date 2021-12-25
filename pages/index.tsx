import Head from "next/head";
import Card from "../components/Card";
import Illustration from "../components/Illustration";

export default function Home() {
	return (
		<div className="selection:bg-teal-500 selection:text-white">
			<Head>
				<title>Expo</title>
			</Head>

			<header className="sticky inset-0 z-10">
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
						Check out my{" "}
						<span className="text-teal-500 font-bold selection:bg-white selection:text-teal-500">
							Tailwind
						</span>
					</h1>
					<Illustration />
				</section>
				<section className="my-16">
					<h2 className="text-3xl font-bold  my-4">
						My <span className="text-teal-500">Cards</span>
					</h2>
					<div className="flex items-center gap-8 justify-between">
						{[1, 2, 3].map((i) => (
							<Card key={i} id={i} />
						))}
					</div>
				</section>

				<section className="my-16">
					<h2 className="text-3xl font-bold  my-4">
						<span className="text-teal-500">Contact</span> Me
					</h2>
				</section>
			</main>

			<footer className="py-4 px-16 bg-teal-500 text-white selection:bg-white selection:text-teal-500">
				<div className="flex items-start justify-between ">
					<p className="font-bold text-6xl">
						Tino
						<br />
						Muzambi
					</p>
					<div>
						<ul className="flex flex-col gap-2">
							<li className="link">Info</li>
							<li className="link">Social</li>
							<li className="link">About</li>
							<li className="link">Help</li>
							<li className="link">FAQ</li>
						</ul>
					</div>
					<div>
						<ul className="flex flex-col gap-2">
							<li className="link">Terms</li>
							<li className="link">Privacy</li>
							<li className="link">Security</li>
							<li className="link">Support</li>
							<li className="link">Contact</li>
						</ul>
					</div>
					<div>
						<ul className="flex flex-col gap-2">
							<li className="link">Instagram</li>
							<li className="link">Facebook</li>
							<li className="link">LinkedIn</li>
							<li className="link">YouTube</li>
							<li className="link">GitHub</li>
						</ul>
					</div>
				</div>
				<p>Copyright ® Tino Muzambi 2021</p>
			</footer>
		</div>
	);
}
