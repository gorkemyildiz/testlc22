import BreadcrumbComponent from "@/components/layout/Breadcrumb";

export const metadata = {
  title: "Locationes | Terms & Conditions",
  description:
    "Enhance your online reputation with our seamless solution for managing Google My Business reviews. Monitor, respond to, and analyze customer feedback easily, boosting your brand's image and satisfaction. Streamline your review management process today!",
};

export default function TermsConditionsPage() {
  return (
    <>
      <BreadcrumbComponent title="Terms & Conditions" />
      <div className="container mt-4 text-muted-foreground gap-2 flex flex-col">
        <p>
          Please read these Terms and Conditions ("Agreement") carefully before
          using the Locationes platform ("Service") operated by Locationes
          ("Company").
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms and Conditions. If you disagree with any part of the terms, then
          you may not access the Service.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Intellectual Property
        </h2>
        <p>
          The Service and its original content, features, and functionality are
          owned by the Company and are protected by international copyright,
          trademark, patent, trade secret, and other intellectual property or
          proprietary rights laws.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Use of Service
        </h2>
        <p>
          Locationes provides a platform for managing Google locations. By using
          the Service, you agree to comply with all applicable laws and
          regulations. You also agree not to use the Service for any unlawful or
          unauthorized purposes.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Account Registration
        </h2>
        <p>
          To access and use certain features of the Service, you may be required
          to register for an account. You must provide accurate and complete
          information during the registration process and keep your account
          credentials secure. You are solely responsible for all activities that
          occur under your account.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Disclaimer of Warranty
        </h2>
        <p>
          The Service is provided on an "as is" and "as available" basis. The
          Company makes no warranties, expressed or implied, regarding the
          Service's availability, reliability, or suitability for your specific
          purpose. Your use of the Service is at your sole risk.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, the Company shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or in connection with your use of the
          Service.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Governing Law
        </h2>
        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws . Any disputes arising under or in connection
          with this Agreement shall be subject to the exclusive jurisdiction of
          the courts in counrty.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Changes to Terms and Conditions
        </h2>
        <p>
          The Company reserves the right to modify or replace these Terms and
          Conditions at any time. Your continued use of the Service after any
          such changes shall constitute your acceptance of the modified Terms
          and Conditions.
        </p>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at
          <a href="mailto:help@locationes.com">help@locationes.com</a>
        </p>
        <p>
          By using the Locationes platform, you acknowledge that you have read,
          understood, and agreed to the terms outlined in this Agreement."
        </p>
      </div>
    </>
  );
}
