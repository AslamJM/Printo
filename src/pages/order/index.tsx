import SectionTitle from "@/components/home/SectionTitle";
import Form from "@/components/order/Form";
import Heading from "@/components/ui/Heading";
import React from "react";
import FormContextProvider from "@/context/FormContext";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const OrderPage = () => {
  const { isSignedIn } = useUser();
  return (
    <FormContextProvider>
      <div>
        <Heading className="my-16 text-center hidden md:block">
          Make Your Order
        </Heading>
        <SectionTitle className="my-2 md:hidden">Make your order</SectionTitle>
        <div className="w-full mx-auto flex items-center justify-center my-2">
          <Form />
        </div>
        {!isSignedIn && (
          <p className="my-3 text-lg text-teal-800 text-center">
            <Link href="/sign-in">
              <span className="font-semibold underline underline-offset-2 hover:text-teal-900">
                Sign In
              </span>{" "}
            </Link>
            or{" "}
            <Link href="/sign-up">
              <span className="font-semibold underline underline-offset-2 hover:text-teal-900">
                Sign Up
              </span>
            </Link>{" "}
            for better management of your orders.
          </p>
        )}
      </div>
    </FormContextProvider>
  );
};

export default OrderPage;
