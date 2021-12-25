import { NextApiRequest, NextApiResponse } from "next";

const res = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "GET":
			res.status(200).json({
				success: true,
			});
			break;
		default:
			return res.status(400).json({ success: false });
	}
};

export default res;
