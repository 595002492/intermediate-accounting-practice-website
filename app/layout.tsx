import type { Metadata } from "next";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "中级会计实务刷题 MVP",
  description: "支持章节练习、随机刷题、错题本和统计的中级会计实务练习网站"
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
