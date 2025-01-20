"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, HelpCircle, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import axios from "axios";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const pricingTiers = [
  { range: "1 - 10", price: 6.0 },
  { range: "11 - 50", price: 5.5 },
  { range: "51 - 100", price: 5.0 },
  { range: "101 - ∞", price: 4.5 },
];

const features = [
  {
    name: "Business Profile Management",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
  {
    name: "Review Monitoring",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
  {
    name: "Locations Audit",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
  {
    name: "Q&A Monitoring",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
  {
    name: "Keywords Analytics",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
  {
    name: "Interactions Analytics",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
  {
    name: "Impression Analytics",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
  {
    name: "Response Templates",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
  {
    name: "AI Review Replies",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
  {
    name: "Schedule Posts",
    tier1: true,
    tier2: true,
    tier3: true,
    tier4: true,
  },
];

export const PricingSection = ({ country }: { country: string }) => {
  const [locations, setLocations] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [pricePerLocation, setPricePerLocation] = useState<number>(6.0);
  const [priceData, setPriceData] = useState<any>(null);
  const [currenyPrice, setCurrencyPrice] = useState<number>();

  const calculatePrice = (numLocations: number) => {
    if (numLocations <= 10) {
      return 6.0;
    } else if (numLocations <= 50) {
      return 5.5;
    } else if (numLocations <= 100) {
      return 5.0;
    } else {
      return 4.5;
    }
  };

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await axios.get(
        "https://v6.exchangerate-api.com/v6/fdd196bc2ac6bce9dd7e435f/latest/GBP"
      );
      setPriceData(response.data.conversion_rates);
    };
    fetchPrice();
  }, []);

  useEffect(() => {
    if (country && priceData) {
      if (country === "US") {
        setCurrencyPrice(priceData.USD);
      } else if (country === "TR") {
        setCurrencyPrice(priceData.TRY);
      }
    }
  }, [country, priceData]);

  useEffect(() => {
    const price = calculatePrice(locations);
    setPricePerLocation(price);
    if (priceData && currenyPrice) {
      setTotalPrice(price * locations * currenyPrice);
    } else {
      setTotalPrice(price * locations);
    }
  }, [locations, priceData, currenyPrice]);

  return (
    <>
      <section className="container" id="price">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Pricing
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Get unlimitted access
          </h2>

          <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-6">
            Choose the perfect plan for your business. Pay only for what you
            need.
          </h3>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Pricing Tiers */}
          <div className="flex justify-center  gap-2 mb-1">
            <span className="text-xs text-muted-foreground">
              {country === "US" || country === "TR" ? "₺" : "£"}
              All prices include tax
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>VAT and other applicable taxes are included</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.range}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col relative overflow-hidden">
                  <div className="absolute top-5 -right-12 rotate-[45deg] bg-[#5294ff] text-primary-foreground  py-1 px-10 text-xs font-bold shadow-md">
                    Start for free
                  </div>
                  <CardHeader>
                    <CardTitle className="text-md">
                      {tier.range} Locations
                    </CardTitle>
                    <CardDescription className="relative">
                      <span className="text-xl font-bold text-black dark:text-white">
                        {currenyPrice &&
                          country === "US" &&
                          `$${(currenyPrice * tier.price).toFixed(2)}`}
                        {currenyPrice &&
                          country === "TR" &&
                          `₺${(currenyPrice * tier.price).toFixed(0)}`}
                        {!currenyPrice && `£${tier.price}`}
                      </span>
                      <span className="text-xs">
                        {" "}
                        per locations <br /> / monthly
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* Features Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Features</TableHead>
                  <TableHead>1-10</TableHead>
                  <TableHead>11-50</TableHead>
                  <TableHead>51-100</TableHead>
                  <TableHead>101+</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature, index) => (
                  <TableRow key={index}>
                    <TableCell>{feature.name}</TableCell>
                    {[
                      feature.tier1,
                      feature.tier2,
                      feature.tier3,
                      feature.tier4,
                    ].map((tier, i) => (
                      <TableCell key={i}>
                        {tier ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: 0.5 + index * 0.1,
                            }}
                          >
                            <Check className="h-4 w-4 text-green-500" />
                          </motion.div>
                        ) : null}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="max-w-xl mx-auto mt-4 bg-muted/60 dark:bg-card ">
              <CardContent className="flex flex-col gap-4">
                <h2 className="text-xl  text-center text-primary font-semibold mt-4">
                  Calculate Your Price
                </h2>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Number of Locations: {locations}
                  </label>
                  <Slider
                    value={[locations]}
                    onValueChange={(value) => setLocations(value[0])}
                    max={200}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="text-center space-y-4">
                  <p className="text-sm">
                    Price per location:{" "}
                    {country === "US" ? "$" : country === "TR" ? "₺" : "£"}
                    {currenyPrice
                      ? (pricePerLocation * currenyPrice).toFixed(2)
                      : pricePerLocation}
                  </p>
                  <p className="text-lg font-bold">
                    Total:{" "}
                    {country === "US" ? "$" : country === "TR" ? "₺" : "£"}
                    {totalPrice.toFixed(2)} / monthly
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
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <p className="text-xs text-muted-foreground">
                      You can cancel within 3 days without paying any fees.
                    </p>
                    <Image
                      src="/stripe.png"
                      alt="Stripe"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="mt-6 max-w-xl mx-auto rounded-lg bg-blue-50 dark:bg-card p-4">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                <div>
                  <h4 className="font-medium text-blue-900">
                    Need a custom plan?
                  </h4>
                  <p className="mt-1 text-sm text-blue-700">
                    Contact us at{" "}
                    <a
                      href="mailto:corp@locationes.com"
                      className="font-medium underline hover:text-blue-800"
                    >
                      corp@locationes.com
                    </a>{" "}
                    for volume discounts and custom pricing options for larger
                    organizations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="border-t bg-gray-50 dark:bg-card mt-12"
      >
        <div className="container mx-auto px-4 py-16 text-center lg:py-24">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
            Ready to Explore More Features?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Discover the full potential of our platform with advanced analytics,
            real-time monitoring, and comprehensive reporting tools.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link
                href="https://app.locationes.com/auth/register"
                target="_blank"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://app.locationes.com/auth/login"
                target="_blank"
              >
                Sign In to Dashboard
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Already using Locationes?{" "}
            <Link
              href="https://app.locationes.com/auth/login"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Log in to your account
            </Link>
          </p>
        </div>
      </motion.div>
    </>
  );
};
