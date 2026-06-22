import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallButton from "@/components/layout/MobileCallButton";
import { CLIENT } from "@/lib/client-config";

export const metadata: Metadata = {
  title: {
    default: `${CLIENT.businessName} — ${CLIENT.primaryArea}`,
    template: `%s | ${CLIENT.businessName}`,
  },
  description: CLIENT.description,
  keywords: ["home services", "junk removal", "plumbing", "HVAC", "remodeling", CLIENT.primaryArea],
  openGraph: {
    type: "website",
    siteName: CLIENT.businessName,
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
