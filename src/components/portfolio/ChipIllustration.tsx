export function ChipIllustration() {
  const pins = Array.from({ length: 8 }, (_, i) => 130 + i * 20);
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Glowing semiconductor chip with circuit traces">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--primary)" /><stop offset="1" stopColor="var(--violet)" /></linearGradient>
        <radialGradient id="core"><stop offset="0" stopColor="var(--primary)" stopOpacity=".55" /><stop offset="1" stopColor="var(--primary)" stopOpacity="0" /></radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#core)" opacity=".35" />
      {/* traces */}
      <g stroke="url(#cg)" strokeWidth="1.5" fill="none" opacity=".7">
        {pins.map((p, i) => (
          <g key={p}>
            <path d={`M${p} 110 V${70 - (i % 3) * 15} H${p + (i < 4 ? -30 : 30)} V10`} />
            <path d={`M${p} 290 V${330 + (i % 3) * 15} H${p + (i < 4 ? -30 : 30)} V390`} />
            <path d={`M110 ${p} H${70 - (i % 3) * 15} V${p + (i < 4 ? -30 : 30)} H10`} />
            <path d={`M290 ${p} H${330 + (i % 3) * 15} V${p + (i < 4 ? -30 : 30)} H390`} />
          </g>
        ))}
      </g>
      <g stroke="var(--primary)" strokeWidth="2" fill="none" filter="url(#glow)">
        {[0, 3, 5, 7].map((i) => <path key={i} className="anim-dash" d={`M${pins[i]} 110 V${70 - (i % 3) * 15} H${pins[i]! + (i < 4 ? -30 : 30)} V10`} />)}
        {[1, 4, 6].map((i) => <path key={i} className="anim-dash" style={{ stroke: "var(--violet)" }} d={`M290 ${pins[i]} H${330 + (i % 3) * 15} V${pins[i]! + (i < 4 ? -30 : 30)} H390`} />)}
        {[2, 5].map((i) => <path key={i} className="anim-dash" d={`M110 ${pins[i]} H${70 - (i % 3) * 15} V${pins[i]! + (i < 4 ? -30 : 30)} H10`} />)}
      </g>
      {/* pins */}
      <g fill="var(--muted-foreground)" opacity=".8">
        {pins.map((p) => (<g key={p}><rect x={p - 3} y="100" width="6" height="12" rx="1" /><rect x={p - 3} y="288" width="6" height="12" rx="1" /><rect x="100" y={p - 3} width="12" height="6" rx="1" /><rect x="288" y={p - 3} width="12" height="6" rx="1" /></g>))}
      </g>
      {/* package */}
      <rect x="110" y="110" width="180" height="180" rx="14" fill="var(--surface)" stroke="url(#cg)" strokeWidth="2" />
      <rect x="135" y="135" width="130" height="130" rx="8" fill="var(--background)" stroke="var(--primary)" strokeOpacity=".4" />
      <g stroke="var(--primary)" strokeOpacity=".25">
        {[155, 175, 195, 215, 235, 245].map((v) => <line key={v} x1="140" x2="260" y1={v} y2={v} />)}
        {[155, 185, 215, 245].map((v) => <line key={v} y1="140" y2="260" x1={v} x2={v} />)}
      </g>
      <rect x="170" y="170" width="60" height="60" rx="6" fill="url(#cg)" opacity=".85" className="anim-pulse" filter="url(#glow)" />
      <text x="200" y="196" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="700" fill="var(--primary-foreground)">RTL</text>
      <text x="200" y="212" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--primary-foreground)">VB-26</text>
      <circle cx="125" cy="125" r="4" fill="var(--primary)" />
      {[[10, 60], [390, 150], [60, 390], [330, 10], [10, 300]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="var(--primary)" className="anim-pulse" style={{ animationDelay: `${i * .4}s` }} />)}
    </svg>
  );
}
