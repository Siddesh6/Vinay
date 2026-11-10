import surveillanceRobot from "@/assets/surveillance-robot.jpg";

export function SurveillanceArt() {
  return <img src={surveillanceRobot} alt="Technical concept illustration of an ESP32 surveillance robot with camera, sensor modules, motors, and soil moisture probe" loading="lazy" width={1152} height={576} className="h-full w-full object-contain" />;
}

export function DrowningArt() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" role="img" aria-label="FPGA chip connected to water sensors with a logic waveform">
      <defs><linearGradient id="w" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="var(--primary)" stopOpacity=".35" /><stop offset="1" stopColor="var(--primary)" stopOpacity="0" /></linearGradient></defs>
      <path d="M0 170 Q 50 155 100 170 T 200 170 T 300 170 T 400 170 V220 H0Z" fill="url(#w)" />
      <path d="M0 185 Q 50 172 100 185 T 200 185 T 300 185 T 400 185" stroke="var(--primary)" strokeOpacity=".5" fill="none" />
      <rect x="150" y="40" width="100" height="90" rx="8" fill="var(--surface)" stroke="var(--primary)" strokeWidth="1.5" />
      <text x="200" y="82" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fontWeight="700" fill="var(--primary)">FPGA</text>
      <text x="200" y="100" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--muted-foreground)">detect_fsm</text>
      {[60, 75, 90, 105].map((y) => <g key={y}><line x1="138" x2="150" y1={y} y2={y} stroke="var(--muted-foreground)" /><line x1="250" x2="262" y1={y} y2={y} stroke="var(--muted-foreground)" /></g>)}
      <g stroke="var(--primary)" fill="none" strokeWidth="1.5"><path className="anim-dash" d="M60 160 V75 H138" /><path className="anim-dash" d="M110 165 V105 H138" /></g>
      <circle cx="60" cy="160" r="6" fill="var(--primary)" className="anim-pulse" /><circle cx="110" cy="165" r="6" fill="var(--primary)" className="anim-pulse" />
      <path d="M262 75 H290 V60 H305 V90 H320 V60 H335 V75 H380" stroke="var(--violet)" strokeWidth="2" fill="none" />
      <path className="anim-dash" d="M262 105 H380" stroke="var(--destructive)" strokeWidth="1.5" fill="none" />
      <circle cx="372" cy="105" r="7" fill="var(--destructive)" className="anim-pulse" />
      <text x="320" y="125" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--muted-foreground)">ALERT</text>
    </svg>
  );
}
export function FactoryArt() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" role="img" aria-label="Two IoT nodes sending MQTT data to a cloud dashboard">
      {[40, 140].map((y, i) => (
        <g key={y}>
          <rect x="30" y={y} width="90" height="55" rx="6" fill="var(--surface)" stroke="var(--primary)" />
          <text x="75" y={y + 24} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="var(--primary)">NODE {i + 1}</text>
          <text x="75" y={y + 40} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="var(--muted-foreground)">Arduino Uno</text>
          <path className="anim-dash" d={`M120 ${y + 27} C 160 ${y + 27}, 160 110, 190 110`} stroke="var(--primary)" strokeWidth="1.5" fill="none" />
        </g>
      ))}
      <path d="M195 120 a22 22 0 0 1 8-40 a28 28 0 0 1 52 4 a18 18 0 0 1 2 36 Z" fill="var(--surface)" stroke="var(--violet)" strokeWidth="1.5" />
      <text x="228" y="107" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--violet)">MQTT</text>
      <path className="anim-dash" d="M258 105 H285" stroke="var(--violet)" strokeWidth="1.5" />
      <rect x="285" y="45" width="95" height="120" rx="8" fill="var(--surface)" stroke="var(--primary)" />
      <rect x="295" y="57" width="75" height="36" rx="3" fill="var(--background)" />
      <polyline points="298,85 310,75 322,80 334,64 346,70 358,60 367,66" stroke="var(--primary)" fill="none" strokeWidth="1.5" />
      {[0, 1, 2].map((i) => <rect key={i} x={297 + i * 25} y={130 - i * 10} width="16" height={25 + i * 10} rx="2" fill={i === 1 ? "var(--violet)" : "var(--primary)"} opacity=".8" />)}
      <circle cx="300" cy="108" r="3" fill="var(--primary)" className="anim-pulse" />
      <text x="335" y="111" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="var(--muted-foreground)">ThingsBoard</text>
    </svg>
  );
}
