import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chat from "./Chat";
import MainWrapper from "./MainWrapper";
import {AnimationProvider} from "./AnimationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frederic's portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen overflow-x-hidden`}>
      <AnimationProvider>
        <Navbar />
        <MainWrapper>
          <main className="flex-grow flex flex-col">{children}</main>
        </MainWrapper>
        <Footer />
        <Chat />
      </AnimationProvider>
      </body>
    </html>
  );
}
