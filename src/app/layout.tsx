import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbarnotlogin";
import Footer from "./components/footer";
import { Noto_Sans_Thai} from "next/font/google";
import SessionProvider from "./components/sessionProvider";
 
const noto_sans_thai = Noto_Sans_Thai({ subsets: ["latin"]
  
 });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
   
     
      <html lang="en">
      <body className={noto_sans_thai.className}>
        {/* Layout UI */}
       <SessionProvider> <NavBar />
      <main >{children}</main>
      <Footer /></SessionProvider>
      </body>
    </html>
      
      
    
  );
}
