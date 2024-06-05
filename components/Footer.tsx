import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 text-sm">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="mb-8 lg:mb-0 w-full lg:w-auto">
          <h2 className="mb-4">ABOUT</h2>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-primary text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-primary text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-primary text-white"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="w-full lg:w-auto lg:ml-auto">
          <h2 className="mb-4">OUR LOCATION</h2>
          <address className="not-italic mb-4">
            Tallinn University, S-244
            <br />
            Tallinn, Estonia
          </address>
          <br />
          <p>2024 © PhilanthroLink Digital Platform.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
