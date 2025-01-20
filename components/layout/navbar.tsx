"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import "@/styles/gradient-animation.css";

import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/layout/toogle-theme";

const routeList = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/#price", label: "Price" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              className="hidden dark:block"
              src="/logo-white.png"
              alt="Locationes Logo Dark"
              width={140}
              height={40}
            />
            <Image
              className="block dark:hidden"
              src="/logo-blue.png"
              alt="Locationes Logo Light"
              width={140}
              height={40}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {routeList.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://app.locationes.com/" target="_blank">
              <Button
                variant="default"
                size="sm"
                className="hidden text-xs md:inline-flex gradient-animate bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
              >
                Try Free for 3 Days
              </Button>
            </Link>
            <ToggleTheme />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {routeList.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                {label}
              </Link>
            ))}
            <Button
              variant="default"
              size="sm"
              className="w-full mt-4 gradient-animate bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
            >
              Start for Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
