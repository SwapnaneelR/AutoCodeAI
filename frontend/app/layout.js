import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "../components/ui/Background";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AutoCode AI",
  description: "Get AI powered Code Reviews with the click of a button!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background>{children}</Background>
      </body>
    </html>
  );
}
