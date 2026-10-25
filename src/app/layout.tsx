import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { portfolioConfig } from "@/config/portfolio";

const manrope = localFont({
  src: "./fonts/Manrope.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.role}`,
  description: "Full-stack software engineer building production-ready web applications, backend APIs, mobile apps, SaaS products and AI-powered experiences.",
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.role}`,
    description: "Full-stack software engineer building production-ready web applications, backend APIs, mobile apps, SaaS products and AI-powered experiences.",
    type: "website",
    siteName: portfolioConfig.personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.role}`,
    description: "Full-stack software engineer building production-ready web applications, backend APIs, mobile apps, SaaS products and AI-powered experiences.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
