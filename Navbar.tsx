import React, { useState } from 'react';
import { GymLogo } from './GymLogo';
import { OpenStatusBadge } from './OpenStatusBadge';
import { Phone, MessageCircle, MapPin, Menu, X, Star } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface NavbarProps {
  onOpenFreeTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFreeTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Equipment', href: '#equipment' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Membership Packages', href: '#membership' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'BMI Calculator', href: '#calculator' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-all"
    >
      {/* Top micro-bar */}
      <div className="bg-neutral-900/90 border-b border-neutral-800/60 px-4 py-1 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <OpenStatusBadge showDetails={true} />
            <span className="hidden md:inline-flex items-center gap-1 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Durga Vihar, Devli, Sangam Vihar, New Delhi</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="topbar-maps-link"
              href={GYM_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold">4.5★ (105 Reviews on Maps)</span>
            </a>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <a
              id="topbar-phone-link"
              href={`tel:${GYM_DETAILS.phone}`}
              className="hidden sm:inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{GYM_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <a href="#" className="flex-shrink-0">
            <GymLogo />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-call-btn"
              href={`tel:${GYM_DETAILS.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700/80 hover:bg-neutral-800 hover:border-neutral-600 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Us</span>
            </a>

            <a
              id="nav-whatsapp-btn"
              href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%2C%20I%20want%20to%20enquire%20about%20Delhi%20Gym%20membership%20and%20timings.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-600/40 hover:bg-emerald-900/50 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              id="nav-free-trial-btn"
              onClick={onOpenFreeTrial}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              <span>1-Day Free Trial</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="nav-mobile-free-trial-btn"
              onClick={onOpenFreeTrial}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-neutral-950 bg-amber-400 active:scale-95"
            >
              Free Trial
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden border-b border-neutral-800 bg-neutral-950/98 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-neutral-900 text-neutral-200 font-semibold text-sm border border-neutral-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Reception ({GYM_DETAILS.phone})</span>
            </a>

            <a
              href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%2C%20I%20want%20to%20enquire%20about%20Delhi%20Gym%20membership%20and%20timings.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-600/50 text-emerald-300 font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={GYM_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-neutral-800 text-neutral-200 font-semibold text-sm"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
