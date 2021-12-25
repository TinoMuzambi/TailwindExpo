import Image from "next/image";

const Card = () => {
	return (
		<div className="shadow-lg rounded-xl overflow-hidden w-[400px]">
			<Image
				src={`https://source.unsplash.com/random?sig=${Math.floor(
					Math.random()
				)}`}
				width={400}
				height={300}
			/>

			<div className="p-8">
				<h2 className="font-bold mb-4">Title here</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
					officia, sunt rerum omnis dolore quis eos voluptatibus illum
					architecto alias cumque. In provident, adipisci praesentium deserunt
					officiis ipsa dolore dignissimos
				</p>
			</div>
		</div>
	);
};

export default Card;
