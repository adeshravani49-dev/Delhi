import React from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { OpenStatusBadge } from './OpenStatusBadge';
import { MapPin, Phone, MessageCircle, Star, ShieldCheck, Dumbbell, Award, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenFreeTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFreeTrial }) => {
  return (
    <section id="hero-section" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 pb-16">
      {/* Background with Dark Atmospheric Gym Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Delhi Gym Workout Floor"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.25] contrast-[1.15]"
        />
        {/* Subtle energetic radial glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status & Rating Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <OpenStatusBadge showDetails={true} />

              <a
                id="hero-maps-badge"
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-all"
              >
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-white">4.5</span>
                <span className="text-amber-200/80">(105 Reviews on Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest font-semibold">
                Durga Vihar, Devli, Sangam Vihar
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight text-white leading-[0.9]">
                Delhi <span className="text-amber-400">Gym</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-display uppercase tracking-widest font-semibold text-neutral-300">
                Reach Your Potential
              </p>
            </div>

            {/* Subtitle Description based on real features */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
              South Delhi’s premier power and conditioning destination. Featuring heavy-duty
              plate-loaded machines, Elite Fitness cable crossover, commercial treadmills, synthetic green turf,
              and experienced coaches with pocket-friendly membership.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full pt-2">
              <button
                id="hero-claim-trial-btn"
                onClick={onOpenFreeTrial}
                className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/25 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Claim Free 1-Day Trial</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                id="hero-directions-btn"
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-neutral-100 bg-neutral-900/90 border border-neutral-700/80 hover:bg-neutral-800 hover:border-neutral-500 transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Get Directions (Maps)</span>
              </a>

              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%2C%20I%20want%20to%20know%20about%20membership%20plans%20and%20timings%20at%20Delhi%20Gym.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/60 border border-emerald-600/40 hover:bg-emerald-900/60 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Micro Location Info */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{GYM_DETAILS.address}</span>
            </div>
          </div>

          {/* Right Card / Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-neutral-800/90 p-6 shadow-2xl backdrop-blur-md">
              {/* Highlight badge */}
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 mb-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                    Gym Highlights
                  </div>
                  <div className="text-lg font-bold text-white">Why Members Love Delhi gay gym</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  4.5 / 5.0 ★
                </div>
              </div>

              {/* Verified Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/60">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-100">All Machines & Weights Available</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Plate-loaded chest press, Elite Fitness multi-cables, leg press, smith machine & dumbbells up to 35kg+.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/60">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-100">Experienced & Certified Coaches</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Friendly guidance on posture, form, diet, and personalized bodybuilding workout splits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/60">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-100">Pocket Friendly & Transparent Fees</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Exceptional value with monthly plans starting at just ₹999. No hidden charges or pushy sales.
                    </p>
                  </div>
                </div>

                {/* Timings snippet */}
                <div className="pt-2 flex items-center justify-between text-xs text-neutral-300 px-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Mon - Sat: <strong>5:30 AM – 10:00 PM</strong></span>
                  </span>
                  <span className="text-neutral-500">Sunday: Closed</span>
                </div>
              </div>

              {/* Quick Call Action */}
              <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-neutral-400">Direct Reception Call:</div>
                  <a
                    href={`tel:${GYM_DETAILS.phone}`}
                    className="text-sm font-bold text-white hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{GYM_DETAILS.phone}</span>
                  </a>
                </div>

                <a
                  href={GYM_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-2 flex items-center gap-1"
                >
                  <span>105 Reviews on Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
