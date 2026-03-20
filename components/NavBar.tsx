"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页" },
  { href: "/chapters", label: "题组练习" },
  { href: "/random", label: "随机刷题" },
  { href: "/wrong-book", label: "错题本" },
  { href: "/stats", label: "统计" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0">
          <p className="text-base font-bold text-slate-900 md:text-lg">中级会计练习平台</p>
          <p className="text-xs text-slate-500">中级会计师考试 · 三科刷题</p>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-2 text-sm text-slate-700 md:gap-3">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-2.5 py-1.5 transition ${
                  active ? "bg-teal-50 font-semibold text-teal-700" : "hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
