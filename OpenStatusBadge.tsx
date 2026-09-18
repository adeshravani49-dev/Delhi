import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface OpenStatusBadgeProps {
  className?: string;
  showDetails?: boolean;
}

export const OpenStatusBadge: React.FC<OpenStatusBadgeProps> = ({
  className = '',
  showDetails = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [statusText, setStatusText] = useState<string>('Open Now');
  const [subText, setSubText] = useState<string>('Closes at 10:00 PM');

  useEffect(() => {
    const checkStatus = () => {
      // Delhi is in Indian Standard Time (UTC+5:30)
      const now = new Date();
      // Calculate IST time
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);

      const day = istTime.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
      const hour = istTime.getHours();
      const minute = istTime.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      const openMinutes = 5 * 60 + 30; // 5:30 AM
      const closeMinutes = 22 * 60; // 10:00 PM (22:00)

      if (day === 0) {
        // Sunday is closed
        setIsOpen(false);
        setStatusText('Closed Today (Sunday)');
        setSubText('Opens Monday at 5:30 AM');
      } else if (timeInMinutes >= openMinutes && timeInMinutes < closeMinutes) {
        setIsOpen(true);
        setStatusText('Open Now');
        const remainingHours = Math.floor((closeMinutes - timeInMinutes) / 60);
        const remainingMins = (closeMinutes - timeInMinutes) % 60;
        setSubText(`Closes at 10:00 PM (${remainingHours}h ${remainingMins}m left)`);
      } else if (timeInMinutes < openMinutes) {
        setIsOpen(false);
        setStatusText('Closed Right Now');
        setSubText('Opens today at 5:30 AM');
      } else {
        setIsOpen(false);
        setStatusText('Closed for Today');
        setSubText(day === 6 ? 'Opens Monday at 5:30 AM' : 'Opens tomorrow at 5:30 AM');
      }
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="gym-status-badge"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
        isOpen
          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
          : 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOpen ? 'bg-emerald-400' : 'bg-rose-400'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isOpen ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
        />
      </span>
      <span className="font-medium tracking-wide">{statusText}</span>
      {showDetails && (
        <span className="text-neutral-400 text-[11px] hidden sm:inline border-l border-neutral-700/60 pl-2">
          {subText}
        </span>
      )}
    </div>
  );
};
