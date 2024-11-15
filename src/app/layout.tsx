import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import Header from "@/components/header";
import Head from "next/head";

const ubuntu = Ubuntu({
  weight: ['400', '700'], 
  subsets: ['latin'],  
});

export const metadata: Metadata = {
  title: "Movie Booking",
  description: "Movie Booking Plaform",
  icons: {
    icon: "/moviehub.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/moviehub.png" type="image/png" />
        <link rel="shortcut icon" href="/moviehub.png" type="image/png" />
      </Head>
      <body className={ubuntu.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
