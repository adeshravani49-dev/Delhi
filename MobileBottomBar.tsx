import React from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { Phone, MessageCircle, MapPin, Ticket } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenFreeTrial: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenFreeTrial }) => {
  return (
    <div
      id="mobile-sticky-cta-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800 px-3 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Call button */}
        <a
          href={`tel:${GYM_DETAILS.phone}`}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-semibold mt-0.5">Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Delhi%20Gym%2C%20I%20want%20to%20know%20more%20about%20membership%20and%20timings.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-emerald-950/70 border border-emerald-600/40 text-emerald-300 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
        </a>

        {/* Directions button */}
        <a
          href={GYM_DETAILS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 active:scale-95 transition-all"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-semibold mt-0.5">Maps</span>
        </a>

        {/* Free Pass CTA */}
        <button
          onClick={onOpenFreeTrial}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-bold active:scale-95 transition-all shadow"
        >
          <Ticket className="w-4 h-4 fill-neutral-950" />
          <span className="text-[10px] font-extrabold mt-0.5">Free Trial</span>
        </button>
      </div>
    </div>
  );
};
