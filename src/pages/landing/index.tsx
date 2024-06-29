import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Testimonial from "@/components/landing/Testimonial";
import Rent from "@/components/landing/Rent";
import Faq from "@/components/landing/Faq";

export default function Landing() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Testimonial />
      <Rent />
      <Faq />
    </main>
  );
}
