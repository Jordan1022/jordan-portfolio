import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jordan Allen | Senior Full-Stack Engineer & Technical Lead",
  description:
    "Portfolio for Jordan Allen, a senior full-stack engineer and technical lead focused on architecture, full-stack execution, and shipped software.",
  creator: "Jordan Allen",
  keywords: [
    "Jordan Allen",
    "Senior Full-Stack Engineer",
    "Technical Lead",
    "Software Architect",
    "Product Engineering",
  ],
  openGraph: {
    title: "Jordan Allen | Senior Full-Stack Engineer & Technical Lead",
    description:
      "Selected work across architecture, full-stack execution, modernization, AI workflows, and shipped product engineering.",
    type: "website",
  },
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
