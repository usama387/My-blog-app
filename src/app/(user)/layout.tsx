import type { Metadata } from "next";
import { Josefin_Sans  } from "next/font/google";
import "../../style/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Josef = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Blog App",
  description: "DevelopedbyUsama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Josef.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
