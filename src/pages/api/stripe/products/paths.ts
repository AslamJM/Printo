import { NextApiRequest, NextApiResponse } from "next";
import stripe from "@/utils/stripe";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ products: Array<{ slug: string }>; error?: string }>
) => {
  try {
    const { data } = await stripe.products.list({ active: true });
    const products = data.map((product) => ({
      slug: product.id,
    }));
    return res.status(200).json({ products });
  } catch (error: any) {
    return res.status(500).json({ error: error.message, products: [] });
  }
};

export default handler;
