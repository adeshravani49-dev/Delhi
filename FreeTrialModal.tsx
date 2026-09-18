import React, { useState } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { X, CheckCircle, Ticket, Calendar, Clock, MapPin, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { GymLogo } from './GymLogo';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (6:00 AM - 9:00 AM)');
  const [goal, setGoal] = useState('Muscle Building');
  const [passGenerated, setPassGenerated] = useState(false);
  const [passCode, setPassCode] = useState('');

  if (!isOpen) return null;

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'DG-' + Math.floor(100000 + Math.random() * 900000);
    setPassCode(randomCode);
    setPassGenerated(true);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Delhi gay gym, I have booked a 1-Day Free Trial Pass (Code: ${passCode}) for ${fullName} (${phone}). Slot: ${preferredSlot}. Goal: ${goal}. Please confirm my workout visit!`
    );
    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      id="free-trial-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!passGenerated ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Complimentary Guest Pass</span>
            </div>

            <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide">
              Claim Your 1-Day <span className="text-amber-400">Free Trial</span>
            </h3>
            <p className="text-xs text-neutral-400 mt-1 mb-6">
              Experience the equipment, check out our astro-turf area, and meet our certified coaches before taking a membership.
            </p>

            <form onSubmit={handleGeneratePass} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Vikash Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Mobile Number / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98110 XXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Early Morning (5:30 AM - 8:00 AM)">Early Morning (5:30 AM - 8:00 AM)</option>
                    <option value="Morning (8:00 AM - 11:00 AM)">Morning (8:00 AM - 11:00 AM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                    <option value="Night (8:00 PM - 10:00 PM)">Night (8:00 PM - 10:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Weight & Fat Loss">Weight & Fat Loss</option>
                    <option value="General Strength">General Strength</option>
                    <option value="Stamina & Cardio">Stamina & Cardio</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Generate Free Day Pass Ticket</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-neutral-500">
                100% Free • No credit card or advance fee required • Show ticket at reception
              </div>
            </form>
          </div>
        ) : (
          /* Generated Ticket View */
          <div className="text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                Day Pass Activated!
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Show this digital pass at the Delhi gay gym front desk.
              </p>
            </div>

            {/* Visual Ticket card */}
            <div className="p-5 rounded-2xl bg-neutral-950 border-2 border-dashed border-amber-400/60 text-left space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <GymLogo size="sm" showSubtitle={false} />
                <span className="px-2.5 py-1 rounded bg-amber-400 text-neutral-950 font-mono font-bold text-xs">
                  {passCode}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-neutral-500 block text-[10px]">Guest Name:</span>
                  <span className="font-bold text-white">{fullName}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px]">Slot Time:</span>
                  <span className="font-bold text-amber-300">{preferredSlot.split('(')[0]}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px]">Phone:</span>
                  <span className="font-mono text-neutral-200">{phone}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px]">Valid Until:</span>
                  <span className="text-emerald-400 font-semibold">Valid 7 Days</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-900 text-[11px] text-neutral-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="truncate">Durga Vihar, Devli, Sangam Vihar, New Delhi</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Visit on WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white"
              >
                Close Pass
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
