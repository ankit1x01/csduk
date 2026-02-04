import CookieConsent from "@/components/layout/CookieConsent";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyber Secured UK | Cyber Security & Digital Forensics",
  description: "Leading provider of cyber security, digital forensics, and incident response services in the UK. A division of Cyber Secured India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
