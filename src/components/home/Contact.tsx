import React from "react";
import SectionTitle from "./SectionTitle";
import OrderStep from "./OrderStep";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <div className=" min-h-screen">
      <SectionTitle>Make an Order</SectionTitle>
      <p className="my-2 text-slate-600 text-center">
        Are our works compelling? They can be yours too. Place your orders. We
        will delever it on time.
      </p>
      <div className="w-full block md:flex items-center mt-6">
        <div className="w-full md:w-1/2">
          <h3 className="mb-3 text-md md:text-base text-center md:text-left text-slate-900 font-semibold">
            Want to get something printed?
          </h3>
          <OrderStep step="Choose a printing style" />
          <OrderStep step="Give us the printing content" />
          <OrderStep step="Fill out your delivery information" />
          <OrderStep step="Complete the payment" />
        </div>
        <div className="w-full md:w-1/2">
          <p className="my-2 text-md md:text-base text-center md:text-left text-slate-600">
            Visit our order page to place your orders
          </p>
          <Button variant="default" className="mx-auto sm:mx-0">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
