import BreadcrumbComponent from "@/components/layout/Breadcrumb";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Locationes | About Us",
  description:
    "Enhance your online reputation with our seamless solution for managing Google My Business reviews. Monitor, respond to, and analyze customer feedback easily, boosting your brand's image and satisfaction. Streamline your review management process today!",
};
export default function AboutPage() {
  return (
    <>
      <BreadcrumbComponent title="About Us" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl font-bold text-center mb-8">
          Locationes: Empowering Your Digital Presence
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-sm mb-4">
              Established in 2024, Locationes is a pioneering SaaS (Software as
              a Service) company dedicated to optimizing businesses' online
              presence and enhancing customer relationships. Our team of experts
              specializes in Google Business Profile management and online
              reputation management, helping businesses stand out in the digital
              landscape.
            </p>
            <h2 className="text-xl font-semibold mb-2">Our Mission:</h2>
            <p className="text-sm mb-4">
              To deliver innovative solutions that maximize businesses' digital
              assets and elevate customer satisfaction. We achieve this by
              seamlessly blending cutting-edge technology with a human touch.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/about-us.webp"
              alt="Locationes Team"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">Why Choose Locationes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Comprehensive Solutions",
              description:
                "We offer a wide range of services including Google Business Profile management, review management, competitor analysis, and local SEO optimization.",
            },
            {
              title: "User-Friendly Platform",
              description:
                "Our intuitive interface allows businesses to easily manage their online presence and track performance in real-time.",
            },
            {
              title: "Data-Driven Approach",
              description:
                "Our advanced analytics tools provide businesses with valuable insights into customer behavior and market trends.",
            },
            {
              title: "Tailored Strategies",
              description:
                "We recognize the uniqueness of each business and develop customized strategies for every client.",
            },
            {
              title: "Continuous Innovation",
              description:
                "We closely monitor rapid changes in the technology landscape and consistently update our platform to stay ahead of the curve.",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-100 dark:bg-black p-8 rounded-lg mb-12">
          <h2 className="text-xl font-semibold mb-6">Our Success Stories</h2>
          <p className="text-sm mb-4">
            To date, we have served over 10,000 businesses with an average
            customer satisfaction rate of 97%. Our clients report an average
            increase of 40% in online visibility and a 30% boost in customer
            engagement after partnering with Locationes.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-6">Looking to the Future</h2>
        <p className="text-sm mb-8">
          At Locationes, we are committed to continually developing innovative
          solutions to help businesses thrive in the digital world. Our roadmap
          includes integrating artificial intelligence and machine learning
          technologies into our platform, enabling us to offer smarter, more
          predictive services to our clients.
        </p>

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            Experience the Locationes Difference
          </h2>
          <p className="text-sm mb-6">
            Elevate your digital presence to new heights. Partner with us today.
          </p>
          <Link
            href="https://app.locationes.com/"
            target="_blank"
            className="flex justify-center"
          >
            <Button
              variant="default"
              size="sm"
              className="gradient-animate bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
            >
              Try Free for 3 Days
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
