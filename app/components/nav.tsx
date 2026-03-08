"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Personal Insurance", href: "/services/personal" },
      { label: "Commercial Insurance", href: "/services/commercial" },
      { label: "Life & Health", href: "/services/life-health" },
    ],
  },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "Claims", href: "/claims" },
  { label: "Contact", href: "/contact" },
];

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L3.5 6.5V11.5C3.5 16.36 7.14 20.87 12 22C16.86 20.87 20.5 16.36 20.5 11.5V6.5L12 2Z" />
      <path d="M9 12L11 14L15 10" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        {/* ── Logo ── */}
        <Link href="#" className="flex items-center gap-2 shrink-0 group">
          <ShieldIcon
            className={`h-8 w-8 transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          />
          <span
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-secondary" : "text-white"
            }`}
          >
            Evergreen
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) =>
            link.children ? (
              /* Services dropdown */
              <div
                key={link.label}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md relative
                    after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[1.5px] after:bg-current after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                    hover:after:scale-x-100
                    ${
                      scrolled
                        ? "text-text-body hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    servicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-1"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center px-4 py-2.5 text-sm text-text-body hover:text-primary hover:bg-primary/5 transition-colors duration-150"
                        onClick={() => setServicesOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Regular link */
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md relative
                  after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[1.5px] after:bg-current after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${
                    scrolled
                      ? "text-text-body hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ── Desktop CTA ── */}
        <Link
          href="/get-a-quote"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white font-semibold rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
        >
          Get a Quote
        </Link>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled ? "bg-secondary" : "bg-white"
              } ${menuOpen ? "rotate-45 top-2" : ""}`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled ? "bg-secondary" : "bg-white"
              } ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled ? "bg-secondary" : "bg-white"
              } ${menuOpen ? "-rotate-45 top-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`relative bg-white border-t border-gray-100 shadow-xl transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="px-5 py-6 space-y-1 max-h-[calc(100dvh-72px)] overflow-y-auto">
            {NAV_LINKS.map((link) =>
              link.children ? (
                /* Services accordion */
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex items-center justify-between w-full min-h-[44px] text-secondary text-base font-medium py-2 px-2 rounded-lg hover:bg-surface transition-colors"
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 text-text-body transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 pb-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="flex items-center min-h-[44px] text-text-body text-sm font-medium py-2 px-3 rounded-lg hover:bg-surface hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular link */
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center min-h-[44px] text-secondary text-base font-medium py-2 px-2 rounded-lg hover:bg-surface transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/get-a-quote"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full min-h-[48px] px-6 py-3 bg-primary text-white font-semibold rounded-full text-base transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
