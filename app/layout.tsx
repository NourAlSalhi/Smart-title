import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Title",
  description: "Enter a task description, and our AI will suggest a smart and concise title for it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
