import React from 'react';

interface GymLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const GymLogo: React.FC<GymLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  return (
    <div id="gym-brand-logo" className={`flex items-center gap-3 ${className}`}>
      {/* Illuminated Icon Inspired by the Signboard in screenshot */}
      <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-red-600 p-2 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400/40">
        <svg
          className={`${
            size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6'
          } text-neutral-950`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Muscular bodybuilder silhouette pose with barbell icon */}
          <path d="M20.5 4c-.83 0-1.5.67-1.5 1.5v2H5V5.5C5 4.67 4.33 4 3.5 4S2 4.67 2 5.5v13c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2h14v2c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5zM6.5 8h11a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
          <path d="M12 9.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-2xl md:text-3xl tracking-wider font-bold uppercase text-white leading-none">
            Delhi <span className="text-amber-400">gay gym</span>
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-widest font-semibold uppercase text-amber-400/90 leading-tight">
            Reach Your Potential
          </span>
        )}
      </div>
    </div>
  );
};
