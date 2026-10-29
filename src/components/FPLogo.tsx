import React from 'react';

interface FPLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  withGlow?: boolean;
}

/**
 * Temporary FP Monogram for FaridPixelPro.
 * Features a modern, geometric interlocking F and P with the signature
 * Electric Blue (#087BFF) to Cyber Cyan (#00CFFF) gradient.
 * Ready for drop-in replacement with a final custom SVG or portrait asset.
 */
export const FPLogo: React.FC<FPLogoProps> = ({
  size = 'md',
  className = '',
  withGlow = false,
}) => {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    hero: 'w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72',
  };

  const dim = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${dim} ${className}`}
      aria-label="FaridPixelPro Monogram"
    >
      {withGlow && (
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#087BFF] to-[#00CFFF] opacity-35 blur-xl pointer-events-none"
          aria-hidden="true"
        />
      )}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="fpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#087BFF" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>

          <linearGradient id="fpBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#087BFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00CFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#087BFF" stopOpacity="0.8" />
          </linearGradient>

          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Monogram Background Surface */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="22"
          fill="#050914"
          className="dark:fill-[#050914] fill-[#071B3D]"
        />

        {/* Outer Tech Hairline Border */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="22"
          stroke="url(#fpBorderGrad)"
          strokeWidth="2"
        />

        {/* Futuristic Corner Tick Accents */}
        <path d="M12 24 V16 H20" stroke="#00CFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M88 24 V16 H80" stroke="#087BFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M12 76 V84 H20" stroke="#087BFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M88 76 V84 H80" stroke="#00CFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

        {/* Geometric "F" Glyph */}
        <path
          d="M26 26 H50 C58 26 62 30 62 37 C62 44 58 48 50 48 H36 V74 H26 Z"
          fill="url(#fpGradient)"
        />
        {/* Inner F Counter cutout */}
        <path
          d="M36 34 H48 C51 34 53 35.5 53 37 C53 38.5 51 40 48 40 H36 Z"
          fill="#050914"
          className="dark:fill-[#050914] fill-[#071B3D]"
        />

        {/* Interlocking "P" Glyph (Offset / Layered in Cyber Cyan) */}
        <path
          d="M50 44 H72 C79 44 84 48 84 56 C84 64 79 68 72 68 H60 V84 H50 Z"
          fill="#00CFFF"
          opacity="0.95"
        />
        {/* Inner P Counter cutout */}
        <path
          d="M60 52 H70 C73 52 75 53.5 75 56 C75 58.5 73 60 70 60 H60 Z"
          fill="#050914"
          className="dark:fill-[#050914] fill-[#071B3D]"
        />

        {/* Accent Cyber Dot */}
        <circle cx="82" cy="22" r="3" fill="#00CFFF" />
      </svg>
    </div>
  );
};

interface FPBrandLockupProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const FPBrandLockup: React.FC<FPBrandLockupProps> = ({
  size = 'md',
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
    >
      <FPLogo size={size === 'lg' ? 'md' : 'sm'} />
      <div className="flex flex-col">
        <span className="font-heading font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-electric transition-colors whitespace-nowrap">
          Farid<span className="text-gradient-brand">PixelPro</span>
        </span>
      </div>
    </div>
  );
};
