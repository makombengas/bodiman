import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutComponents from "@/components/layoutComponents/LayoutComponents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BODIMAN - Retten unsere Bodiman! ���",
  description: "retten wir Bodiman! Das Dorf Bodiman, im Bezirk Nkam (Nord-Makombe), Kamerun, ist in Gefahr!",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`!scroll-smooth ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutComponents children={children}  />
      </body>
    </html>
  );
}
