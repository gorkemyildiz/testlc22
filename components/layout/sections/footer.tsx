"use client";
import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import React from "react";

export const FooterSection = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted
    ? theme === "light"
      ? "/logo-blue.png"
      : "/logo-white.png"
    : "/logo-blue.png";

  return (
    <footer id="footer" className="container py-12">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-5  gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center mb-2">
              <Image
                src={logoSrc}
                alt="Locationes Logo"
                width={140}
                height={140}
              />
            </Link>
            <span className=" text-muted-foreground text-sm">
              Locations is designed for local business owners who seek a
              convenient way to effortlessly track, manage, and enhance their
              Google Review Ratings directly from their mobile devices.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="/contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>

            <div>
              <Link
                href="https://www.linkedin.com/company/locationes"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                LinkedIn
              </Link>
            </div>

            <div>
              <Link
                href="https://www.instagram.com/locationes.app"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Instagram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Important Links</h3>
            <div>
              <Link href="/about-us" className="opacity-60 hover:opacity-100">
                About Us
              </Link>
            </div>

            <div>
              <Link
                href="/terms-conditions"
                className="opacity-60 hover:opacity-100"
              >
                Terms & Conditions
              </Link>
            </div>

            <div>
              <Link
                href="/privacy-policy"
                className="opacity-60 hover:opacity-100"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Our Location </h3>
            <div>
              <p className="opacity-60 hover:opacity-100">
                27 Old Gloucester Street London, United Kingdom WC1N 3AX
              </p>
            </div>

            <div>
              <Link
                href="mailto:help@locationes.com"
                className="opacity-60 hover:opacity-100"
              >
                Email: help@locationes.com
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy;2024 © All rights reserved by
            <Link
              href="https://locationes.com/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Locationes
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
