export function VitaminCHeroIllustration() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="Vitamin C Illustration"
    >
      {/* Background gradient circles */}
      <circle cx="400" cy="300" r="280" fill="#F7F3F3" opacity="0.5" />
      <circle cx="380" cy="320" r="240" fill="#E0CBA8" opacity="0.2" />
      
      {/* Main citrus slice - large orange circle */}
      <g transform="translate(400, 300)">
        {/* Outer peel */}
        <circle cx="0" cy="0" r="160" fill="#E0CBA8" />
        
        {/* Inner flesh */}
        <circle cx="0" cy="0" r="145" fill="#F7F3F3" />
        
        {/* Segments - creating citrus sections */}
        <g opacity="0.3">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x2 = Math.cos(angle) * 145;
            const y2 = Math.sin(angle) * 145;
            return (
              <line
                key={i}
                x1="0"
                y1="0"
                x2={x2}
                y2={y2}
                stroke="#E0CBA8"
                strokeWidth="2"
              />
            );
          })}
        </g>
        
        {/* Central white circle */}
        <circle cx="0" cy="0" r="25" fill="#F7F3F3" />
        
        {/* Segment highlights */}
        {[...Array(8)].map((_, i) => {
          const angle = ((i * 45 + 22.5) * Math.PI) / 180;
          const radius = 90;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <circle
              key={`highlight-${i}`}
              cx={x}
              cy={y}
              r="12"
              fill="#E0CBA8"
              opacity="0.4"
            />
          );
        })}
      </g>
      
      {/* Small decorative citrus slice - top right */}
      <g transform="translate(620, 150)">
        <circle cx="0" cy="0" r="70" fill="#7F8468" opacity="0.6" />
        <circle cx="0" cy="0" r="60" fill="#F7F3F3" opacity="0.8" />
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x2 = Math.cos(angle) * 60;
          const y2 = Math.sin(angle) * 60;
          return (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={x2}
              y2={y2}
              stroke="#7F8468"
              strokeWidth="1.5"
              opacity="0.4"
            />
          );
        })}
        <circle cx="0" cy="0" r="12" fill="#F7F3F3" />
      </g>
      
      {/* Small decorative citrus slice - bottom left */}
      <g transform="translate(180, 450)">
        <circle cx="0" cy="0" r="60" fill="#162F1C" opacity="0.3" />
        <circle cx="0" cy="0" r="50" fill="#F7F3F3" opacity="0.9" />
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x2 = Math.cos(angle) * 50;
          const y2 = Math.sin(angle) * 50;
          return (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={x2}
              y2={y2}
              stroke="#162F1C"
              strokeWidth="1.5"
              opacity="0.3"
            />
          );
        })}
        <circle cx="0" cy="0" r="10" fill="#F7F3F3" />
      </g>
      
      {/* Antioxidant molecules - abstract circles representing Vitamin C's antioxidant properties */}
      <g opacity="0.6">
        <circle cx="250" cy="200" r="15" fill="#7F8468" />
        <circle cx="280" cy="180" r="10" fill="#7F8468" />
        <circle cx="270" cy="220" r="8" fill="#7F8468" />
        
        <circle cx="550" cy="380" r="18" fill="#E0CBA8" />
        <circle cx="580" cy="360" r="12" fill="#E0CBA8" />
        <circle cx="520" cy="370" r="10" fill="#E0CBA8" />
      </g>
      
      {/* Connection lines - representing molecular structure */}
      <g opacity="0.2">
        <line x1="250" y1="200" x2="280" y2="180" stroke="#162F1C" strokeWidth="2" />
        <line x1="280" y1="180" x2="270" y2="220" stroke="#162F1C" strokeWidth="2" />
        <line x1="270" y1="220" x2="250" y2="200" stroke="#162F1C" strokeWidth="2" />
        
        <line x1="550" y1="380" x2="580" y2="360" stroke="#162F1C" strokeWidth="2" />
        <line x1="580" y1="360" x2="520" y2="370" stroke="#162F1C" strokeWidth="2" />
        <line x1="520" y1="370" x2="550" y2="380" stroke="#162F1C" strokeWidth="2" />
      </g>
      
      {/* Decorative dots for visual interest */}
      <g opacity="0.3">
        <circle cx="150" cy="280" r="5" fill="#7F8468" />
        <circle cx="650" cy="280" r="5" fill="#7F8468" />
        <circle cx="400" cy="120" r="5" fill="#E0CBA8" />
        <circle cx="400" cy="480" r="5" fill="#E0CBA8" />
        
        <circle cx="200" cy="350" r="3" fill="#162F1C" />
        <circle cx="600" cy="250" r="3" fill="#162F1C" />
        <circle cx="320" cy="150" r="3" fill="#162F1C" />
        <circle cx="480" cy="450" r="3" fill="#162F1C" />
      </g>
      
      {/* Shield icon outline - representing immune support */}
      <g transform="translate(240, 360)" opacity="0.25">
        <path
          d="M 0,-30 L 15,-25 L 15,0 C 15,15 7.5,22.5 0,30 C -7.5,22.5 -15,15 -15,0 L -15,-25 Z"
          fill="none"
          stroke="#162F1C"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </g>
      
      {/* Heart icon outline - representing cardiovascular health */}
      <g transform="translate(560, 240)" opacity="0.25">
        <path
          d="M 0,8 C -1.5,5 -4,3 -7,3 C -10,3 -12,5 -12,8 C -12,13 -7,17 0,22 C 7,17 12,13 12,8 C 12,5 10,3 7,3 C 4,3 1.5,5 0,8 Z"
          fill="none"
          stroke="#162F1C"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
