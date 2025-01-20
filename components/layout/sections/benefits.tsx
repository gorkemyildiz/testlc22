"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Bell",
    title: "Real-Time Review Monitoring",
    description:
      "Stay updated with instant notifications for every new Google review, ensuring timely responses.",
  },
  {
    icon: "MessageSquareMore",
    title: "Effortless Review Response",
    description:
      "Effortlessly respond to Google reviews, ensuring prompt engagement and customer satisfaction.",
  },
  {
    icon: "LineChart",
    title: "Performance Analytics",
    description:
      "Gain valuable insights with comprehensive analytics to measure the impact of your Google reviews.",
  },
  {
    icon: "BarChart3",
    title: "Automated Review Reports",
    description:
      "Receive automated reports that summarize your Google review performance at regular intervals..",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textContainerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.35,
    },
  },
};

export const BenefitsSection = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <section id="benefits" className="container py-6">
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
          <motion.div variants={textContainerVariants}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-primary mb-2 tracking-wider"
            >
              Why choose us
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-4"
            >
              Save Time and Streamline Your Google Review Management with Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Efficiently manage and respond to Google reviews without wasting
              time. Our streamlined platform empowers you to effortlessly handle
              customer feedback, allowing you to focus on what truly matters –
              growing your business.
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardContainerVariants}
            className="grid lg:grid-cols-2 gap-4 w-full"
          >
            {benefitList.map(({ icon, title, description }, index) => (
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
                  <CardHeader>
                    <div className="flex justify-between">
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: 0.2 + index * 0.1,
                        }}
                      >
                        <Icon
                          name={icon as keyof typeof icons}
                          size={32}
                          color="hsl(var(--primary))"
                          className="mb-6 text-primary"
                        />
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                      >
                        0{index + 1}
                      </motion.span>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <CardTitle>{title}</CardTitle>
                    </motion.div>
                  </CardHeader>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CardContent className="text-muted-foreground">
                      {description}
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
