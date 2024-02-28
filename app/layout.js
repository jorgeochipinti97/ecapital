import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecapital",
  description: "Somos una empresa de logística y asesoría para envíos internacionales. Trabajamos en conjunto con las mejores empresas de courier del mercado como lo son  FedEx y DHL. Obtené tu cotización y hacé crecer tu negocio al mundo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
  <Head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
