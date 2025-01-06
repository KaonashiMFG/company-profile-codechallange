"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-secondary">
      {/* Desktop Navbar */}
      <div className="hidden h-14 items-center justify-between px-4 lg:flex lg:px-8 xl:px-16 2xl:px-24">
        {/* Left Links */}
        <div className="flex items-center gap-8 xl:gap-28">
          <Link href="/about" className="nav">
            About
          </Link>
          <Link href="/services" className="nav">
            Services
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex h-full items-center justify-center">
          <Link href={"/"}>
            <div className="flex h-28 w-28 overflow-hidden rounded-full border-2 border-accent bg-primary xl:h-36 xl:w-36">
              <Image
                src={"/navbar/logoRBJ.webp"}
                width={80}
                height={80}
                alt="logo rbj"
                className="relative top-4 m-auto"
              />
            </div>
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-8 xl:gap-28">
          <Link href="/gallery" className="nav">
            Gallery
          </Link>
          <Link href="/contact" className="nav">
            Contacts
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          {/* Mobile Logo */}
          <Link href={"/"}>
            <div className="flex h-20 w-20 overflow-hidden rounded-full border-2 border-accent bg-primary">
              <Image
                src={"/navbar/logoRBJ.webp"}
                width={60}
                height={60}
                alt="logo rbj"
                className="relative top-3 m-auto"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="rounded p-2 hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 z-50 bg-secondary pb-4 shadow-lg">
            <nav className="flex flex-col space-y-4 px-4 pt-2">
              <Link
                href="/about"
                className="nav block py-2 hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="nav block py-2 hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="nav block py-2 hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contacts"
                className="nav block py-2 hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacts
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}