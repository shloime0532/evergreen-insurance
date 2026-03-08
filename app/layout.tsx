import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evergreen-insurance.vercel.app"),
  title: "Evergreen Insurance Group | Coverage That Grows With You",
  description:
    "Full-service insurance agency offering home, auto, business, and life coverage. Personalized protection plans from a team that puts your family first.",
  openGraph: {
    title: "Evergreen Insurance Group | Coverage That Grows With You",
    description:
      "Full-service insurance agency offering home, auto, business, and life coverage. Personalized protection plans from a team that puts your family first.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
