"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Truck, Send } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimateOnScroll>
          <nav className="flex items-center gap-2 text-sm text-[#111]/50 mb-8">
            <Link href="/" className="hover:text-[#111] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#111]">Contact</span>
          </nav>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#111]">
            Get in Touch
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="mt-4 text-lg text-[#111]/60 max-w-2xl">
            Ready to bring your furniture back to life? Contact us for a free,
            no-obligation consultation. We would love to hear about your project.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Large Phone CTA */}
      <section className="px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
        <AnimateOnScroll delay={0.15}>
          <a
            href="tel:0212881884"
            className="block backdrop-blur-[40px] bg-white/70 border border-white/50 rounded-2xl p-8 text-center shadow-[0_0_40px_rgba(255,255,255,0.15),0_1px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15),0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300"
          >
            <div className="flex items-center justify-center gap-3">
              <Phone size={28} className="text-[#111]" />
              <span className="text-3xl md:text-4xl font-bold text-[#111] tracking-tight">
                021 288 1884
              </span>
            </div>
            <p className="mt-2 text-sm text-[#111]/50">
              Tap to call — free consultation
            </p>
          </a>
        </AnimateOnScroll>
      </section>

      {/* Two Column: Form + Details */}
      <section className="px-6 lg:px-8 pb-24 surface-grey-light py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimateOnScroll direction="left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#111] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-input w-full px-4 py-3 rounded-xl text-[#111] text-sm placeholder:text-[#111]/30 focus:outline-none focus:ring-2 focus:ring-[#111]/10 transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#111] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 rounded-xl text-[#111] text-sm placeholder:text-[#111]/30 focus:outline-none focus:ring-2 focus:ring-[#111]/10 transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#111] mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-[#111] text-sm placeholder:text-[#111]/30 focus:outline-none focus:ring-2 focus:ring-[#111]/10 transition-all duration-200"
                    placeholder="021 000 0000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#111] mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="glass-input w-full px-4 py-3 rounded-xl text-[#111] text-sm focus:outline-none focus:ring-2 focus:ring-[#111]/10 transition-all duration-200 appearance-none"
                >
                  <option value="">Select a subject</option>
                  <option value="restoration">Furniture Restoration</option>
                  <option value="french-polish">French Polishing</option>
                  <option value="repair">Structural Repairs</option>
                  <option value="refinish">Refinishing</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="other">Other Enquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#111] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass-input w-full px-4 py-3 rounded-xl text-[#111] text-sm placeholder:text-[#111]/30 focus:outline-none focus:ring-2 focus:ring-[#111]/10 transition-all duration-200 resize-none"
                  placeholder="Tell us about your piece — type of furniture, timber, what needs doing..."
                />
              </div>

              <button
                type="submit"
                className="glass-pill inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-200"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </AnimateOnScroll>

          {/* Contact Details */}
          <AnimateOnScroll direction="right" delay={0.1}>
            <div className="space-y-6">
              {/* Details Card */}
              <div className="glass-thick rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-[#111] mb-6">
                  Contact Details
                </h3>

                <div className="space-y-5">
                  <a
                    href="tel:0212881884"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#111]/5 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[#111]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#111] group-hover:text-[#333] transition-colors">
                        021 288 1884
                      </p>
                      <p className="text-xs text-[#111]/50 mt-0.5">
                        Call or text anytime
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:mark@earthwood.co.nz"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#111]/5 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#111]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#111] group-hover:text-[#333] transition-colors">
                        mark@earthwood.co.nz
                      </p>
                      <p className="text-xs text-[#111]/50 mt-0.5">
                        Email us anytime
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#111]/5 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#111]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#111]">
                        2124 State Highway 16
                      </p>
                      <p className="text-xs text-[#111]/50 mt-0.5">
                        Helensville, Auckland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#111]/5 flex items-center justify-center flex-shrink-0">
                      <Truck size={18} className="text-[#111]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#111]">
                        Auckland-Wide Pickup & Delivery
                      </p>
                      <p className="text-xs text-[#111]/50 mt-0.5">
                        Every Thursday
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#111]/5 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[#111]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#111]">
                        Free Consultation
                      </p>
                      <p className="text-xs text-[#111]/50 mt-0.5">
                        No obligation — just good advice
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-black/[0.06]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.5!2d174.45!3d-36.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d0147a9f1c3b7%3A0x500ef6143a2d500!2s2124+State+Highway+16%2C+Helensville!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EarthWood Location — 2124 State Highway 16, Helensville, Auckland"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
              Prefer to talk?
            </h2>
            <p className="mt-4 text-lg text-[#111]/60">
              Give Mark a call directly. He is always happy to chat about your
              furniture and what is possible.
            </p>
            <a
              href="tel:0212881884"
              className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-3.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-200"
            >
              <Phone size={16} />
              021 288 1884
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
