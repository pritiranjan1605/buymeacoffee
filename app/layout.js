import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/sessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuyMEaCoffe - crowd fund yourself",
  description: "BuyMEaCoffe - Crowdfund Yourself: Empower your creativity with direct support from your audience. BuyMEaCoffe is a user-friendly platform for artists, writers, developers, and more to receive financial backing through one-time or recurring contributions. Transform your passion into a sustainable income by engaging with your community and showcasing your work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
        <SessionWrapper>
        <Navbar />
        <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">{children}</div>
        
        
        

        <Footer />
        </SessionWrapper>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>

      </body>
    </html>
  );
}
