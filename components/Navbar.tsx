"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Github, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in localStorage or system preference
    const darkMode =
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#hero", label: "Hero" },
    { href: "#about", label: "About" },
    { href: "#price", label: "Price" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-max">
      {/* Floating Glass Morphism Navbar */}
      <nav className="px-6 py-3 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/40 dark:border-gray-700/40 shadow-lg">
        <div className="flex justify-between items-center gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="#" className="text-lg font-bold text-blue-600 dark:text-blue-400">
              LT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side: GitHub and Dark Mode */}
          <div className="flex items-center gap-3">
            {/* GitHub Icon */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/20 transition duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-800 dark:text-gray-200" />
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/20 transition duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun size={20} className="text-gray-800 dark:text-gray-200" />
              ) : (
                <Moon size={20} className="text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-1 rounded-md text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/40 dark:border-gray-700/40 rounded-2xl overflow-hidden">
            <div className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-gray-700/20 rounded-lg transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
