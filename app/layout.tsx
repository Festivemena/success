import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OxF3stus | Hardware Engineer & Innovator",
  description:
    "OxF3stus is a hardware engineer, innovator, and builder specializing in robotics, IoT, AI, and Web3 solutions.",
  keywords: [
    "OxF3stus",
    "Hardware Engineer",
    "Robotics",
    "IoT",
    "AI",
    "Web3",
    "Innovation",
    "Engineering",
  ],
  authors: [{ name: "OxF3stus" }],
  metadataBase: new URL("https://oxfestus.me"),
  openGraph: {
    title: "OxF3stus | Hardware Engineer & Innovator",
    description:
      "Building the future of robotics, IoT, AI, and blockchain-powered systems.",
    url: "https://oxfestus.me",
    siteName: "OxF3stus",
    images: [
      {
        url: "/og-image.png", // add a social preview image
        width: 1200,
        height: 630,
        alt: "OxF3stus - Hardware Engineer & Innovator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OxF3stus | Hardware Engineer & Innovator",
    description:
      "Robotics, IoT, AI, and Web3 solutions built by OxF3stus.",
    images: ["/og-image.png"],
    creator: "@OxF3stus_29",
  },
  alternates: {
    canonical: "https://oxfestus.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logg.png" sizes="any" />

        {/* Schema.org JSON-LD for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "OxF3stus",
              url: "https://oxfestus.me",
              image: "https://oxfestus.me/og-image.png",
              sameAs: [
                "https://twitter.com/OxF3stus_29",
"https://x.com/OxF3stus_29",
                "https://github.com/Festivemena",
                "https://linkedin.com/in/efemena-festus",
              ],
              jobTitle: "Hardware Engineer",
              description:
                "OxF3stus is a hardware engineer and innovator specializing in robotics, IoT, AI, and Web3 systems.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}