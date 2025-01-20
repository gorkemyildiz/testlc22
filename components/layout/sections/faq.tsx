"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.35,
    },
  },
};

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Which types of businesses is this platform suitable for?",
    answer:
      "Our platform is suitable for all types of businesses, from small enterprises to large brands. It helps everyone effectively manage their Google reviews.",
    value: "item-1",
  },
  {
    question: "How can I respond to Google reviews?",
    answer:
      "You can easily respond to Google reviews through our platform. You can view and manage all your reviews in one place and craft your responses.",
    value: "item-2",
  },
  {
    question: "Is technical support available for using this platform?",
    answer:
      "Yes, we provide technical support to assist you with using our platform. Our dedicated team is available to help you navigate any technical challenges you may encounter.",
    value: "item-3",
  },
  {
    question: "How can I analyze my Google reviews?",
    answer:
      "Our platform offers detailed analytics. It presents data on the performance, trends, and customer satisfaction of your Google reviews in visual graphs and reports.",
    value: "item-4",
  },
];

export const FAQSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container md:w-[700px] py-6"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Questions & Answers
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto"
      >
        <Accordion type="single" collapsible className="AccordionRoot">
          {FAQList.map((faq, index) => (
            <motion.div key={faq.value} variants={itemVariants} custom={index}>
              <AccordionItem value={faq.value}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
};
