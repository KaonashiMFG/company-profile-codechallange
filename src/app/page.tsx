import { Hero } from "@/components/homepage/Hero";
import { Kelebihan } from "@/components/homepage/Kelebihan";
import { Partners } from "@/components/homepage/Partners";
import { Services } from "@/components/homepage/Services";
import { Overview } from "@/components/homepage/Overview";
import Testimonials from "@/components/homepage/Testimonials";

export default async function HomePage() {
  return (
    <>
      <Hero />

      <Overview />

      <Services/>

      <Partners/>

      <Kelebihan />

      <Testimonials/>
    </>
  );
}
