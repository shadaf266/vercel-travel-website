import { Questrial } from 'next/font/google'
import Head from 'next/head'; // Import Head from next/head
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@fonts/css/switzer.css";
import "./globals.css";

import "@fonts/font-awesome.min.css";

import "@css/plugins/bootstrap-grid.css";

import "@css/plugins/swiper.min.css";

import "@css/plugins/magnific-popup.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Preloader from "@/layouts/Preloader";
import "@css/style.css";

const secondary_font = Questrial({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata = {
  title: " VoyAgency | Travel Management for Small Businesses",
  description: "Quadcan Solutions Inc. is a Toronto, Canada based government-to-citizen (G2C) solutions innovator. We closely work with the government agencies to provide solutions around public security, immigration and border services, and airport passenger facilitation. All solutions focus on the providing an exceptional service level to the citizen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${secondary_font.variable}`}>
         <Head>
        <link rel="icon" href="/favicon.ico" /> {/* Add this line */}
      </Head>
      <body>
        {/* <Preloader /> */}
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
