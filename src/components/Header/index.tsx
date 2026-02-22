'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  // Toggle mobile drawer
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  // Sticky navbar
  const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Close drawer on route change
  useEffect(() => setNavbarOpen(false), [pathname]);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500  dark:text-blue-100
        ${sticky ? "bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 lg:py-3">

          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            HAMIDREZA
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuData.map((menu, idx) => (
              <div key={idx} className="relative group">
                {menu.path ? (
                  <Link href={menu.path} className="text-lg font-medium hover:text-primary transition">
                    {menu.title}
                  </Link>
                ) : (
                  <>
                    <button className="text-lg font-medium flex items-center gap-1" onClick={() => handleSubmenu(idx)}>
                      {menu.title} ⌄
                    </button>
                    <div className={`absolute top-full mt-2 w-48 rounded bg-white dark:bg-dark shadow-lg py-2 transition-all duration-300
                      ${openIndex === idx ? "opacity-100 visible" : "opacity-0 invisible"}
                    `}>
                      {menu.submenu?.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.path || "/"}
                          className="block px-4 py-2 text-base hover:text-primary dark:text-white/80 dark:hover:text-white"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            {/* <ThemeToggler /> */}
          </nav>

          <div className="flex justify-between items-center">
            <ThemeToggler />
            {/* Mobile toggle */}
            <button onClick={navbarToggleHandler} className="lg:hidden relative w-8 h-8 z-50">
              <span className={`absolute h-0.5 w-full bg-current transition-all duration-300 ${navbarOpen ? "rotate-45 top-3.5" : "top-2"}`} />
              <span className={`absolute h-0.5 w-full bg-current transition-all duration-300 ${navbarOpen ? "opacity-0" : "top-3.5"}`} />
              <span className={`absolute h-0.5 w-full bg-current transition-all duration-300 ${navbarOpen ? "-rotate-45 top-3.5" : "top-5"}`} />
            </button>
          </div>

          {/* Mobile overlay */}
          <div
            onClick={() => setNavbarOpen(false)}
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          />

          {/* Mobile drawer */}
          <div className={`fixed top-0 right-0 h-screen w-1/2 max-w-[400px] bg-white dark:bg-dark shadow-2xl z-50 transform transition-transform duration-500
            ${navbarOpen ? "translate-x-0" : "translate-x-full"}
          `}>
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
              <h2 className="text-lg font-semibold">منو</h2>
              <button onClick={() => setNavbarOpen(false)} className="text-2xl leading-none hover:rotate-90 transition">✕</button>
            </div>
            <nav className="p-6">
              <ul className="space-y-6">
                {menuData.map((menuItem, index) => (
                  <li key={index}>
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={() => setNavbarOpen(false)}
                        className="block text-lg font-medium hover:text-primary transition"
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className="flex items-center justify-between w-full text-lg font-medium"
                        >
                          {menuItem.title} ⌄
                        </button>
                        <div className={`mt-3 space-y-3 pl-4 transition-all duration-300 ${openIndex === index ? "block" : "hidden"}`}>
                          {menuItem.submenu?.map((submenuItem, i) => (
                            <Link
                              key={i}
                              href={submenuItem.path || "/"}
                              onClick={() => setNavbarOpen(false)}
                              className="block text-base hover:text-primary transition"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;