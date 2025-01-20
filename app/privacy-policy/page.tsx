import BreadcrumbComponent from "@/components/layout/Breadcrumb";

export const metadata = {
  title: "Locationes | Privacy Policy",
  description:
    "Enhance your online reputation with our seamless solution for managing Google My Business reviews. Monitor, respond to, and analyze customer feedback easily, boosting your brand's image and satisfaction. Streamline your review management process today!",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbComponent title="Privacy Policy" />
      <div className="container mt-4 text-muted-foreground gap-2 flex flex-col">
        <p>
          At Locationes, we prioritize the privacy and security of our users.
          This Privacy Policy outlines how we collect, use, and protect the
          information provided by our users while using our Locationes product.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Information Collection and Use
        </h2>
        <p>
          We may collect personal and non-personal information from our users,
          including but not limited to names, contact information, and usage
          data. This information is used to provide and improve our services,
          personalize user experiences, and communicate important updates.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Data Security
        </h2>
        <p>
          We implement robust security measures to protect user information from
          unauthorized access, disclosure, alteration, or destruction. We adhere
          to industry-standard practices to ensure the integrity and
          confidentiality of user data.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Information Sharing
        </h2>
        <p>
          We do not sell, trade, or rent user information to third parties.
          However, we may share information with trusted partners and service
          providers who assist us in delivering our services, subject to strict
          confidentiality agreements.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Data Retention
        </h2>
        <p>
          We retain user information for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy, unless a longer retention
          period is required or permitted by law.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          User Rights and Choices
        </h2>
        <p>
          Users have the right to access, update, or delete their personal
          information. They may also choose to opt-out of certain communications
          or withdraw their consent for data processing.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Cookies and Tracking Technologies
        </h2>
        <p>
          We use cookies and similar tracking technologies to enhance user
          experiences and collect usage data. Users can manage their cookie
          preferences through their browser settings.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Cookies and Tracking Technologies
        </h2>
        <p>
          We use cookies and similar tracking technologies to enhance user
          experiences and collect usage data. Users can manage their cookie
          preferences through their browser settings.
        </p>
        <h2 className="text-xl text-black font-semibold mt-4 dark:text-white">
          Updates to this Privacy Policy
        </h2>
        <p>
          We reserve the right to update this Privacy Policy periodically. Users
          will be notified of any significant changes and are encouraged to
          review this policy regularly.
        </p>
        <p>
          For more information about our privacy practices or to exercise your
          rights, please contact us at help@locationes.com
        </p>
        By using our Locationes product, you acknowledge that you have read,
        understood, and agreed to the terms outlined in this Privacy Policy."
      </div>
    </>
  );
}
