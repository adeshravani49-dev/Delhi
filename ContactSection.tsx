import React, { useState } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import {
  MapPin,
  Mail,
  User,
  MessageSquare,
  Phone,
  MessageCircle,
  Clock,
  Copy,
  Check,
  ExternalLink,
  Send,
  Navigation,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { OpenStatusBadge } from './OpenStatusBadge';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyAddress = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(GYM_DETAILS.address);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = GYM_DETAILS.address;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.warn('Clipboard write restricted in current frame:', err);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Delhi gay gym, my name is ${name || 'Prospective Member'} (${email || 'No email provided'}).\n\nMessage: ${message || 'I would like to enquire about memberships and timings.'}`
    );
    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-wide font-bold text-white mt-1">
              Contact <span className="text-amber-400">Us</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-2">
              Have a question about our membership packages, equipment, or personal training?
              Send us a message or visit us in Durga Vihar, Devli (Sangam Vihar).
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <OpenStatusBadge />
            <a
              id="contact-get-directions-btn"
              href={GYM_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow active:scale-95"
            >
              <Navigation className="w-4 h-4 fill-neutral-950" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Simple Contact Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 shadow-xl">
              <div className="border-b border-neutral-800 pb-4 mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>Send Us a Message</span>
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your details below and our team will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-neutral-950 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Message Received!</h4>
                    <p className="text-xs text-neutral-300 mt-1">
                      Thank you, <span className="text-amber-400 font-semibold">{name}</span>. We will respond to{' '}
                      <span className="text-neutral-200 underline">{email}</span> within a few hours.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-600/40 hover:bg-emerald-900/60 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Also Chat on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 transition-all"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      <span>Name</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-400" />
                      <span>Email</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                      <span>Message</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you? Ask about membership packages, personal training, trial sessions, or timings..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 disabled:bg-neutral-800 text-neutral-950 transition-all flex items-center justify-center gap-2 shadow active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-600/40 hover:bg-emerald-900/50 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Quick direct contact links */}
              <div className="mt-8 pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  id="contact-phone-direct"
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-amber-400/40 flex items-center gap-3 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400">Call Directly</div>
                    <div className="text-xs font-semibold text-white">{GYM_DETAILS.phone}</div>
                  </div>
                </a>

                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400">Working Hours</div>
                    <div className="text-xs font-semibold text-white">Mon–Sat: 5:30 AM – 10 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map using Google Maps Link & Address Below */}
          <div className="lg:col-span-6 space-y-6">
            {/* Embedded Google Map Container */}
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <div className="bg-neutral-900 px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white">Live Google Maps Location</span>
                </div>
                <a
                  href={GYM_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map iframe using Google Maps Embed */}
              <div className="relative h-[340px] sm:h-[380px] w-full bg-neutral-950">
                <iframe
                  id="google-maps-embed-iframe"
                  title="Delhi gay gym on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.184857945037!2d77.23126!3d28.50853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce13a36c724bf%3A0x204e364f46ff5bd9!2sDelhi%20Gym!5e0!3m2!1sen!2sin!4v1710300000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating link pill on the map */}
                <div className="absolute top-3 left-3 right-3 sm:right-auto z-10">
                  <a
                    href={GYM_DETAILS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-neutral-700 text-[11px] font-semibold text-amber-300 hover:bg-neutral-900 transition-all shadow-lg"
                  >
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>Delhi gay gym Listing (105+ Reviews)</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              </div>

              {/* REQUIRED: Gym Address below the embedded map */}
              <div id="gym-address-card" className="p-5 sm:p-6 bg-neutral-900/90 border-t border-neutral-800">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                        Official Gym Address
                      </div>
                      <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                        {GYM_DETAILS.address}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-[11px] text-amber-400 font-mono">
                          Plus Code: {GYM_DETAILS.plusCode}
                        </span>
                        <span className="text-xs text-neutral-400">
                          Near Shani Bazar & Khanpur Border
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Copy address button */}
                  <button
                    id="copy-address-btn"
                    onClick={copyAddress}
                    className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-400/50 transition-all flex-shrink-0"
                    title="Copy Address"
                    aria-label="Copy Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Direct Action Buttons below address */}
                <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-3">
                  <a
                    id="open-in-google-maps-btn"
                    href={GYM_DETAILS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold transition-all shadow"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>

                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
