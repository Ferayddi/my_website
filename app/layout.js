import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chat from "./Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frederic's portfolio",
  description: "My personal portfolio",
};
/*
<html lang="en">
        
        <body className={`${inter.className} w-full`}>
          <Navbar />
          {children}
          <Footer />
        
          </body>

    </html>
    */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Chat />
      </body>
    </html>
  );
}
