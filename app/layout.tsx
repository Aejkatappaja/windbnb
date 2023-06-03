import { Header } from "../components/Header";
import "@/globals.css";
import { Montserrat } from "next/font/google";
import { VisibleContextProvider } from "../context/DisplayModalContext";
import { Modal } from "../components/Modal";
import React from "react";

const montSerrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "windbnb",
  description: "windbnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montSerrat.className}>
        <VisibleContextProvider>
          <Header />
          <Modal />
        </VisibleContextProvider>
        {children}
      </body>
    </html>
  );
}
