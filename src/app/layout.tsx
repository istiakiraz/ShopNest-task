import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "../../StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopNest",
  description:
    "Discover trendy fashion, top tech gadgets, and lifestyle essentials at ShopNest — your all-in-one online store. Enjoy fast delivery, secure checkout, and unbeatable deals every day.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={`${poppins.className} antialiased`}>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
            <Toaster />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
