import Image from "next/image";

interface CardProps {
	id: number;
}

const Card: React.FC<CardProps> = ({ id }) => {
	const getRandomNumber = (multiplier: number): number => {
		return Math.floor(Math.random() * multiplier * 100000);
	};

	return (
		<div className="shadow-lg rounded-xl overflow-hidden w-[400px]">
			<div className="overflow-hidden">
				<Image
					className="hover:scale-150 duration-500"
					src={`https://source.unsplash.com/random?sig=${getRandomNumber(id)}`}
					objectFit="cover"
					width={400}
					height={300}
				/>
			</div>

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
