import { Geist, Geist_Mono, Playfair } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

export const metadata = {
  title: "Dee Oak-line Furniture|Turing Imaginations Into Reality",
  description: "Where You Can Pick Your Choices",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
      <Navbar/> 
       {children}
      <Footer/>
       </Provider>
        </body>
    </html>
  );
}
