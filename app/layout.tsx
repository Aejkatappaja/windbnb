import { Modal } from "./components/modal/modal";
import { VisibleContextProvider } from "./context/isVisibleContext";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "windbnb",
  description: "Windbnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <VisibleContextProvider>
        <body className={montSerrat.className}>{children}</body>
      </VisibleContextProvider>
    </html>
  );
}
