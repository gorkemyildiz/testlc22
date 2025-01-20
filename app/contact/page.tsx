import BreadcrumbComponent from "@/components/layout/Breadcrumb";
import { ContactSection } from "@/components/layout/sections/contact";

export const metadata = {
  title: "Locationes | Contact",
  description:
    "Enhance your online reputation with our seamless solution for managing Google My Business reviews. Monitor, respond to, and analyze customer feedback easily, boosting your brand's image and satisfaction. Streamline your review management process today!",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbComponent title="Contact Us" />
      <ContactSection />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2482.5813070279237!2d-0.122379!3d51.520897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b36a38947e9%3A0x5267951cbc0ad430!2s27%20Old%20Gloucester%20St%2C%20London%20WC1N%203AX%2C%20Birle%C5%9Fik%20Krall%C4%B1k!5e0!3m2!1str!2str!4v1736785121235!5m2!1str!2str"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
