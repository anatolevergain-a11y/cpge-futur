import React, { useState } from 'react';
import { ExerciseSchema } from '../data/cpgeData';
import { Maximize2, Minimize2, Info, Eye, Layers } from 'lucide-react';

interface ExerciseDiagramProps {
  schema: ExerciseSchema;
}

export const ExerciseDiagram: React.FC<ExerciseDiagramProps> = ({ schema }) => {
  const [showAnnotations, setShowAnnotations] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className={`rounded-xl border border-indigo-200/80 dark:border-indigo-500/30 bg-slate-50/80 dark:bg-slate-950/70 p-4 transition-all shadow-sm ${isExpanded ? 'scale-[1.01]' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-mono">
            Schéma Technique d'Épreuve Concours
          </span>
          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            · {schema.titre}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`px-2 py-1 text-[11px] font-medium rounded border transition-colors flex items-center gap-1 ${
              showAnnotations
                ? 'bg-indigo-100 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-600/50 text-indigo-700 dark:text-indigo-300'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>{showAnnotations ? 'Cotes actives' : 'Masquer cotes'}</span>
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            title={isExpanded ? 'Réduire le schéma' : 'Agrandir le schéma'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* SVG Container */}
      <div className={`relative w-full my-3 flex items-center justify-center overflow-x-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-4 transition-all ${isExpanded ? 'min-h-[420px]' : 'min-h-[290px]'}`}>
        {schema.type === 'circuit-wien' && <CircuitWienSVG showAnnotations={showAnnotations} />}
        {schema.type === 'michelson-optique' && <MichelsonOptiqueSVG showAnnotations={showAnnotations} />}
        {schema.type === 'pourbaix-fer' && <PourbaixFerSVG showAnnotations={showAnnotations} />}
        {schema.type === 'bielle-manivelle' && <BielleManivelleSVG showAnnotations={showAnnotations} />}
        {schema.type === 'conformation-newman' && <NewmanCramSVG showAnnotations={showAnnotations} />}
        {schema.type === 'schema-bloc-asservissement' && <SchemaBlocSVG showAnnotations={showAnnotations} />}
        {schema.type === 'cycle-carnot' && <CycleCarnotSVG showAnnotations={showAnnotations} />}
        {schema.type === 'fentes-young' && <FentesYoungSVG showAnnotations={showAnnotations} />}
        {schema.type === 'diagramme-bode' && <DiagrammeBodeSVG showAnnotations={showAnnotations} />}
      </div>

      {/* Legend & Key Data */}
      <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
        <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
          <strong className="text-indigo-700 dark:text-indigo-400 font-semibold not-italic">Consigne concours : </strong>
          {schema.legende}
        </p>

        {schema.donneesCles && schema.donneesCles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
            {schema.donneesCles.map((d, i) => (
              <div key={i} className="p-2 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{d.label || d.description || d.symbole}</span>
                <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">{d.valeur}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ==============================================================
   1. CIRCUIT PONT DE WIEN (Électronique / Physique)
   ============================================================== */
const CircuitWienSVG: React.FC<{ showAnnotations: boolean }> = ({ showAnnotations }) => {
  return (
    <svg viewBox="0 0 740 320" className="w-full max-w-[700px] h-auto font-sans select-none">
      <defs>
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3b82f6" />
        </marker>
        <marker id="arrow-emerald" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
        </marker>
      </defs>

      {/* Background soft grid */}
      <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" className="fill-slate-200 dark:fill-slate-800" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid-dots)" opacity="0.5" />

      {/* Operational Amplifier (AOP) Triangle */}
      <polygon points="460,110 460,230 560,170" className="fill-slate-100 dark:fill-slate-800 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2.5" />
      <text x="475" y="145" className="fill-slate-800 dark:fill-slate-100 font-bold text-lg">-</text>
      <text x="475" y="205" className="fill-slate-800 dark:fill-slate-100 font-bold text-lg">+</text>
      <text x="500" y="175" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">AOP (Idéal)</text>

      {/* Output wire */}
      <line x1="560" y1="170" x2="680" y2="170" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2.5" />
      <circle cx="680" cy="170" r="4" className="fill-slate-800 dark:fill-slate-200" />
      <text x="690" y="174" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-sm font-mono">v_s(t)</text>

      {/* Feedback branch top (R2) */}
      <line x1="620" y1="170" x2="620" y2="60" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <line x1="620" y1="60" x2="490" y2="60" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      {/* Resistor R2 */}
      <rect x="420" y="50" width="70" height="20" className="fill-white dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <text x="445" y="64" className="fill-slate-800 dark:fill-slate-100 text-xs font-mono font-bold">R_2</text>
      <line x1="420" y1="60" x2="380" y2="60" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <line x1="380" y1="60" x2="380" y2="140" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <line x1="380" y1="140" x2="460" y2="140" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <circle cx="380" cy="140" r="3.5" className="fill-slate-800 dark:fill-slate-200" />

      {/* Resistor R1 to Ground */}
      <line x1="380" y1="140" x2="330" y2="140" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <rect x="260" y="130" width="70" height="20" className="fill-white dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <text x="285" y="144" className="fill-slate-800 dark:fill-slate-100 text-xs font-mono font-bold">R_1</text>
      <line x1="260" y1="140" x2="220" y2="140" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      {/* Ground Symbol */}
      <line x1="220" y1="130" x2="220" y2="150" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2.5" />
      <line x1="214" y1="135" x2="214" y2="145" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <line x1="208" y1="138" x2="208" y2="142" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" />

      {/* Wien Selective Network (Connected from Output to V+) */}
      <line x1="640" y1="170" x2="640" y2="280" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <line x1="640" y1="280" x2="350" y2="280" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />

      {/* Series arm: R + C */}
      <rect x="280" y="270" width="60" height="20" className="fill-white dark:fill-slate-900 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2" />
      <text x="303" y="284" className="fill-indigo-600 dark:fill-indigo-400 text-xs font-mono font-bold">R</text>
      <line x1="280" y1="280" x2="250" y2="280" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      {/* Capacitor C */}
      <line x1="250" y1="268" x2="250" y2="292" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3" />
      <line x1="242" y1="268" x2="242" y2="292" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3" />
      <text x="241" y="260" className="fill-indigo-600 dark:fill-indigo-400 text-xs font-mono font-bold">C</text>
      <line x1="242" y1="280" x2="160" y2="280" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />

      {/* Node V+ connecting up */}
      <circle cx="160" cy="280" r="4" className="fill-indigo-600 dark:fill-indigo-400" />
      <line x1="160" y1="280" x2="160" y2="200" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <line x1="160" y1="200" x2="460" y2="200" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />

      {/* Parallel arm: R // C to ground */}
      <line x1="160" y1="280" x2="160" y2="305" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <line x1="120" y1="305" x2="200" y2="305" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />

      {/* Parallel R */}
      <line x1="130" y1="305" x2="130" y2="315" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" />
      {/* Parallel C */}
      <line x1="190" y1="305" x2="190" y2="315" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" />

      {/* Voltage arrows */}
      {showAnnotations && (
        <>
          <line x1="680" y1="190" x2="680" y2="250" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#arrow-blue)" />
          <text x="690" y="225" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-bold">u_s(t)</text>

          <line x1="140" y1="260" x2="140" y2="210" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
          <text x="95" y="240" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-bold">u_+(t)</text>

          {/* Condition text */}
          <rect x="40" y="20" width="220" height="50" rx="6" className="fill-amber-50 dark:fill-amber-950/40 stroke-amber-300 dark:stroke-amber-600/40" />
          <text x="50" y="38" className="fill-amber-800 dark:fill-amber-300 text-[11px] font-bold">Critère de Barkhausen :</text>
          <text x="50" y="55" className="fill-amber-900 dark:fill-amber-200 text-[10px] font-mono">T(jω_0) = 1/3 · (1 + R_2/R_1) = 1</text>
        </>
      )}
    </svg>
  );
};

/* ==============================================================
   2. INTERFÉROMÈTRE DE MICHELSON (Optique / Physique)
   ============================================================== */
const MichelsonOptiqueSVG: React.FC<{ showAnnotations: boolean }> = ({ showAnnotations }) => {
  return (
    <svg viewBox="0 0 740 340" className="w-full max-w-[700px] h-auto font-sans select-none">
      <defs>
        <marker id="ray-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 2 L 7 5 L 0 8 z" fill="#ef4444" />
        </marker>
        <marker id="ray-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 2 L 7 5 L 0 8 z" fill="#0284c7" />
        </marker>
      </defs>

      {/* Laser Source S */}
      <rect x="40" y="150" width="70" height="40" rx="4" className="fill-slate-800 dark:fill-slate-200" />
      <text x="52" y="175" className="fill-white dark:fill-slate-900 text-xs font-bold font-mono">Laser S</text>

      {/* Incident laser beam */}
      <line x1="110" y1="170" x2="350" y2="170" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#ray-arrow)" />

      {/* Lame Séparatrice Sp (at 45 deg) */}
      <line x1="320" y1="130" x2="380" y2="210" stroke="#6366f1" strokeWidth="4.5" strokeLinecap="round" />
      <text x="365" y="135" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">Séparatrice (Sp)</text>

      {/* Ray 1: Transmitted towards Mirror M1 (Right) */}
      <line x1="350" y1="170" x2="590" y2="170" stroke="#ef4444" strokeWidth="2" />
      <line x1="590" y1="170" x2="350" y2="170" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#ray-arrow)" />

      {/* Mirror M1 (Right) */}
      <line x1="590" y1="120" x2="590" y2="220" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="6" strokeLinecap="round" />
      <text x="605" y="175" className="fill-slate-900 dark:fill-white font-bold text-xs font-mono">Miroir M_1 (Fixe)</text>

      {/* Ray 2: Reflected towards Mirror M2 (Top) */}
      <line x1="350" y1="170" x2="350" y2="40" stroke="#0284c7" strokeWidth="2" markerEnd="url(#ray-blue)" />
      <line x1="350" y1="40" x2="350" y2="170" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 3" />

      {/* Mirror M2 (Top, slightly tilted for coin d'air) */}
      <line x1="290" y1="36" x2="410" y2="44" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="6" strokeLinecap="round" />
      <text x="310" y="25" className="fill-slate-900 dark:fill-white font-bold text-xs font-mono">Miroir M_2 (Mobile, incliné α)</text>

      {/* Both rays descending to screen E */}
      <line x1="350" y1="170" x2="350" y2="300" stroke="#8b5cf6" strokeWidth="3" markerEnd="url(#ray-arrow)" />

      {/* Screen E (Bottom) */}
      <line x1="260" y1="300" x2="440" y2="300" stroke="#059669" strokeWidth="5" />
      <text x="450" y="305" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs font-mono">Écran d'observation (E)</text>

      {/* Interference Fringes on Screen */}
      <g opacity="0.8">
        <line x1="290" y1="310" x2="290" y2="325" stroke="#ef4444" strokeWidth="2" />
        <line x1="310" y1="310" x2="310" y2="325" stroke="#ef4444" strokeWidth="2" />
        <line x1="330" y1="310" x2="330" y2="325" stroke="#ef4444" strokeWidth="2" />
        <line x1="350" y1="310" x2="350" y2="325" stroke="#ef4444" strokeWidth="2" />
        <line x1="370" y1="310" x2="370" y2="325" stroke="#ef4444" strokeWidth="2" />
        <line x1="390" y1="310" x2="390" y2="325" stroke="#ef4444" strokeWidth="2" />
        <line x1="410" y1="310" x2="410" y2="325" stroke="#ef4444" strokeWidth="2" />
      </g>
      <text x="300" y="338" className="fill-slate-500 text-[10px] font-mono">Franges rectilignes équidistantes (i = λ/2α)</text>

      {/* Annotations */}
      {showAnnotations && (
        <>
          <line x1="350" y1="170" x2="590" y2="170" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
          <text x="440" y="195" className="fill-slate-600 dark:fill-slate-400 text-xs font-mono">d_1</text>
          <text x="360" y="105" className="fill-slate-600 dark:fill-slate-400 text-xs font-mono">d_2</text>
          <rect x="530" y="30" width="180" height="45" rx="6" className="fill-sky-50 dark:fill-sky-950/40 stroke-sky-300 dark:stroke-sky-600/40" />
          <text x="540" y="48" className="fill-sky-800 dark:fill-sky-300 text-[10px] font-bold">Différence de marche :</text>
          <text x="540" y="65" className="fill-sky-900 dark:fill-sky-200 text-[10px] font-mono">δ(x) = 2 (d_2 - d_1) + 2 α x</text>
        </>
      )}
    </svg>
  );
};

/* ==============================================================
   3. DIAGRAMME DE POURBAIX DU FER (Chimie)
   ============================================================== */
const PourbaixFerSVG: React.FC<{ showAnnotations: boolean }> = ({ showAnnotations }) => {
  return (
    <svg viewBox="0 0 740 340" className="w-full max-w-[700px] h-auto font-sans select-none">
      {/* Coordinate axes */}
      <line x1="90" y1="20" x2="90" y2="290" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <line x1="90" y1="290" x2="690" y2="290" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />

      {/* Axis labels */}
      <text x="40" y="25" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">E (V/ESH)</text>
      <text x="695" y="295" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">pH</text>

      {/* Axis Ticks */}
      <text x="85" y="295" className="fill-slate-400 text-[10px] text-right font-mono">0</text>
      <text x="260" y="308" className="fill-slate-400 text-[10px] text-center font-mono">pH = 7</text>
      <text x="670" y="308" className="fill-slate-400 text-[10px] text-center font-mono">pH = 14</text>

      <text x="55" y="240" className="fill-slate-400 text-[10px] font-mono">-0.44 V</text>
      <line x1="85" y1="235" x2="90" y2="235" stroke="#94a3b8" strokeWidth="1.5" />

      <text x="55" y="110" className="fill-slate-400 text-[10px] font-mono">+0.77 V</text>
      <line x1="85" y1="105" x2="90" y2="105" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Water stability lines (dashed) */}
      <line x1="90" y1="70" x2="680" y2="245" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8" />
      <text x="560" y="210" className="fill-sky-500 text-[9px] font-mono">(b) O_2 / H_2O</text>

      <line x1="90" y1="205" x2="500" y2="290" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8" />
      <text x="380" y="260" className="fill-sky-500 text-[9px] font-mono">(a) H^+ / H_2</text>

      {/* Domain: Fe(s) immunity zone (bottom) */}
      <polygon points="90,235 250,235 340,260 680,260 680,290 90,290" className="fill-emerald-500/10 dark:fill-emerald-500/15" />
      <text x="140" y="265" className="fill-emerald-700 dark:fill-emerald-400 font-bold text-sm font-mono">Fe (s) · IMMUNITÉ</text>

      {/* Domain: Fe2+ (aq) corrosion */}
      <polygon points="90,105 200,105 250,235 90,235" className="fill-rose-500/10 dark:fill-rose-500/15" />
      <text x="120" y="170" className="fill-rose-700 dark:fill-rose-400 font-bold text-sm font-mono">Fe^2+ (aq) · CORROSION</text>

      {/* Domain: Fe3+ (aq) */}
      <polygon points="90,30 180,30 200,105 90,105" className="fill-amber-500/10 dark:fill-amber-500/15" />
      <text x="110" y="70" className="fill-amber-700 dark:fill-amber-400 font-bold text-xs font-mono">Fe^3+ (aq)</text>

      {/* Domain: Fe(OH)3 (s) passivation */}
      <polygon points="180,30 680,30 680,180 340,180 200,105" className="fill-indigo-500/10 dark:fill-indigo-500/15" />
      <text x="360" y="100" className="fill-indigo-700 dark:fill-indigo-400 font-bold text-sm font-mono">Fe(OH)_3 (s) · PASSIVATION</text>

      {/* Domain: Fe(OH)2 (s) */}
      <polygon points="250,235 340,260 680,260 680,180 340,180 250,235" className="fill-purple-500/10 dark:fill-purple-500/15" />
      <text x="380" y="225" className="fill-purple-700 dark:fill-purple-400 font-bold text-xs font-mono">Fe(OH)_2 (s)</text>

      {/* Frontier lines */}
      <line x1="90" y1="235" x2="250" y2="235" stroke="#ef4444" strokeWidth="2.5" />
      <text x="170" y="230" className="fill-rose-600 font-bold text-[10px] font-mono">(1) E° = -0.44 V</text>

      <line x1="90" y1="105" x2="200" y2="105" stroke="#f59e0b" strokeWidth="2.5" />
      <text x="120" y="100" className="fill-amber-600 font-bold text-[10px] font-mono">(2) E° = +0.77 V</text>

      <line x1="200" y1="105" x2="180" y2="30" stroke="#6366f1" strokeWidth="2.5" />
      <line x1="200" y1="105" x2="680" y2="180" stroke="#6366f1" strokeWidth="2" />
      <text x="320" y="135" className="fill-indigo-600 font-bold text-[10px] font-mono">(3) pente = -177 mV/pH</text>

      <line x1="250" y1="235" x2="250" y2="290" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3 3" />
      <text x="252" y="280" className="fill-purple-600 font-bold text-[10px] font-mono">pH_précip = 7.3</text>
    </svg>
  );
};

/* ==============================================================
   4. SYSTÈME BIELLE-MANIVELLE (Sciences de l'Ingénieur)
   ============================================================== */
const BielleManivelleSVG: React.FC<{ showAnnotations: boolean }> = ({ showAnnotations }) => {
  return (
    <svg viewBox="0 0 740 300" className="w-full max-w-[700px] h-auto font-sans select-none">
      <defs>
        <marker id="si-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 2 L 7 5 L 0 8 z" fill="#4f46e5" />
        </marker>
      </defs>

      {/* Axis of translation (Ox) */}
      <line x1="60" y1="180" x2="680" y2="180" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="685" y="185" className="fill-slate-500 font-mono text-xs">x_0</text>

      {/* Fixed Frame Origin O */}
      <circle cx="160" cy="180" r="6" className="fill-slate-900 dark:fill-white" />
      <text x="145" y="195" className="fill-slate-900 dark:fill-white font-bold font-mono text-sm">O</text>
      {/* Ground hatch */}
      <line x1="140" y1="195" x2="180" y2="195" stroke="#64748b" strokeWidth="2" />
      <line x1="145" y1="195" x2="140" y2="205" stroke="#64748b" strokeWidth="1.5" />
      <line x1="155" y1="195" x2="150" y2="205" stroke="#64748b" strokeWidth="1.5" />
      <line x1="165" y1="195" x2="160" y2="205" stroke="#64748b" strokeWidth="1.5" />
      <line x1="175" y1="195" x2="170" y2="205" stroke="#64748b" strokeWidth="1.5" />

      {/* Manivelle (Barre 1: OA) */}
      <line x1="160" y1="180" x2="280" y2="70" stroke="#4f46e5" strokeWidth="6" strokeLinecap="round" />
      <text x="200" y="115" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">Manivelle 1 (r)</text>

      {/* Angle theta arc */}
      <path d="M 210 180 A 50 50 0 0 0 200 143" fill="none" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#si-arrow)" />
      <text x="215" y="165" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">θ(t)</text>

      {/* Point A (Pivot joint) */}
      <circle cx="280" cy="70" r="7" className="fill-white dark:fill-slate-900 stroke-indigo-600" strokeWidth="3" />
      <text x="275" y="55" className="fill-indigo-600 dark:fill-indigo-400 font-bold font-mono text-sm">A</text>

      {/* Bielle (Barre 2: AB) */}
      <line x1="280" y1="70" x2="520" y2="180" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
      <text x="390" y="115" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs font-mono">Bielle 2 (L)</text>

      {/* Point B (Piston joint) */}
      <circle cx="520" cy="180" r="7" className="fill-white dark:fill-slate-900 stroke-emerald-600" strokeWidth="3" />
      <text x="515" y="165" className="fill-emerald-600 dark:fill-emerald-400 font-bold font-mono text-sm">B</text>

      {/* Piston (Solide 3) Slider Box */}
      <rect x="480" y="165" width="80" height="30" rx="3" className="fill-slate-300 dark:fill-slate-700 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" opacity="0.6" />
      <text x="495" y="185" className="fill-slate-800 dark:fill-slate-100 font-bold text-xs font-mono">Piston 3</text>

      {/* Linear position x(t) */}
      {showAnnotations && (
        <>
          <line x1="160" y1="230" x2="520" y2="230" stroke="#64748b" strokeWidth="1.5" markerStart="url(#si-arrow)" markerEnd="url(#si-arrow)" />
          <text x="330" y="245" className="fill-slate-700 dark:fill-slate-300 font-bold text-xs font-mono">x(t) = r cos θ + L cos β</text>

          {/* Equation card */}
          <rect x="520" y="30" width="190" height="50" rx="6" className="fill-indigo-50 dark:fill-indigo-950/40 stroke-indigo-300 dark:stroke-indigo-600/40" />
          <text x="530" y="50" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-bold">Fermeture géométrique :</text>
          <text x="530" y="68" className="fill-indigo-900 dark:fill-indigo-200 text-[10px] font-mono">r sin θ(t) - L sin β(t) = 0</text>
        </>
      )}
    </svg>
  );
};

/* ==============================================================
   5. CONFORMATION NEWMAN & CRAM (Chimie Organique)
   ============================================================== */
const NewmanCramSVG: React.FC<{ showAnnotations: boolean }> = ({ showAnnotations }) => {
  return (
    <svg viewBox="0 0 740 300" className="w-full max-w-[700px] h-auto font-sans select-none">
      {/* Newman Projection (Left) */}
      <g transform="translate(180, 150)">
        {/* Large circle = Back Carbon (C2) */}
        <circle cx="0" cy="0" r="70" className="fill-white dark:fill-slate-900 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3" />

        {/* Back carbon bonds (emerging from rim) */}
        <line x1="0" y1="-70" x2="0" y2="-115" stroke="#6366f1" strokeWidth="3" />
        <text x="-8" y="-125" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-sm font-mono">Ph</text>

        <line x1="60" y1="35" x2="95" y2="60" stroke="#6366f1" strokeWidth="3" />
        <text x="105" y="70" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-sm font-mono">CH_3</text>

        <line x1="-60" y1="35" x2="-95" y2="60" stroke="#6366f1" strokeWidth="3" />
        <text x="-125" y="70" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-sm font-mono">H_b</text>

        {/* Front Carbon Center (C1) */}
        <circle cx="0" cy="0" r="5" className="fill-rose-500" />

        {/* Front carbon bonds (emerging from center) */}
        <line x1="0" y1="0" x2="0" y2="100" stroke="#f43f5e" strokeWidth="3.5" />
        <text x="-8" y="120" className="fill-rose-600 font-bold text-sm font-mono">Br</text>

        <line x1="0" y1="0" x2="-75" y2="-45" stroke="#f43f5e" strokeWidth="3.5" />
        <text x="-105" y="-45" className="fill-rose-600 font-bold text-sm font-mono">Ph</text>

        <line x1="0" y1="0" x2="75" y2="-45" stroke="#f43f5e" strokeWidth="3.5" />
        <text x="85" y="-45" className="fill-rose-600 font-bold text-sm font-mono">H_a</text>

        <text x="-70" y="145" className="fill-slate-700 dark:fill-slate-300 text-xs font-bold font-mono">
          Projection de Newman (Vue axiale C_1-C_2)
        </text>
      </g>

      {/* Comparison: Cram representation (Right) */}
      <g transform="translate(480, 150)">
        <text x="20" y="-80" className="fill-slate-700 dark:fill-slate-300 text-xs font-bold font-mono">
          Formule de Cram (Conformation Anti-périplanaire)
        </text>
        {/* C1-C2 backbone */}
        <line x1="0" y1="0" x2="100" y2="0" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="4" />
        <text x="-5" y="-10" className="fill-rose-500 font-bold text-sm font-mono">C_1</text>
        <text x="95" y="-10" className="fill-indigo-500 font-bold text-sm font-mono">C_2</text>

        {/* Br pointing down */}
        <line x1="0" y1="0" x2="0" y2="60" stroke="#f43f5e" strokeWidth="3" />
        <text x="-8" y="80" className="fill-rose-600 font-bold text-sm font-mono">Br</text>

        {/* Hb pointing up at 180 deg */}
        <line x1="100" y1="0" x2="100" y2="-60" stroke="#6366f1" strokeWidth="3" />
        <text x="95" y="-70" className="fill-indigo-600 font-bold text-sm font-mono">H_b</text>

        {/* Wedge and Dash bonds */}
        <polygon points="0,0 -20,-30 -30,-25" fill="#f43f5e" />
        <text x="-55" y="-30" className="fill-rose-600 font-bold text-xs font-mono">Ph</text>

        <line x1="0" y1="0" x2="-25" y2="25" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
        <text x="-45" y="35" className="fill-rose-600 font-bold text-xs font-mono">H_a</text>

        <polygon points="100,0 125,25 130,20" fill="#6366f1" />
        <text x="135" y="30" className="fill-indigo-600 font-bold text-xs font-mono">Ph</text>

        <line x1="100" y1="0" x2="125" y2="-25" stroke="#6366f1" strokeWidth="2" strokeDasharray="3 2" />
        <text x="135" y="-30" className="fill-indigo-600 font-bold text-xs font-mono">CH_3</text>

        {/* Anti-coplanar arrow */}
        {showAnnotations && (
          <g>
            <path d="M 5 45 C 50 80, 50 -80, 95 -45" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" />
            <text x="25" y="100" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs font-mono">
              Dièdre H_b - C_2 - C_1 - Br = 180°
            </text>
          </g>
        )}
      </g>
    </svg>
  );
};

/* ==============================================================
   6. SCHÉMA-BLOC D'ASSERVISSEMENT (Sciences de l'Ingénieur)
   ============================================================== */
const SchemaBlocSVG: React.FC<{ showAnnotations: boolean }> = ({ showAnnotations }) => {
  return (
    <svg viewBox="0 0 740 260" className="w-full max-w-[700px] h-auto font-sans select-none">
      <defs>
        <marker id="sb-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 2 L 7 5 L 0 8 z" fill="#4f46e5" />
        </marker>
        <marker id="sb-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 2 L 7 5 L 0 8 z" fill="#ef4444" />
        </marker>
      </defs>

      {/* Input E(p) */}
      <line x1="40" y1="100" x2="110" y2="100" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#sb-arrow)" />
      <text x="45" y="90" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">E(p) [Consigne]</text>

      {/* Comparator 1 */}
      <circle cx="125" cy="100" r="15" className="fill-white dark:fill-slate-900 stroke-indigo-600" strokeWidth="2.5" />
      <line x1="114" y1="89" x2="136" y2="111" stroke="#4f46e5" strokeWidth="1.5" />
      <line x1="114" y1="111" x2="136" y2="89" stroke="#4f46e5" strokeWidth="1.5" />
      <text x="105" y="85" className="fill-indigo-600 font-bold text-xs">+</text>
      <text x="130" y="130" className="fill-rose-500 font-bold text-xs">-</text>

      {/* Error signal epsilon(p) */}
      <line x1="140" y1="100" x2="200" y2="100" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#sb-arrow)" />
      <text x="150" y="90" className="fill-slate-700 dark:fill-slate-300 font-bold text-xs font-mono">ε(p)</text>

      {/* Block 1: Correcteur C(p) */}
      <rect x="200" y="75" width="100" height="50" rx="4" className="fill-indigo-50 dark:fill-indigo-950/60 stroke-indigo-600" strokeWidth="2" />
      <text x="220" y="98" className="fill-indigo-700 dark:fill-indigo-300 font-bold text-xs font-mono">C(p) = K_p</text>
      <text x="215" y="114" className="fill-slate-500 text-[10px] font-mono">Correcteur</text>

      <line x1="300" y1="100" x2="350" y2="100" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#sb-arrow)" />

      {/* Summer 2 (Perturbation de charge) */}
      <circle cx="365" cy="100" r="15" className="fill-white dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
      <line x1="354" y1="89" x2="376" y2="111" stroke="#64748b" strokeWidth="1.5" />
      <line x1="354" y1="111" x2="376" y2="89" stroke="#64748b" strokeWidth="1.5" />
      <text x="345" y="85" className="fill-indigo-600 font-bold text-xs">+</text>
      <text x="375" y="85" className="fill-rose-500 font-bold text-xs">+</text>

      {/* Perturbation incoming from top */}
      <line x1="365" y1="35" x2="365" y2="85" stroke="#ef4444" strokeWidth="2" markerEnd="url(#sb-red)" />
      <text x="375" y="45" className="fill-rose-600 font-bold text-xs font-mono">D(p) [Perturbation]</text>

      <line x1="380" y1="100" x2="440" y2="100" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#sb-arrow)" />

      {/* Block 2: Système H(p) */}
      <rect x="440" y="75" width="120" height="50" rx="4" className="fill-emerald-50 dark:fill-emerald-950/60 stroke-emerald-600" strokeWidth="2" />
      <text x="455" y="98" className="fill-emerald-700 dark:fill-emerald-300 font-bold text-xs font-mono">H(p) = K / p(1+Tp)</text>
      <text x="460" y="114" className="fill-slate-500 text-[10px] font-mono">Système 2nd ordre</text>

      {/* Output S(p) */}
      <line x1="560" y1="100" x2="680" y2="100" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#sb-arrow)" />
      <circle cx="610" cy="100" r="4" className="fill-indigo-600" />
      <text x="685" y="105" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">S(p)</text>

      {/* Feedback loop downwards */}
      <line x1="610" y1="100" x2="610" y2="200" stroke="#4f46e5" strokeWidth="2" />
      <line x1="610" y1="200" x2="400" y2="200" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#sb-arrow)" />

      {/* Sensor Block B(p) */}
      <rect x="300" y="180" width="100" height="40" rx="4" className="fill-purple-50 dark:fill-purple-950/60 stroke-purple-600" strokeWidth="2" />
      <text x="325" y="205" className="fill-purple-700 dark:fill-purple-300 font-bold text-xs font-mono">K_c = 1</text>

      <line x1="300" y1="200" x2="125" y2="200" stroke="#4f46e5" strokeWidth="2" />
      <line x1="125" y1="200" x2="125" y2="115" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#sb-arrow)" />

      {/* Closed loop formula card */}
      {showAnnotations && (
        <g>
          <rect x="180" y="225" width="380" height="30" rx="4" className="fill-slate-100 dark:fill-slate-800 border border-slate-300 dark:border-slate-700" />
          <text x="195" y="244" className="fill-slate-800 dark:fill-slate-200 text-[11px] font-mono font-bold">
            S(p) = [ C·H / (1 + C·H·K_c) ] · E(p) + [ H / (1 + C·H·K_c) ] · D(p)
          </text>
        </g>
      )}
    </svg>
  );
};

/* ==============================================================
   7. CYCLE DE CARNOT (Thermodynamique / Physique)
   ============================================================== */
const CycleCarnotSVG: React.FC<{ showAnnotations: boolean }> = ({ showAnnotations }) => {
  return (
    <svg viewBox="0 0 760 330" className="w-full max-w-[720px] h-auto font-sans select-none">
      <defs>
        <marker id="cc-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#6366f1" />
        </marker>
        <marker id="heat-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444" />
        </marker>
        <marker id="heat-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7" />
        </marker>
      </defs>

      {/* Title */}
      <text x="70" y="25" className="fill-slate-900 dark:fill-white font-bold text-sm font-mono">
        Diagramme de Clapeyron (P, V) d'un Cycle Moteur de Carnot Bitherme
      </text>

      {/* Axes */}
      <line x1="70" y1="280" x2="700" y2="280" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.5" markerEnd="url(#cc-arrow)" />
      <text x="705" y="285" className="fill-slate-700 dark:fill-slate-300 font-bold text-xs font-mono">V (Volume)</text>

      <line x1="70" y1="280" x2="70" y2="40" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.5" markerEnd="url(#cc-arrow)" />
      <text x="40" y="45" className="fill-slate-700 dark:fill-slate-300 font-bold text-xs font-mono">P</text>

      {/* Cycle Area fill */}
      <path
        d="M 170,80 Q 250,115 350,140 Q 420,195 490,240 Q 380,245 280,230 Q 210,165 170,80 Z"
        className="fill-indigo-500/15 dark:fill-indigo-400/20 stroke-indigo-600 dark:stroke-indigo-400"
        strokeWidth="2.5"
      />

      {/* 4 Points on Cycle */}
      {/* 1: (170, 80) High P, Low V */}
      <circle cx="170" cy="80" r="5" className="fill-rose-500" />
      <text x="145" y="75" className="fill-rose-600 dark:fill-rose-400 font-bold text-sm font-mono">1 (P_1, V_1)</text>

      {/* 2: (350, 140) */}
      <circle cx="350" cy="140" r="5" className="fill-amber-500" />
      <text x="360" y="135" className="fill-amber-600 dark:fill-amber-400 font-bold text-sm font-mono">2 (P_2, V_2)</text>

      {/* 3: (490, 240) */}
      <circle cx="490" cy="240" r="5" className="fill-sky-500" />
      <text x="500" y="245" className="fill-sky-600 dark:fill-sky-400 font-bold text-sm font-mono">3 (P_3, V_3)</text>

      {/* 4: (280, 230) */}
      <circle cx="280" cy="230" r="5" className="fill-purple-500" />
      <text x="250" y="255" className="fill-purple-600 dark:fill-purple-400 font-bold text-sm font-mono">4 (P_4, V_4)</text>

      {/* Transformations Labels */}
      {/* 1->2: Isotherme chaude T_C */}
      <path d="M 230,95 Q 260,110 280,120" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#heat-red)" fill="none" />
      <text x="220" y="70" className="fill-rose-600 dark:fill-rose-400 font-bold text-xs font-mono">
        1→2 : Isotherme réversible (T_C)
      </text>

      {/* Heat incoming Q_C */}
      <line x1="260" y1="35" x2="260" y2="90" stroke="#ef4444" strokeWidth="3" markerEnd="url(#heat-red)" />
      <text x="270" y="55" className="fill-rose-600 dark:fill-rose-400 font-bold text-xs font-mono">Q_C &gt; 0 (Source Chaude)</text>

      {/* 2->3: Détente adiabatique */}
      <text x="440" y="180" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs font-mono">
        2→3 : Détente adiab. (Q=0)
      </text>

      {/* 3->4: Compression isotherme froide T_F */}
      <path d="M 420,240 Q 380,240 350,237" stroke="#0284c7" strokeWidth="2.5" markerEnd="url(#heat-blue)" fill="none" />
      <text x="310" y="270" className="fill-sky-600 dark:fill-sky-400 font-bold text-xs font-mono">
        3→4 : Isotherme réversible (T_F)
      </text>

      {/* Heat outgoing Q_F */}
      <line x1="380" y1="240" x2="380" y2="300" stroke="#0284c7" strokeWidth="3" markerEnd="url(#heat-blue)" />
      <text x="390" y="295" className="fill-sky-600 dark:fill-sky-400 font-bold text-xs font-mono">Q_F &lt; 0 (Source Froide)</text>

      {/* 4->1: Compression adiabatique */}
      <text x="110" y="175" className="fill-purple-600 dark:fill-purple-400 font-bold text-xs font-mono">
        4→1 : Compr. adiab.
      </text>

      {/* Center Work annotation */}
      <g transform="translate(290, 175)">
        <text x="0" y="0" className="fill-indigo-700 dark:fill-indigo-300 font-bold text-xs font-mono text-center">
          Aire = |W_cycle| &gt; 0
        </text>
        <text x="-15" y="16" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono">
          Travail utile moteur fourni
        </text>
      </g>

      {/* Formula Card */}
      {showAnnotations && (
        <g transform="translate(530, 70)">
          <rect x="0" y="0" width="210" height="90" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
          <text x="12" y="22" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">Théorème de Carnot :</text>
          <text x="12" y="44" className="fill-slate-800 dark:fill-slate-100 font-bold text-sm font-mono">η = 1 - T_F / T_C</text>
          <text x="12" y="65" className="fill-slate-500 text-[10px] font-mono">Clausius : Q_C/T_C + Q_F/T_F = 0</text>
          <text x="12" y="80" className="fill-emerald-600 text-[10px] font-mono">Rendement réversible maximal</text>
        </g>
      )}
    </svg>
  );
};

/* ==============================================================
   8. FENTES D'YOUNG & DIFFRACTION (Optique Ondulatoire / Physique)
   ============================================================== */
const FentesYoungSVG: React.FC<{ showAnnotations: boolean }> = ({ showAnnotations }) => {
  return (
    <svg viewBox="0 0 760 320" className="w-full max-w-[720px] h-auto font-sans select-none">
      <defs>
        <marker id="fy-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3b82f6" />
        </marker>
        <marker id="fy-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444" />
        </marker>
      </defs>

      {/* Title */}
      <text x="30" y="22" className="fill-slate-900 dark:fill-white font-bold text-sm font-mono">
        Dispositif Interférentiel des Fentes d'Young & Profil d'Intensité sur Écran
      </text>

      {/* Laser Source (Left) */}
      <rect x="25" y="140" width="50" height="40" rx="4" className="fill-rose-100 dark:fill-rose-950/60 stroke-rose-600" strokeWidth="2" />
      <text x="32" y="165" className="fill-rose-700 dark:fill-rose-300 font-bold text-xs font-mono">Laser</text>

      {/* Incident beam */}
      <line x1="75" y1="160" x2="190" y2="160" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#fy-red)" />
      <text x="90" y="150" className="fill-rose-600 font-mono text-[10px]">Onde plane λ_0</text>

      {/* Mask with 2 Slits at x=200 */}
      <line x1="200" y1="30" x2="200" y2="135" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="7" strokeLinecap="round" />
      <line x1="200" y1="145" x2="200" y2="175" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="7" strokeLinecap="round" />
      <line x1="200" y1="185" x2="200" y2="290" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="7" strokeLinecap="round" />

      {/* Slits markers */}
      <circle cx="200" cy="140" r="4" className="fill-amber-500" />
      <text x="175" y="140" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs font-mono">S_1</text>

      <circle cx="200" cy="180" r="4" className="fill-amber-500" />
      <text x="175" y="195" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs font-mono">S_2</text>

      {/* Dimension 'a' between slits */}
      <line x1="215" y1="140" x2="215" y2="180" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#fy-arrow)" markerStart="url(#fy-arrow)" />
      <text x="225" y="165" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs font-mono">a</text>

      {/* Point M on Screen at (580, 100) */}
      <line x1="200" y1="140" x2="580" y2="100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="200" y1="180" x2="580" y2="100" stroke="#6366f1" strokeWidth="2" strokeDasharray="3 3" />

      {/* Observation Screen at x=580 */}
      <line x1="580" y1="30" x2="580" y2="290" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="3" />
      <text x="560" y="305" className="fill-slate-700 dark:fill-slate-300 font-bold text-xs font-mono">Écran (E)</text>

      {/* Center O on screen */}
      <circle cx="580" cy="160" r="3" className="fill-slate-800 dark:fill-white" />
      <text x="590" y="165" className="fill-slate-700 dark:fill-slate-300 font-bold text-xs font-mono">O</text>

      {/* Point M(x) */}
      <circle cx="580" cy="100" r="4" className="fill-rose-600" />
      <text x="590" y="105" className="fill-rose-600 dark:fill-rose-400 font-bold text-xs font-mono">M(x)</text>

      {/* Distance D */}
      <line x1="200" y1="270" x2="580" y2="270" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#fy-arrow)" markerStart="url(#fy-arrow)" />
      <text x="375" y="265" className="fill-slate-600 dark:fill-slate-400 font-bold text-xs font-mono">Distance D &gt;&gt; a</text>

      {/* Intensity Profile curve on right side of screen */}
      <path
        d="M 580,40 C 660,60 670,90 620,100 C 690,120 720,150 720,160 C 720,170 690,200 620,220 C 670,230 660,260 580,280"
        stroke="#8b5cf6"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Interference Fringes bars inside */}
      <g opacity="0.8">
        {[70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250].map((y, idx) => (
          <line key={idx} x1="585" y1={y} x2={600 + (1 - Math.abs(y - 160) / 100) * 80} y2={y} stroke="#a855f7" strokeWidth="2.5" />
        ))}
      </g>
      <text x="660" y="295" className="fill-purple-600 dark:fill-purple-400 font-bold text-[11px] font-mono">I(x) = I_0 cos²</text>

      {/* Formula Callout */}
      {showAnnotations && (
        <g transform="translate(250, 40)">
          <rect x="0" y="0" width="220" height="75" rx="5" className="fill-slate-100 dark:fill-slate-800 border border-slate-300 dark:border-slate-700" />
          <text x="10" y="20" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs font-mono">Différence de marche :</text>
          <text x="10" y="40" className="fill-slate-900 dark:fill-white font-mono font-bold text-sm">δ(x) = a · x / D</text>
          <text x="10" y="60" className="fill-emerald-600 dark:fill-emerald-400 font-mono font-bold text-xs">Interfrange : i = λ_0 · D / a</text>
        </g>
      )}
    </svg>
  );
};

/* ==============================================================
   9. DIAGRAMME DE BODE 2ND ORDRE (Automatique / SI / Physique)
   ============================================================== */
const DiagrammeBodeSVG: React.FC<{ showAnnotations: boolean }> = ({ showAnnotations }) => {
  return (
    <svg viewBox="0 0 760 320" className="w-full max-w-[720px] h-auto font-sans select-none">
      <defs>
        <marker id="bode-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#6366f1" />
        </marker>
      </defs>

      {/* Title */}
      <text x="30" y="20" className="fill-slate-900 dark:fill-white font-bold text-sm font-mono">
        Diagramme de Bode d'un Système du 2nd Ordre H(p) = K / (1 + 2ξ p/ω_0 + p²/ω_0²)
      </text>

      {/* SUBPLOT 1: GAIN (dB) */}
      <g transform="translate(60, 40)">
        {/* Frame / Axes */}
        <line x1="0" y1="100" x2="620" y2="100" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="0" y1="120" x2="620" y2="120" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="1.5" />
        <line x1="310" y1="0" x2="310" y2="120" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1" strokeDasharray="3 3" />

        <text x="630" y="125" className="fill-slate-600 dark:fill-slate-400 font-mono text-[10px]">ω (rad/s)</text>
        <text x="-40" y="15" className="fill-slate-700 dark:fill-slate-300 font-bold font-mono text-xs">G (dB)</text>
        <text x="-35" y="105" className="fill-slate-500 font-mono text-[10px]">0 dB</text>
        <text x="-40" y="45" className="fill-emerald-600 font-mono text-[10px] font-bold">+M_r</text>

        {/* Asymptotes (dashed) */}
        <line x1="0" y1="100" x2="310" y2="100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="310" y1="100" x2="580" y2="230" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
        <text x="440" y="160" className="fill-slate-500 font-mono text-[10px]">-40 dB/décade</text>

        {/* Resonance Gain Curve */}
        <path
          d="M 0,100 C 150,100 240,95 285,45 C 310,20 330,45 360,90 C 440,160 520,210 600,240"
          stroke="#4f46e5"
          strokeWidth="3"
          fill="none"
        />

        {/* Resonance Peak Point */}
        <circle cx="295" cy="30" r="4" className="fill-emerald-500" />
        <text x="245" y="20" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs font-mono">
          Résonance (ξ &lt; 1/√2)
        </text>

        {/* Frequency ticks */}
        <text x="50" y="135" className="fill-slate-500 font-mono text-[10px]">0,1 ω_0</text>
        <text x="300" y="135" className="fill-indigo-600 dark:fill-indigo-400 font-bold font-mono text-xs">ω_0</text>
        <text x="520" y="135" className="fill-slate-500 font-mono text-[10px]">10 ω_0</text>
      </g>

      {/* SUBPLOT 2: PHASE (deg) */}
      <g transform="translate(60, 195)">
        <line x1="0" y1="10" x2="620" y2="10" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="0" y1="55" x2="620" y2="55" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="0" y1="100" x2="620" y2="100" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1" strokeDasharray="3 3" />

        <text x="-40" y="15" className="fill-slate-500 font-mono text-[10px]">0°</text>
        <text x="-45" y="60" className="fill-indigo-600 font-mono text-[10px] font-bold">-90°</text>
        <text x="-50" y="105" className="fill-slate-500 font-mono text-[10px]">-180°</text>
        <text x="-40" y="-5" className="fill-slate-700 dark:fill-slate-300 font-bold font-mono text-xs">φ (°)</text>

        <line x1="310" y1="0" x2="310" y2="110" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1" strokeDasharray="3 3" />

        {/* Phase S-curve */}
        <path
          d="M 0,10 C 180,10 260,30 310,55 C 360,80 440,100 620,100"
          stroke="#ea580c"
          strokeWidth="3"
          fill="none"
        />

        {/* -90 deg at omega_0 */}
        <circle cx="310" cy="55" r="4" className="fill-amber-500" />
        <text x="325" y="60" className="fill-amber-600 dark:fill-amber-400 font-bold font-mono text-xs">
          φ(ω_0) = -90°
        </text>
      </g>

      {/* Annotations box */}
      {showAnnotations && (
        <g transform="translate(480, 45)">
          <rect x="0" y="0" width="220" height="70" rx="5" className="fill-slate-100 dark:fill-slate-800 border border-slate-300 dark:border-slate-700" />
          <text x="10" y="18" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs font-mono">Facteur de résonance :</text>
          <text x="10" y="38" className="fill-slate-800 dark:fill-slate-200 text-xs font-mono font-bold">M_r = 1 / (2ξ √(1 - ξ²))</text>
          <text x="10" y="58" className="fill-slate-500 text-[10px] font-mono">Pulsation : ω_r = ω_0 √(1 - 2ξ²)</text>
        </g>
      )}
    </svg>
  );
};

export default ExerciseDiagram;

