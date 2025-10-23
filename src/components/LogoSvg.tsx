import React from 'react';

// Note: include the Lazydog font in your app (e.g. via Google Fonts or local import)
// Example (index.html): <link href="https://fonts.googleapis.com/css2?family=Lazydog:wght@400;700&display=swap" rel="stylesheet">

const LogoSvg: React.FC<{ className?: string }> = ({ className = 'w-[180px] h-[80px]' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 400 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Solar Bridge Solution"
    >
      <title>SolarBridge Solution</title>
      <defs>
        <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>

  {/* sun-only icon */}
  <g transform="translate(12,18)">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="64" cy="36" r="22" fill="url(#g1)" filter="url(#glow)" />
        <g stroke="#FFD699" strokeWidth="3" strokeLinecap="round" opacity="0.95">
          <line x1="64" y1="-2" x2="64" y2="14" />
          <line x1="64" y1="58" x2="64" y2="74" />
          <line x1="36" y1="36" x2="18" y2="36" />
          <line x1="92" y1="36" x2="110" y2="36" />
          <line x1="46" y1="18" x2="32" y2="6" />
          <line x1="82" y1="54" x2="96" y2="66" />
          <line x1="46" y1="54" x2="32" y2="66" />
          <line x1="82" y1="18" x2="96" y2="6" />
        </g>
      </g>

      {/* text (centered) */}
      <g transform="translate(200,36)">
        <text x="0" y="28" textAnchor="middle" fill="#ffffff" fontFamily="Lazydog, Space Grotesk, sans-serif" fontSize="30" fontWeight="700">
          SOLARBRIDGE
        </text>
        <text x="0" y="60" textAnchor="middle" fill="#F97316" fontFamily="Lazydog, Space Grotesk, sans-serif" fontSize="18" fontWeight="600">
          SOLUTION
        </text>
      </g>
    </svg>
  );
};

export default LogoSvg;
