import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await stripe.products.list({ active: true });
    const categories = data.map((p) => ({ id: p.default_price, name: p.name }));
    return res.status(200).json({ categories });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;
