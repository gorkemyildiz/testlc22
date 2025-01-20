"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const HeroSection = () => {
  return (
    <section className="container w-full mt-10">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20">
        <motion.div
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="text-center space-y-8"
        >
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Powerful</Badge>
            </span>
            <span>Easy to use</span>
          </Badge>

          <div className="mx-auto text-center text-4xl font-bold">
            <h1>
              Single Platform for Multi-Location Google Business Management
              <br />
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                for
              </span>
              Simplified Location Management
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Manage all your Google Business locations from a single platform. Effortlessly control multiple locations, customer reviews and business details in one place.`}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
          className="relative group mt-14"
        >
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            src="/dashboard-light.png"
            alt="Performance Analysis"
            width={1200}
            height={1200}
            className="w-full  dark:hidden md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
          />
          <Image
            src="/dashboard-dark.png"
            alt="Performance Analysis Dark"
            width={1200}
            height={1200}
            className="w-full dark:flex hidden md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none items-center border border-t-2 border-secondary  border-t-primary/30"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  );
};
