import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Roof Repair LLC | Premium Roofing in Clarence Center, NY',
  description: 'Trusted professional roofing services. Repairs, installations, and more in Clarence Center, NY. Contact us for a free estimate.',
  openGraph: {
    "title": "Roof Repair LLC | Premium Roofing",
    "description": "Professional roofing services in Clarence Center, NY.",
    "siteName": "Roof Repair LLC"
  },
};

const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
