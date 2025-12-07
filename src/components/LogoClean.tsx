import { cn } from "@/lib/utils";

interface LogoCleanProps {
  className?: string;
}

export const LogoClean = ({ className }: LogoCleanProps) => {
  return (
    <svg
      viewBox="0 0 320 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-12 w-auto", className)}
    >
      {/* Sun circle with rays */}
      <g>
        {/* Main sun arc */}
        <path
          d="M30 45 C15 45 5 32 8 18 C10 8 20 2 30 2 C35 2 40 4 44 8"
          stroke="#E6A32E"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Sun rays */}
        <path d="M30 0 L30 -6" stroke="#E6A32E" strokeWidth="4" strokeLinecap="round" transform="translate(0, 8)" />
        <path d="M44 6 L50 2" stroke="#E6A32E" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 18 L56 16" stroke="#E6A32E" strokeWidth="4" strokeLinecap="round" />
        <path d="M8 10 L3 5" stroke="#E6A32E" strokeWidth="4" strokeLinecap="round" />
        <path d="M2 22 L-4 20" stroke="#E6A32E" strokeWidth="4" strokeLinecap="round" />
      </g>
      
      {/* Solar panel */}
      <g transform="translate(18, 35)">
        <path
          d="M0 12 L8 0 L38 0 L30 12 Z"
          fill="#2196F3"
        />
        {/* Panel grid lines */}
        <path d="M6 10 L12 2" stroke="#1565C0" strokeWidth="1" />
        <path d="M14 10 L20 2" stroke="#1565C0" strokeWidth="1" />
        <path d="M22 10 L28 2" stroke="#1565C0" strokeWidth="1" />
        <path d="M3 6 L33 6" stroke="#1565C0" strokeWidth="0.5" />
      </g>

      {/* SOLAR BRIDGE text */}
      <text
        x="68"
        y="28"
        fontFamily="Georgia, Times New Roman, serif"
        fontSize="24"
        fontWeight="600"
        fill="#1A4B7C"
        letterSpacing="2"
      >
        SOLAR BRIDGE
      </text>
      
      {/* SOLUTION text */}
      <text
        x="68"
        y="50"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="500"
        fill="#E6A32E"
        letterSpacing="4"
      >
        SOLUTION
      </text>
    </svg>
  );
};

export default LogoClean;
