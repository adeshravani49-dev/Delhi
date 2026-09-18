import React, { useState } from 'react';
import { MEMBERSHIP_TIERS, MEMBERSHIP_PLANS, GYM_DETAILS } from '../data/gymData';
import { MembershipPackage } from '../types';
import { Check, Sparkles, MessageCircle, Phone, ArrowRight, Shield, Crown, Dumbbell, Zap } from 'lucide-react';

interface MembershipSectionProps {
  onOpenFreeTrial: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenFreeTrial }) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('tier-premium');
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [showAnnualPlans, setShowAnnualPlans] = useState<boolean>(false);

  const getTierIcon = (name: string) => {
    switch (name) {
      case 'Basic':
        return <Dumbbell className="w-5 h-5 text-amber-400" />;
      case 'Premium':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'VIP':
        return <Crown className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const getWhatsAppMessage = (tier: MembershipPackage) => {
    const priceStr = currency === 'USD' ? `$${tier.priceUSD}/month` : `₹${tier.priceINR}/month`;
    return encodeURIComponent(
      `Hello Delhi gay gym, I am interested in joining the ${tier.name} Membership Package (${priceStr} - ${tier.coreBenefit}). Please share details on joining and schedule.`
    );
  };

  return (
    <section id="membership" className="py-20 bg-neutral-900/40 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-wide font-bold text-white mt-1">
            Membership <span className="text-amber-400">Packages</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Choose the ideal tier for your fitness ambitions. From independent floor training to
            all-inclusive class memberships and dedicated 1-on-1 personal coaching.
          </p>

          {/* Currency Toggle */}
          <div className="mt-6 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-neutral-950 border border-neutral-800">
            <span className="text-xs text-neutral-400 pl-2 pr-1 font-medium">Currency:</span>
            <button
              id="currency-usd-btn"
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              id="currency-inr-btn"
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currency === 'INR'
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* 3 Tiers Grid: Basic, Premium, VIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier) => {
            const isSelected = selectedTierId === tier.id;
            const priceDisplay = currency === 'USD' ? `$${tier.priceUSD}` : `₹${tier.priceINR.toLocaleString('en-IN')}`;

            return (
              <div
                key={tier.id}
                id={`package-tier-${tier.id}`}
                onClick={() => setSelectedTierId(tier.id)}
                className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  tier.popular
                    ? 'bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border-amber-400 shadow-2xl shadow-amber-500/10 ring-2 ring-amber-400/40 md:-translate-y-2'
                    : isSelected
                    ? 'bg-neutral-900/95 border-amber-500/50 shadow-xl'
                    : 'bg-neutral-950/90 border-neutral-800/90 hover:border-neutral-700'
                }`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-neutral-950 text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Tier Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                        {getTierIcon(tier.name)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                        <span className="text-xs text-amber-400/90 font-medium">
                          {tier.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="my-6 pb-6 border-b border-neutral-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                        {priceDisplay}
                      </span>
                      <span className="text-sm font-medium text-neutral-400">/{tier.duration}</span>
                    </div>
                    {/* Core benefit pill */}
                    <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800/80 text-xs text-neutral-200 font-semibold">
                      {tier.coreBenefit}
                    </div>
                  </div>

                  {/* Description of benefits */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Package Benefits
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {tier.benefitsDescription}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      What's Included:
                    </div>
                    <ul className="space-y-2.5">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-200">
                          <div
                            className={`p-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                              tier.popular
                                ? 'bg-amber-400 text-neutral-950'
                                : 'bg-emerald-500/20 text-emerald-400'
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-800/60">
                  <a
                    id={`join-${tier.name.toLowerCase()}-package-btn`}
                    href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${getWhatsAppMessage(tier)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow active:scale-[0.98] ${
                      tier.popular
                        ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300'
                        : 'bg-neutral-800 text-white hover:bg-amber-400 hover:text-neutral-950'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Select {tier.name} Package</span>
                  </a>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenFreeTrial();
                    }}
                    className="w-full py-2 text-xs font-medium text-neutral-400 hover:text-amber-400 text-center transition-colors"
                  >
                    Or Start with a 1-Day Free Trial →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Long-term commitment options accordion */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAnnualPlans(!showAnnualPlans)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white transition-all"
          >
            <span>{showAnnualPlans ? 'Hide' : 'View'} Multi-Month Saver Plans (Quarterly, Half-Yearly, Annual)</span>
            <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAnnualPlans ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {showAnnualPlans && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MEMBERSHIP_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                    {plan.duration}
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">{plan.name}</h4>
                  <div className="mt-3 text-2xl font-bold text-white">
                    ₹{plan.price.toLocaleString('en-IN')}
                    {plan.originalPrice && (
                      <span className="text-xs line-through text-neutral-500 ml-2 font-normal">
                        ₹{plan.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">{plan.recommendedFor}</p>
                </div>

                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Delhi%20Gym%2C%20I%20am%20interested%20in%20the%20${plan.name}%20plan%20(%E2%82%B9${plan.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2 rounded-lg bg-neutral-900 hover:bg-amber-400 hover:text-neutral-950 border border-neutral-800 text-xs font-semibold text-neutral-200 text-center transition-all"
                >
                  Inquire Now
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Benefits Guarantee Banner */}
        <div className="mt-12 rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">No Hidden Fees & Transparent Memberships</h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Every package includes full locker access, equipment orientation, and free consultation on your workout split.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              id="call-membership-advisor-btn"
              href={`tel:${GYM_DETAILS.phone}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs font-semibold text-white hover:bg-neutral-800 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Advisor ({GYM_DETAILS.phone})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
