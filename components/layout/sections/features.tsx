"use client";

import { FeatureCard } from "@/components/feature-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { BarChart3, icons, Map, TrendingUp } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Star",
    title: "Real Star Rating",
    description:
      "Discover your true rating, not the rounded average publicly displayed.",
  },
  {
    icon: "MoveUpRight",
    title: "Progress Towards the Next Rating",
    description: "How close is your business to improving its public rating?",
  },
  {
    icon: "Heart",
    title: "Spread the Love",
    description:
      "Effortlessly share your best reviews on social media and delight your loyal fans.",
  },

  {
    icon: "MessageSquareMore",
    title: "Fast Review Responses",
    description:
      "Reply to reviews at lightning speed with pre-defined texts and emojis.",
  },
  {
    icon: "Bell",
    title: "Change Notifications",
    description:
      "Locationes will notify you when your public score is about to increase or decrease.",
  },
  {
    icon: "CircleArrowUp",
    title: "Boost Your Reviews",
    description:
      "Send review invitations within seconds via QR code, WhatsApp, email, or social media.",
  },
];

export const FeaturesSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="features" className="container py-24">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover tools that make managing your Google My Business profile easy.
        Boost visibility, connect with customers, and grow your business
        effortlessly.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
                >
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </motion.div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <FeatureCard
          icon={BarChart3}
          title="Performance Analysis"
          description="Track your keyword performance with comprehensive analytics. Monitor impressions and keywords to optimize your SEO strategy."
        >
          <div className="mt-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <Image
              src={
                mounted
                  ? theme === "light"
                    ? "/kwperformance-light.png"
                    : "/kwperformance-dark.png"
                  : "/kwperformance-light.png"
              }
              alt="Performance Analysis"
              width={800}
              height={400}
              className="w-full"
            />
            <div className="bg-gray-50 dark:bg-transparent p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Total Impressions</p>
                  <p className="text-xl font-semibold">180,905</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Keywords</p>
                  <p className="text-xl font-semibold">432</p>
                </div>
              </div>
            </div>
          </div>
        </FeatureCard>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <FeatureCard
          icon={Map}
          title="Reviews Heat Map"
          description="Visualize your review distribution and ratings across different locations. Identify areas of strength and opportunities for improvement."
        >
          <div className="mt-6 space-y-4">
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
              <Image
                src="/heat-map.png"
                alt="Reviews Heat Map"
                width={800}
                height={400}
                className="w-full"
              />
            </div>
            <div className="grid gap-4 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold">Rating Color Guide</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    4.5 - 5.0: 15 location(s)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-300"></span>
                    4.0 - 4.4: 2 location(s)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-yellow-300"></span>
                    3.5 - 3.9: 1 location(s)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                    0.0 - 2.9: 1 location(s)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Map Info</h4>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>
                    The heatmap intensity represents the number of reviews for
                    each location.
                  </li>
                  <li>
                    Marker colors indicate the average rating of each location.
                  </li>
                  <li>
                    Click on a marker to see detailed information about the
                    location.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FeatureCard>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <FeatureCard
          icon={TrendingUp}
          title="Keyword Trends"
          description="Monitor your keyword performance on a monthly basis. Visualize growth trends and refine your SEO strategy for optimal results."
        >
          <div className="mt-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <Image
              src={
                mounted
                  ? theme === "light"
                    ? "/kwtrends-light.png"
                    : "/kwtrends-dark.png"
                  : "/kwtrends-light.png"
              }
              alt="Keyword Trends Dashboard"
              width={800}
              height={400}
              className="w-full"
            />
            <div className="bg-gray-50 dark:bg-transparent p-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Tracked Keywords</p>
                  <p className="text-xl font-semibold">5+</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Highest Growth</p>
                  <p className="text-xl font-semibold text-green-600 dark:text-green-400">
                    +305%
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Average Impressions</p>
                  <p className="text-xl font-semibold">180+</p>
                </div>
              </div>
            </div>
          </div>
        </FeatureCard>
      </motion.div>
    </section>
  );
};
