import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/chapters", label: "题组练习" },
  { href: "/random", label: "随机刷题" },
  { href: "/wrong-book", label: "错题本" },
  { href: "/stats", label: "统计" }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-base font-bold text-teal-800 md:text-lg">
          中级会计师考试练习平台
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700 md:gap-4">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-2 py-1 hover:bg-slate-100">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
