import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhatIDo } from "@/components/what-i-do";
import { Transformations } from "@/components/transformations";
import { HowIWork } from "@/components/how-i-work";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { BottomCTA } from "@/components/bottom-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIDo />
        <Transformations />
        <HowIWork />
        <Testimonials />
        <About />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
