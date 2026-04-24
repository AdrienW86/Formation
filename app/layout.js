import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from '../components/Footer/Footer'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Formatiz - Formations IA et Digitales",
  description: "Que vous soyez entrepreneur, chercheur d'emploi ou particulier, découvrez nos solutions pour vous faire gagner du temps et de l'argent grâce à nos logiciels gratuits et apprenez à maitriser l'IA comme un véritable professionnel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
