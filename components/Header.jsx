"use client";
import Image from "next/image";

export default function Header() {
  function toggleTheme() {
    try {
      const el = document.documentElement;
      el.classList.toggle("light");
      const isLight = el.classList.contains("light");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch (e) {
      // no-op
    }
  }

  return (
    <header className="nav-bg fixed top-0 left-0 right-0 z-50 bg-[rgba(21,32,54,0.75)] backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/favicon/android-chrome-192x192.png"
            alt="Leo Leung"
            width={36}
            height={36}
            priority
            className="w-9 h-9 rounded-full object-cover border border-white/20"
          />
          <span className="font-semibold tracking-wide">Leo&nbsp;Leung</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          <a href="/#skills" className="hover:opacity-80">Skills</a>
          <a href="/#projects" className="hover:opacity-80">Projects</a>
          <a href="/#community" className="hover:opacity-80">Community</a>
          <a href="/#contact" className="hover:opacity-80">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/cv" className="text-sm px-3 py-1.5 border border-white/20 rounded-full hover:bg-white/10" aria-label="Go to CV">CV</a>
          <button onClick={toggleTheme} className="text-sm px-3 py-1.5 border border-white/20 rounded-full hover:bg-white/10" aria-label="Toggle theme">Theme</button>
        </div>
      </div>
    </header>
  );
}
