import "./globals.css";
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Windbnb",
  description: "Windbnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montSerrat.className}>{children}</body>
    </html>
  );
}
