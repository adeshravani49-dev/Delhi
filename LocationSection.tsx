import React, { useState } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { MapPin, Phone, MessageCircle, Clock, Copy, Check, ExternalLink, Navigation, Compass } from 'lucide-react';
import { OpenStatusBadge } from './OpenStatusBadge';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryGoal, setInquiryGoal] = useState('General Fitness');
  const [submitted, setSubmitted] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(GYM_DETAILS.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Hello Delhi Gym, my name is ${inquiryName} (${inquiryPhone}). I would like to enquire about memberships for: ${inquiryGoal}.`
    );
    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              Find Us In South Delhi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-wide font-bold text-white mt-1">
              Location & <span className="text-amber-400">Gym Timings</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-2">
              Conveniently situated in Durga Vihar, Devli (Sangam Vihar), easily reachable from Khanpur, Saket, and Shani Bazar.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <OpenStatusBadge />
            <a
              id="location-directions-top-btn"
              href={GYM_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow active:scale-95"
            >
              <Navigation className="w-4 h-4 fill-neutral-950" />
              <span>Get GPS Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Opening Hours Card */}
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Weekly Schedule</h3>
                    <p className="text-xs text-neutral-400">16.5 Continuous Hours Daily</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400">Mon - Sat</span>
              </div>

              <div className="space-y-2">
                {GYM_DETAILS.openingHours.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between text-xs py-2 px-3 rounded-lg ${
                      item.day === 'Sunday'
                        ? 'bg-rose-950/30 text-rose-300 border border-rose-900/30'
                        : 'bg-neutral-950/60 text-neutral-300'
                    }`}
                  >
                    <span className="font-semibold">{item.day}</span>
                    <span className={item.isOpen ? 'font-mono text-neutral-200' : 'font-bold text-rose-400'}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-neutral-400 mt-4 leading-normal">
                {GYM_DETAILS.popularTimesSummary}
              </p>
            </div>

            {/* Address & Contact Details Card */}
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 shadow-xl space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Gym Address</h4>
                    <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                      {GYM_DETAILS.address}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-[11px] text-amber-400 font-mono">
                      <span>Plus Code: {GYM_DETAILS.plusCode}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyAddress}
                  className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex-shrink-0"
                  title="Copy address"
                  aria-label="Copy Address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="pt-3 border-t border-neutral-800 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 text-center flex flex-col items-center justify-center gap-1 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white">Call Now</span>
                  <span className="text-[10px] text-neutral-400">{GYM_DETAILS.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%2C%20I%20want%20to%20enquire%20about%20Delhi%20Gym%20location%20and%20timings.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 text-center flex flex-col items-center justify-center gap-1 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-400">WhatsApp Chat</span>
                  <span className="text-[10px] text-neutral-400">Instant Reply</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Inquiry */}
          <div className="lg:col-span-7 space-y-6">
            {/* Map Container */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl h-[380px] flex flex-col">
              {/* Map interactive iframe centered on Sangam Vihar / Devli / Durga Vihar */}
              <iframe
                title="Delhi Gym Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.951913988636!2d77.2289!3d28.5025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a36b3f7f9b%3A0x7e8d2e8b23f2f01a!2sDurga%20Vihar%2C%20Devli%2C%20Sangam%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110080!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert-[0.85] hue-rotate-180 contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay card for quick navigation to the exact short link */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/95 backdrop-blur-md border border-neutral-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>Delhi Gay Gym / Delhi Gym</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Durga Vihar, Devli, Sangam Vihar, New Delhi 110080
                  </div>
                </div>

                <a
                  href={GYM_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-all flex items-center gap-1.5 flex-shrink-0 active:scale-95 shadow"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 shadow-xl">
              <h3 className="text-base font-bold text-white mb-1">
                Have a Question or Want to Visit Today?
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                Send your inquiry directly to the gym manager on WhatsApp for immediate response.
              </p>

              <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Fitness Interest
                  </label>
                  <select
                    value={inquiryGoal}
                    onChange={(e) => setInquiryGoal(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="General Fitness">General Fitness & Cardio</option>
                    <option value="Bodybuilding & Muscle Gain">Bodybuilding & Muscle Gain</option>
                    <option value="Fat Loss & Transformation">Fat Loss & Transformation</option>
                    <option value="Personal Training Coaching">Personal Training Coaching</option>
                  </select>
                </div>

                <div className="sm:col-span-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Message to Gym via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
