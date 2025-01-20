import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import SsrPricing from "@/components/layout/sections/ssrPricing";

export const metadata = {
  title: "Locationes | Best Local SEO Tool for Businesses",
  description:
    "Enhance your online reputation with our seamless solution for managing Google My Business reviews. Monitor, respond to, and analyze customer feedback easily, boosting your brand's image and satisfaction. Streamline your review management process today!",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <SsrPricing />
      <ContactSection />
      <FAQSection />
    </>
  );
}
