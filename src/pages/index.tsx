import { Inconsolata } from "next/font/google";

import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import Works from "@/components/works";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/home/Contact";

const inter = Inconsolata({ subsets: ["latin"], variable: "--font-inc" });

export default function Home() {
  return (
    <main className={` w-full ${inter.className}`}>
      <Intro />
      <Services />
      <Works />
      <Testimonials />
      <Contact />
    </main>
  );
}
