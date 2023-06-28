import { NextApiRequest, NextApiResponse } from "next";
import stripe from "@/utils/stripe";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await stripe.products.retrieve(req.query.slug as string);

    const product = {
      title: data.name,
      image: data.images[0],
      description: data.description,
      id: data.id,
    };
    return res.status(200).json({ product });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;
