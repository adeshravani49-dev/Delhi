import React from 'react';
import { GymLogo } from './GymLogo';
import { GYM_DETAILS } from '../data/gymData';
import { MapPin, Phone, MessageCircle, Star, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs pt-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Motto */}
          <div className="space-y-4">
            <GymLogo />
            <p className="text-xs text-neutral-400 leading-relaxed">
              South Delhi’s top-rated fitness center. Reach your potential with our complete plate-loaded equipment,
              certified trainers, and pocket-friendly memberships.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.5 Rating (105 Google Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#equipment" className="hover:text-amber-400 transition-colors">
                  Gym Equipment & Machines
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Workout Gallery & Photos
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-amber-400 transition-colors">
                  Pocket-Friendly Plans
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Google Maps Reviews (105)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  BMI & Diet Calculator
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Directions & Timings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Gym Timings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Timings & Hours</h4>
            <div className="space-y-1.5 text-neutral-300">
              <div className="flex justify-between">
                <span>Monday – Saturday:</span>
                <span className="font-semibold text-white">5:30 am – 10:00 pm</span>
              </div>
              <div className="flex justify-between text-rose-400">
                <span>Sunday:</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
            <p className="text-[11px] text-neutral-500 pt-1">
              Open 16.5 continuous hours daily for morning workouts and late night gym sessions.
            </p>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Address & Map</h4>
            <p className="text-neutral-300 leading-relaxed text-xs">
              {GYM_DETAILS.address}
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="inline-flex items-center gap-1.5 text-white hover:text-amber-400 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{GYM_DETAILS.phone}</span>
              </a>

              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 underline font-semibold"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Open in Google Maps Listing</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Delhi gay gym. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>F6XG+MPH Durga Vihar, Devli, Sangam Vihar, New Delhi 110080</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
