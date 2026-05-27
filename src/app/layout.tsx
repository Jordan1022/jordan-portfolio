import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jordan Allen | Senior Full-Stack Engineer & Technical Lead",
  description:
    "Portfolio for Jordan Allen, a senior full-stack engineer and technical lead focused on architecture, full-stack execution, and shipped software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
