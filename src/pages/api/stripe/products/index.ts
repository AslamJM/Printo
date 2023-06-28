import { NextApiRequest, NextApiResponse } from "next";
import stripe from "@/utils/stripe";
import { Product } from "@/types";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ products: Product[]; error?: string }>
) => {
  try {
    const { data } = await stripe.products.list({ active: true });
    const products = data.map((product) => ({
      title: product.name,
      image: product.images[0],
      description: product.description || "",
      id: product.id,
      slug: product.id,
    }));
    return res.status(200).json({ products });
  } catch (error: any) {
    return res.status(500).json({ error: error.message, products: [] });
  }
};

export default handler;
