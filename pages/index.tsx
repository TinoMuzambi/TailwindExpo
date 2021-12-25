import Head from "next/head";
import Card from "../components/Card";
import Illustration from "../components/Illustration";
import Map from "../components/Map";
import Meta from "../components/Meta";

export default function Home() {
	return (
		<div className="selection:bg-teal-500 selection:text-white">
			<Meta />

			<header className="sticky inset-0 z-10">
				<nav className="flex flex-col md:flex-row items-center justify-between py-4 px-16 bg-teal-500 text-white selection:bg-white selection:text-teal-500">
					<a
						href="https://tinomuzambi.com"
						target="_blank"
						rel="noreferrer"
						className="font-bold text-xl hover:text-white hover:underline"
					>
						TinoMuzambi
					</a>
					<ul className="flex gap-4">
						<li className="link">Home</li>
						<li className="link">About</li>
						<li className="link">Projects</li>
						<li className="link">Socials</li>
					</ul>
				</nav>
			</header>

			<main className="px-16">
				<section className="flex flex-col md:flex-row items-center mt-8 gap-1 md:gap-8">
					<h1 className="text-4xl md:text-8xl">
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
					<div className="flex flex-col md:flex-row items-center gap-8 justify-between">
						{[1, 2, 3].map((i) => (
							<Card key={i} id={i} />
						))}
					</div>
				</section>

				<section className="my-16">
					<h2 className="text-3xl font-bold  my-4">
						<span className="text-teal-500">Contact</span> Me
					</h2>
					<div className="flex flex-col md:flex-row items-start mt-8 gap-8">
						<Map />
						<form>
							<div className="flex items-center gap-8">
								<div className="flex flex-col relative">
									<label htmlFor="name">Name:</label>
									<div className="input-after">
										<input className="input" type="text" id="name" required />
									</div>
								</div>
								<div className="flex flex-col my-4 relative">
									<label htmlFor="surname">Surname:</label>
									<div className="input-after">
										<input
											className="input"
											type="text"
											id="surname"
											required
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-col my-4 relative">
								<label htmlFor="email">Email:</label>
								<div className="input-after">
									<input className="input" type="email" id="email" required />
								</div>
							</div>
							<div className="flex flex-col my-4 relative">
								<label htmlFor="subject">Subject:</label>
								<div className="input-after">
									<input className="input" type="text" id="subject" required />
								</div>
							</div>
							<div className="flex flex-col my-4 relative">
								<label htmlFor="message">Message:</label>
								<div className="input-after">
									<textarea className="input resize-none" id="message" />
								</div>
							</div>

							<input
								type="submit"
								value="Send"
								className="bg-teal-500 text-white p-4 my-4 w-full cursor-pointer hover:text-teal-500 hover:bg-transparent hover:border-teal-500 hover:border-2 focus:text-teal-500 focus:bg-transparent focus:border-teal-500 focus:border-2 border-2 border-transparent duration-500  outline-none"
							/>
						</form>
					</div>
				</section>
			</main>

			<footer className="py-4 px-16 bg-teal-500 text-white selection:bg-white selection:text-teal-500">
				<div className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 items-start justify-between ">
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
				<p className="mx-2">Copyright ® Tino Muzambi 2021</p>
			</footer>
		</div>
	);
}
