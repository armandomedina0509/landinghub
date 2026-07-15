import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Badges } from "@/components/badges";
import { HowItWorks } from "@/components/how-it-works";
import { Demos } from "@/components/demos";
import { Includes } from "@/components/includes";
import { Pricing } from "@/components/pricing";
import { Comparison } from "@/components/comparison";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Badges />
        <HowItWorks />
        <Demos />
        <Includes />
        <Pricing />
        <Comparison />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
