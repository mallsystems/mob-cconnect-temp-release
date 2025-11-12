import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Import Poppins
import "./globals.css";

// 2. Configure Poppins to match your request
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Optional: if you want to use it as a CSS variable
});

export const metadata: Metadata = {
  title: "Download Connect by Cursor App",
  description: "Connect by Cursor Official App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Add suppressHydrationWarning to fix the hydration error
    <html lang="en" suppressHydrationWarning>
      {/* 4. Apply the Poppins font class to the body */}
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}