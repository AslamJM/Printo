import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface LineItem {
  price: string;
  quantity: number;
}

export const checkout = async ({ line_items }: { line_items: LineItem[] }) => {
  try {
    const { data } = await axios.post("/api/stripe/session", line_items);

    const stripe = await stripePromise;
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.session.id,
      });
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
