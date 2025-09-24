import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "../lib/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RentEasy",
  description: "Find and rent or buy apartments easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
