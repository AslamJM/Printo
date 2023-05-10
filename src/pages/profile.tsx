import SingleOrder from "@/components/profile/SingleOrder";
import { Database } from "@/supabase";
import { supabaseAdmin } from "@/utils/supabase";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

const ProfilePage = ({
  orders,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {orders.map((order) => (
        <SingleOrder
          key={order.id}
          category={order.category!}
          address={order.address!}
          images={order.images!}
          status={order.status!}
        />
      ))}
    </div>
  );
};

export default ProfilePage;

export const getStaticProps: GetStaticProps<{
  orders: Database["public"]["Tables"]["orders"]["Row"][];
}> = async () => {
  const res = await supabaseAdmin.from("orders").select("*");

  const orders = res.data || [];
  return {
    props: { orders },
  };
};
