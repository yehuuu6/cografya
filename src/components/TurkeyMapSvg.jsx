import React from 'react';

/**
 * Interactive SVG Map of Turkey with lake markers and Roman numeral pins (I, II, III, IV, V)
 * Maps percentages (0-100%) to SVG viewport (0-1000 X, 0-480 Y).
 */
export default function TurkeyMapSvg({ pins = [], selectedPinLabel = null, onSelectPin = () => {} }) {
  const mapWidth = 1000;
  const mapHeight = 480;

  // Key lakes paths for visual aesthetic on the map
  const lakePolygons = [
    // Van Gölü (East)
    { id: "van-svg", name: "Van Gölü", path: "M 830 220 Q 860 210 880 230 Q 890 260 860 270 Q 820 260 830 220 Z", color: "#38bdf8" },
    // Tuz Gölü (Central)
    { id: "tuz-svg", name: "Tuz Gölü", path: "M 440 240 Q 460 230 465 260 Q 450 290 435 270 Z", color: "#f8fafc" },
    // Beyşehir Gölü (SW)
    { id: "beysehir-svg", name: "Beyşehir Gölü", path: "M 355 340 Q 365 330 370 355 Q 360 365 355 340 Z", color: "#38bdf8" },
    // Eğirdir Gölü (SW)
    { id: "egirdir-svg", name: "Eğirdir Gölü", path: "M 315 330 Q 325 320 325 345 Q 318 355 315 330 Z", color: "#38bdf8" },
    // İznik Gölü (NW)
    { id: "iznik-svg", name: "İznik Gölü", path: "M 215 120 Q 230 118 230 126 Q 218 128 215 120 Z", color: "#38bdf8" },
    // Sapanca Gölü (NW)
    { id: "sapanca-svg", name: "Sapanca Gölü", path: "M 250 112 Q 262 110 262 116 Q 252 118 250 112 Z", color: "#38bdf8" },
    // Çıldır Gölü (NE)
    { id: "cildir-svg", name: "Çıldır Gölü", path: "M 865 85 Q 875 80 875 92 Q 865 95 865 85 Z", color: "#38bdf8" },
  ];

  return (
    <div className="relative w-full h-full min-h-[320px] max-h-[460px] bg-slate-950/80 rounded-2xl border border-white/10 p-2 overflow-hidden flex items-center justify-center shadow-2xl backdrop-blur-md">
      {/* Background grid lines for geography map styling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Compass / Map Watermark */}
      <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-400 opacity-60 flex flex-col gap-0.5">
        <span className="font-semibold tracking-wider">TÜRKYE FİZİKİ HARİTASI</span>
        <span className="text-[10px]">KPSS Coğrafya Soru Modu</span>
      </div>

      <svg
        viewBox={`0 0 ${mapWidth} ${mapHeight}`}
        className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] select-none"
      >
        <defs>
          <radialGradient id="turkeyGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <filter id="glowPin" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Turkey Map Outline Path */}
        <g id="turkey-land" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.6))">
          <path
            d="M 80,85 C 110,65 170,60 210,80 C 230,70 260,85 290,75 C 330,65 370,55 420,60 C 470,55 520,50 570,55 C 620,45 670,40 720,50 C 770,45 820,55 870,70 C 900,90 920,130 900,160 C 910,190 900,230 890,270 C 860,300 810,320 760,310 C 720,330 670,340 620,350 C 580,360 550,380 520,390 C 480,380 450,350 410,340 C 370,360 330,370 290,360 C 250,360 220,380 180,360 C 140,350 120,310 140,270 C 130,240 120,200 130,170 C 110,150 90,120 80,85 Z"
            fill="url(#turkeyGrad)"
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          
          {/* Trakya (Marmara NW) */}
          <path
            d="M 60,70 C 90,50 140,45 160,75 C 140,110 100,115 70,105 C 50,90 40,75 60,70 Z"
            fill="url(#turkeyGrad)"
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="2.5"
          />
        </g>

        {/* Lake Polygons on Map */}
        <g id="lakes-layer">
          {lakePolygons.map(lake => (
            <path
              key={lake.id}
              d={lake.path}
              fill={lake.color}
              fillOpacity="0.75"
              stroke="#60a5fa"
              strokeWidth="1"
              className="transition-all duration-300 hover:fill-cyan-300 hover:fill-opacity-100 cursor-pointer"
            >
              <title>{lake.name}</title>
            </path>
          ))}
        </g>

        {/* Dynamic Pins I, II, III, IV, V */}
        <g id="pins-layer">
          {pins.map((pin) => {
            const cx = (pin.x / 100) * mapWidth;
            const cy = (pin.y / 100) * mapHeight;
            const isSelected = selectedPinLabel === pin.label;

            return (
              <g
                key={pin.label}
                transform={`translate(${cx}, ${cy})`}
                onClick={() => onSelectPin(pin.label)}
                className="cursor-pointer group"
              >
                {/* Pulse ring */}
                <circle
                  r={isSelected ? "26" : "18"}
                  fill={isSelected ? "#6366f1" : "#06b6d4"}
                  fillOpacity={isSelected ? "0.4" : "0.2"}
                  className="animate-ping"
                />

                {/* Outer halo */}
                <circle
                  r={isSelected ? "22" : "16"}
                  fill={isSelected ? "#4f46e5" : "#0284c7"}
                  fillOpacity="0.8"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="transition-all duration-300 group-hover:scale-125"
                />

                {/* Inner badge */}
                <circle
                  r={isSelected ? "14" : "11"}
                  fill={isSelected ? "#818cf8" : "#38bdf8"}
                />

                {/* Roman Numeral Text */}
                <text
                  textAnchor="middle"
                  dy="4"
                  fill="#ffffff"
                  fontSize={isSelected ? "14" : "12"}
                  fontWeight="bold"
                  fontFamily="Inter, sans-serif"
                  className="pointer-events-none drop-shadow-md"
                >
                  {pin.label}
                </text>

                {/* Hover Tooltip */}
                <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <rect
                    x="-40"
                    y="-42"
                    width="80"
                    height="22"
                    rx="6"
                    fill="#0f172a"
                    stroke="rgba(255,255,255,0.2)"
                  />
                  <text
                    x="0"
                    y="-27"
                    textAnchor="middle"
                    fill="#38bdf8"
                    fontSize="11"
                    fontWeight="600"
                  >
                    Nokta {pin.label}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
