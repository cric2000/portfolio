import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.role}`,
  description: "Full-stack software engineer building production-ready web applications, backend APIs, mobile apps, SaaS products and AI-powered experiences.",
  openGraph: {
    title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.role}`,
    description: "Full-stack software engineer building production-ready web applications, backend APIs, mobile apps, SaaS products and AI-powered experiences.",
    type: "website",
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
      className="h-full antialiased"
      style={
        {
          "--font-poppins": 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          "--font-montserrat": 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        } as React.CSSProperties
      }
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
