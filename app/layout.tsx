import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import { FooterSection } from "@/components/layout/sections/footer";
import Metrics from "./metrics";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Locationes | Best Local SEO Tool for Businesses",
  description:
    "Enhance your online reputation with our seamless solution for managing Google My Business reviews. Monitor, respond to, and analyze customer feedback easily, boosting your brand's image and satisfaction. Streamline your review management process today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              let theme = window.localStorage.getItem('theme')
              if (!theme) {
                theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
              }
              document.documentElement.classList.toggle('dark', theme === 'dark')
            `,
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <FooterSection />
          <Metrics />
        </ThemeProvider>
      </body>
    </html>
  );
}
