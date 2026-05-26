import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мои задачи",
  description: "Сравнение Vite + React Router и Next.js + Turbopack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}