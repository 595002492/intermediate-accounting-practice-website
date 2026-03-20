import type { Metadata } from "next";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "中级会计师考试练习平台",
  description: "中级会计师三科练习平台（当前已接入财务管理2020年客观题真题）"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <NavBar />
        <main className="mx-auto w-full max-w-5xl px-4 py-6 md:px-6 md:py-8">{children}</main>
      </body>
    </html>
  );
}
