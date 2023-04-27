import { Inter } from "next/font/google";

import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` w-full ${inter.className}`}>
      <Intro />
      <Services />
    </main>
  );
}
