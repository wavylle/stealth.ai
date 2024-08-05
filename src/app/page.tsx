import { Header } from "@/landingsections/Header";
import { Hero } from "@/landingsections/Hero";
import { LogoTicker } from "@/landingsections/LogoTicker";
import { Pricing } from "@/landingsections/Pricing";
import { ProductShowcase } from "@/landingsections/ProductShowcase";
import { CallToAction } from "@/landingsections/CallToAction";
import { Footer } from "@/landingsections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
);
}
