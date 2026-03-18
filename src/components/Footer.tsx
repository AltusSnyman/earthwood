"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Tips & Care", href: "/tips" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Domestic Restoration",
  "Commercial Timber",
  "French Polishing",
  "Stain Matching",
  "Wax Finishing",
  "Modern Coatings",
];

export default function Footer() {
  return (
    <footer className="w-full surface-grey-light">
      {/* Top border */}
      <div className="h-px glass border-0 border-t border-white/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-[#111] font-bold text-lg tracking-[0.25em]">
                EARTHWOOD
              </span>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Auckland&rsquo;s most trusted furniture restoration specialists.
              Over 45 years of craftsmanship, bringing treasured pieces back to
              life.
            </p>
            {/* Social Placeholders */}
            <div className="flex gap-3 mt-6">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-200/60 hover:bg-neutral-300/60 text-neutral-500 hover:text-[#111] transition-colors duration-200 text-xs font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#111] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-[#111] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#111] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-neutral-500">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#111] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="text-neutral-400 mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-neutral-500 leading-relaxed">
                  2124 State Highway 16,
                  <br />
                  Helensville, Auckland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  strokeWidth={1.5}
                  className="text-neutral-400 flex-shrink-0"
                />
                <a
                  href="tel:0212881884"
                  className="text-sm text-neutral-500 hover:text-[#111] transition-colors duration-200"
                >
                  021 288 1884
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="text-neutral-400 flex-shrink-0"
                />
                <a
                  href="mailto:mark@earthwood.co.nz"
                  className="text-sm text-neutral-500 hover:text-[#111] transition-colors duration-200"
                >
                  mark@earthwood.co.nz
                </a>
              </li>
            </ul>

            {/* Google Maps */}
            <div className="mt-6 rounded-xl overflow-hidden border border-neutral-200">
              <iframe
                title="EarthWood Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.1!2d174.45!3d-36.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d1b2e2b2b2b2b%3A0x0!2s2124+State+Highway+16%2C+Helensville!5e0!3m2!1sen!2snz!4v1700000000000"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            &copy; 2024 EarthWood Ltd. All Rights Reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Crafted with care in Helensville, Auckland.
          </p>
        </div>
      </div>
    </footer>
  );
}
