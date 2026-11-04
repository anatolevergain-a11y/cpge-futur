import React, { useState, useEffect, useRef } from 'react';
import { Sliders, Activity, Compass, Cpu, Play, RotateCcw, Info } from 'lucide-react';
import MathRenderer from './MathRenderer';

type LabModule = 'fourier' | 'bode' | 'interferences' | 'matrices';

export const InteractiveLab: React.FC = () => {
  const [activeModule, setActiveModule] = useState<LabModule>('fourier');

  // Fourier state
  const [fourierSignal, setFourierSignal] = useState<'square' | 'triangle' | 'sawtooth'>('square');
  const [fourierHarmonics, setFourierHarmonics] = useState<number>(7);
  const [fourierAnimSpeed, setFourierAnimSpeed] = useState<number>(1);
  const [fourierIsRunning, setFourierIsRunning] = useState<boolean>(true);
  const fourierCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Bode state
  const [bodeOmega0, setBodeOmega0] = useState<number>(100); // rad/s
  const [bodeQ, setBodeQ] = useState<number>(2.5); // quality factor
  const bodeCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Optics / Young slits state
  const [opticsWavelength, setOpticsWavelength] = useState<number>(532); // nm (green laser)
  const [opticsDistanceA, setOpticsDistanceA] = useState<number>(0.5); // mm
  const [opticsDistanceD, setOpticsDistanceD] = useState<number>(1.5); // m
  const opticsCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Matrix Reduction state
  const [matrixA, setMatrixA] = useState<[[number, number], [number, number]]>([
    [3, 1],
    [2, 2],
  ]);

  // Fourier animation loop
  useEffect(() => {
    if (activeModule !== 'fourier') return;
    const canvas = fourierCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let t = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Axis
      const centerY = height / 2;
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Plot Fourier reconstruction
      ctx.beginPath();
      ctx.strokeStyle = '#38bdf8'; // Sky blue
      ctx.lineWidth = 2.5;

      const scaleX = 0.02;
      const amp = height * 0.32;

      for (let px = 0; px < width; px++) {
        const x = (px - width / 2) * scaleX + (fourierIsRunning ? t * 0.05 : 0);
        let val = 0;

        if (fourierSignal === 'square') {
          // 4/pi * sum sin((2k+1)x)/(2k+1)
          for (let k = 0; k < fourierHarmonics; k++) {
            const n = 2 * k + 1;
            val += (4 / Math.PI) * (Math.sin(n * x) / n);
          }
        } else if (fourierSignal === 'triangle') {
          // 8/pi^2 * sum (-1)^k sin((2k+1)x) / (2k+1)^2
          for (let k = 0; k < fourierHarmonics; k++) {
            const n = 2 * k + 1;
            const sign = k % 2 === 0 ? 1 : -1;
            val += (8 / (Math.PI * Math.PI)) * (sign * Math.sin(n * x) / (n * n));
          }
        } else if (fourierSignal === 'sawtooth') {
          // 2/pi * sum (-1)^(k+1) sin(k x)/k
          for (let k = 1; k <= fourierHarmonics; k++) {
            const sign = k % 2 === 1 ? 1 : -1;
            val += (2 / Math.PI) * (sign * Math.sin(k * x) / k);
          }
        }

        const py = centerY - val * amp;
        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      if (fourierIsRunning) {
        t += fourierAnimSpeed;
      }
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [activeModule, fourierSignal, fourierHarmonics, fourierAnimSpeed, fourierIsRunning]);

  // Bode Plot render
  useEffect(() => {
    if (activeModule !== 'bode') return;
    const canvas = bodeCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Background grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Split canvas: Top = Gain (dB), Bottom = Phase (deg)
    const midY = height / 2;
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(width, midY);
    ctx.stroke();

    // Frequency range: 0.01 omega0 to 100 omega0 (4 decades)
    const decades = 4;
    const logMin = -2; // log10(omega/omega0) = -2
    const logMax = 2; // log10(omega/omega0) = +2

    // 1. Draw Gain G(dB) = 20 log10 | H(jw) |
    // H(jw) = 1 / (1 + 2j m (w/w0) - (w/w0)^2) with m = 1 / (2Q)
    const m = 1 / (2 * bodeQ);

    ctx.beginPath();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;

    for (let px = 0; px < width; px++) {
      const uLog = logMin + (px / width) * (logMax - logMin);
      const u = Math.pow(10, uLog); // u = omega / omega0
      const denomRe = 1 - u * u;
      const denomIm = 2 * m * u;
      const modDenom = Math.sqrt(denomRe * denomRe + denomIm * denomIm);
      const gainDb = -20 * Math.log10(modDenom);

      // Map gainDb (-40dB to +20dB) into top half [20, midY - 20]
      const gainPx = midY / 2 - (gainDb / 40) * (midY * 0.4);
      if (px === 0) ctx.moveTo(px, gainPx);
      else ctx.lineTo(px, gainPx);
    }
    ctx.stroke();

    // 2. Draw Phase (deg) in bottom half
    ctx.beginPath();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;

    for (let px = 0; px < width; px++) {
      const uLog = logMin + (px / width) * (logMax - logMin);
      const u = Math.pow(10, uLog);
      const denomRe = 1 - u * u;
      const denomIm = 2 * m * u;
      let phaseRad = -Math.atan2(denomIm, denomRe);
      if (phaseRad > 0) phaseRad -= 2 * Math.PI; // stays between 0 and -pi
      const phaseDeg = (phaseRad * 180) / Math.PI; // 0 to -180

      // Map phaseDeg (0 to -180) into bottom half [midY + 20, height - 20]
      const phasePx = midY + 20 + (-phaseDeg / 180) * (height - midY - 40);
      if (px === 0) ctx.moveTo(px, phasePx);
      else ctx.lineTo(px, phasePx);
    }
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#38bdf8';
    ctx.font = '12px JetBrains Mono';
    ctx.fillText('Gain G(ω) [dB]', 14, 24);

    ctx.fillStyle = '#f59e0b';
    ctx.fillText('Phase φ(ω) [degrés: 0° → -180°]', 14, midY + 24);

    // Resonance peak marker if Q > 1/sqrt(2) ~ 0.707
    if (bodeQ > 1 / Math.SQRT2) {
      const uRes = Math.sqrt(1 - 2 * m * m);
      const pxRes = ((Math.log10(uRes) - logMin) / (logMax - logMin)) * width;
      const gMax = 20 * Math.log10(bodeQ / Math.sqrt(1 - 1 / (4 * bodeQ * bodeQ)));

      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(pxRes, midY / 2 - (gMax / 40) * (midY * 0.4), 4, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillText(`Résonance: +${gMax.toFixed(1)} dB (Q = ${bodeQ.toFixed(2)})`, pxRes + 8, midY / 2 - (gMax / 40) * (midY * 0.4) - 6);
    }
  }, [activeModule, bodeOmega0, bodeQ]);

  // Optics / Young slits render
  useEffect(() => {
    if (activeModule !== 'interferences') return;
    const canvas = opticsCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Interfrange i = lambda * D / a
    // lambda in m: opticsWavelength * 1e-9
    // a in m: opticsDistanceA * 1e-3
    // D in m: opticsDistanceD
    const lambdaM = opticsWavelength * 1e-9;
    const aM = opticsDistanceA * 1e-3;
    const dM = opticsDistanceD;
    const interfrangeM = (lambdaM * dM) / aM; // in meters
    const interfrangeMm = interfrangeM * 1000;

    // Convert wavelength to RGB color
    const getWavelengthColor = (wl: number) => {
      if (wl < 440) return 'rgba(147, 51, 234, ';
      if (wl < 490) return 'rgba(59, 130, 246, ';
      if (wl < 560) return 'rgba(34, 197, 94, ';
      if (wl < 590) return 'rgba(234, 179, 8, ';
      if (wl < 620) return 'rgba(249, 115, 22, ';
      return 'rgba(239, 68, 68, ';
    };
    const baseColor = getWavelengthColor(opticsWavelength);

    // Top section: visual interference fringes (optical screen simulation)
    const screenHeight = 90;
    const screenCenter = width / 2;
    const mmPerPixel = 0.05; // 1 pixel = 0.05 mm on physical screen

    for (let px = 0; px < width; px++) {
      const xMm = (px - screenCenter) * mmPerPixel;
      // Intensity I(x) = 2*I0 * (1 + cos(2*pi*x / i))
      const phase = (2 * Math.PI * xMm) / interfrangeMm;
      const normalizedIntensity = 0.5 * (1 + Math.cos(phase)); // 0 to 1

      ctx.fillStyle = `${baseColor}${normalizedIntensity})`;
      ctx.fillRect(px, 10, 1, screenHeight);
    }

    // Border around simulated screen
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 10, width, screenHeight);

    // Bottom section: Intensity curve I(x)
    const curveTop = 130;
    const curveHeight = height - curveTop - 25;
    const curveCenterY = curveTop + curveHeight;

    // Grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let y = curveTop; y <= curveTop + curveHeight; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 2;

    for (let px = 0; px < width; px++) {
      const xMm = (px - screenCenter) * mmPerPixel;
      const phase = (2 * Math.PI * xMm) / interfrangeMm;
      const normalizedIntensity = 0.5 * (1 + Math.cos(phase));
      const py = curveCenterY - normalizedIntensity * (curveHeight - 10);

      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Interfrange dimension markers
    const centerI = (interfrangeMm / mmPerPixel);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(screenCenter, curveTop);
    ctx.lineTo(screenCenter, curveCenterY);
    ctx.moveTo(screenCenter + centerI, curveTop);
    ctx.lineTo(screenCenter + centerI, curveCenterY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Double arrow for 'i'
    ctx.strokeStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(screenCenter, curveTop + 20);
    ctx.lineTo(screenCenter + centerI, curveTop + 20);
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.font = '12px JetBrains Mono';
    ctx.fillText(`Interfrange i = ${interfrangeMm.toFixed(2)} mm`, screenCenter + 10, curveTop + 15);
  }, [activeModule, opticsWavelength, opticsDistanceA, opticsDistanceD]);

  // Matrix math calculations
  const matrixCalculations = () => {
    const a = matrixA[0][0];
    const b = matrixA[0][1];
    const c = matrixA[1][0];
    const d = matrixA[1][1];

    const trace = a + d;
    const det = a * d - b * c;
    const discriminant = trace * trace - 4 * det;

    let lambda1: string = '';
    let lambda2: string = '';
    let isDiag = true;
    let comment = '';

    if (discriminant > 0) {
      const l1 = (trace + Math.sqrt(discriminant)) / 2;
      const l2 = (trace - Math.sqrt(discriminant)) / 2;
      lambda1 = l1.toFixed(2);
      lambda2 = l2.toFixed(2);
      comment = 'Deux valeurs propres réelles distinctes : la matrice est diagonalisable sur ℝ !';
    } else if (discriminant === 0) {
      const l0 = trace / 2;
      lambda1 = l0.toFixed(2);
      lambda2 = l0.toFixed(2);
      // If scalar matrix
      if (b === 0 && c === 0 && a === d) {
        isDiag = true;
        comment = 'Matrice scalaire (déjà diagonale) de valeur propre double.';
      } else {
        isDiag = false;
        comment = 'Valeur propre double et dim(Ker(A - λI)) = 1 < 2 : non diagonalisable sur ℝ ni sur ℂ (trigonalisable seulement).';
      }
    } else {
      const re = (trace / 2).toFixed(2);
      const im = (Math.sqrt(-discriminant) / 2).toFixed(2);
      lambda1 = `${re} + i ${im}`;
      lambda2 = `${re} - i ${im}`;
      isDiag = false;
      comment = 'Racines complexes non réelles conjuguées : non diagonalisable sur ℝ, mais diagonalisable sur ℂ.';
    }

    return { trace, det, discriminant, lambda1, lambda2, isDiag, comment };
  };

  const matRes = matrixCalculations();

  return (
    <div className="space-y-6">
      {/* Header & Subtitle */}
      <div>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
          <span>Laboratoire Scientifique</span>
          <span aria-hidden="true">·</span>
          <span>Simulateurs Interactifs CPGE</span>
          <span aria-hidden="true">·</span>
          <span>Physique & Mathématiques</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Laboratoire Numérique & Visualiseurs Théoriques
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
          Visualisez concrètement les concepts abstraits du programme des concours (Gibbs, résonance RLC, interfranges de Fresnel, spectres matriciels).
        </p>
      </div>

      {/* Module Selector (Interactive Segmented Bar) */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveModule('fourier')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeModule === 'fourier'
              ? 'bg-white dark:bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-slate-200/80 dark:border-sky-500/30 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
          }`}
        >
          <Activity className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>Séries de Fourier & Phénomène de Gibbs</span>
        </button>

        <button
          onClick={() => setActiveModule('bode')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeModule === 'bode'
              ? 'bg-white dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-slate-200/80 dark:border-amber-500/30 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
          }`}
        >
          <Sliders className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>RLC & Diagramme de Bode Interactif</span>
        </button>

        <button
          onClick={() => setActiveModule('interferences')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeModule === 'interferences'
              ? 'bg-white dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-slate-200/80 dark:border-emerald-500/30 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
          }`}
        >
          <Compass className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Fentes d'Young & Profil de Fresnel</span>
        </button>

        <button
          onClick={() => setActiveModule('matrices')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeModule === 'matrices'
              ? 'bg-white dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 border border-slate-200/80 dark:border-indigo-500/30 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
          }`}
        >
          <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>Réducteur Matriciel & Valeurs Propres</span>
        </button>
      </div>

      {/* Module 1: Fourier */}
      {activeModule === 'fourier' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Visual Canvas Stage */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-mono text-slate-400">
                <MathRenderer content="Signal reconstruit par somme partielle $S_N(x) = a_0 + \sum_{n=1}^N (a_n \cos(nx) + b_n \sin(nx))$" />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFourierIsRunning(!fourierIsRunning)}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 flex items-center gap-1.5"
                >
                  <Play className="w-3 h-3" />
                  {fourierIsRunning ? 'Pause' : 'Animer'}
                </button>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] bg-slate-950 rounded-lg overflow-hidden border border-slate-800/80">
              <canvas
                ref={fourierCanvasRef}
                width={800}
                height={450}
                className="w-full h-full block"
              />
            </div>

            <div className="mt-4 p-3 bg-slate-950/70 border border-slate-800 rounded-lg text-xs text-slate-300 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sky-300">Observation du Phénomène de Gibbs : </strong>
                <MathRenderer content="À chaque saut de discontinuité du créneau, la série de Fourier dépasse la valeur du palier d'environ 8,95%, quel que soit le nombre d'harmoniques $N$. La convergence est uniforme sur tout intervalle compact sans discontinuité, mais pas sur $\mathbb{R}$ tout entier." />
              </div>
            </div>
          </div>

          {/* Controls & Theoretical Deck */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Paramètres de Synthèse
              </h3>

              {/* Signal waveform */}
              <div className="space-y-2 mb-5">
                <label className="text-xs text-slate-400">Forme d'onde</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setFourierSignal('square')}
                    className={`py-1.5 text-xs font-medium rounded border ${
                      fourierSignal === 'square'
                        ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    Créneau
                  </button>
                  <button
                    onClick={() => setFourierSignal('triangle')}
                    className={`py-1.5 text-xs font-medium rounded border ${
                      fourierSignal === 'triangle'
                        ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    Triangle
                  </button>
                  <button
                    onClick={() => setFourierSignal('sawtooth')}
                    className={`py-1.5 text-xs font-medium rounded border ${
                      fourierSignal === 'sawtooth'
                        ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    Dent de Scie
                  </button>
                </div>
              </div>

              {/* Harmonic slider */}
              <div className="space-y-2 mb-5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Harmoniques (N) :</span>
                  <span className="font-mono text-sky-400 font-semibold">{fourierHarmonics}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="35"
                  value={fourierHarmonics}
                  onChange={(e) => setFourierHarmonics(Number(e.target.value))}
                  className="w-full accent-sky-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1 (Fondamental)</span>
                  <span>35 (Très haute précision)</span>
                </div>
              </div>

              {/* Speed slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Vitesse d'onde :</span>
                  <span className="font-mono text-slate-300">{fourierAnimSpeed}x</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.2"
                  value={fourierAnimSpeed}
                  onChange={(e) => setFourierAnimSpeed(Number(e.target.value))}
                  className="w-full accent-slate-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                />
              </div>
            </div>

            {/* Formula display */}
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800/80">
              <div className="text-[11px] font-mono text-slate-400 mb-1">DÉVELOPPEMENT FORMEL :</div>
              <div className="text-xs text-slate-200 overflow-x-auto py-1">
                {fourierSignal === 'square' && (
                  <MathRenderer content="$$f(t) = \frac{4}{\pi} \sum_{k=0}^{N-1} \frac{\sin((2k+1)\omega_0 t)}{2k+1}$$" />
                )}
                {fourierSignal === 'triangle' && (
                  <MathRenderer content="$$f(t) = \frac{8}{\pi^2} \sum_{k=0}^{N-1} \frac{(-1)^k \sin((2k+1)\omega_0 t)}{(2k+1)^2}$$" />
                )}
                {fourierSignal === 'sawtooth' && (
                  <MathRenderer content="$$f(t) = \frac{2}{\pi} \sum_{k=1}^N \frac{(-1)^{k+1} \sin(k \omega_0 t)}{k}$$" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module 2: Bode Plot */}
      {activeModule === 'bode' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
              <MathRenderer content="Filtre passe-bas du 2e ordre : $\underline{H}(j\omega) = \frac{H_0}{1 + 2j m \frac{\omega}{\omega_0} - (\frac{\omega}{\omega_0})^2}$" />
              <MathRenderer className="text-amber-400 font-semibold" content="$m = \frac{1}{2Q}$" />
            </div>

            <div className="relative w-full aspect-[16/9] bg-slate-950 rounded-lg overflow-hidden border border-slate-800/80">
              <canvas
                ref={bodeCanvasRef}
                width={800}
                height={450}
                className="w-full h-full block"
              />
            </div>

            <div className="mt-4 p-3 bg-slate-950/70 border border-slate-800 rounded-lg text-xs text-slate-300">
              <strong className="text-amber-300">Condition de résonance : </strong>
              <MathRenderer content="Il y a résonance en amplitude si et seulement si $Q > \frac{1}{\sqrt{2}} \approx 0,707$. La pulsation de résonance est alors $\omega_r = \omega_0 \sqrt{1 - \frac{1}{2Q^2}} < \omega_0$." />
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Paramètres du Circuit RLC
              </h3>

              {/* Quality Factor Q */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Facteur de qualité Q :</span>
                  <span className="font-mono text-amber-400 font-semibold">{bodeQ.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="8"
                  step="0.05"
                  value={bodeQ}
                  onChange={(e) => setBodeQ(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0.2 (Apériodique)</span>
                  <span>0.71 (Critique)</span>
                  <span>8.0 (Forte résonance)</span>
                </div>
              </div>

              {/* Pulsation propre */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400"><MathRenderer content="Pulsation propre $\omega_0$ :" /></span>
                  <span className="font-mono text-slate-300">{bodeOmega0} rad/s</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={bodeOmega0}
                  onChange={(e) => setBodeOmega0(Number(e.target.value))}
                  className="w-full accent-slate-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                />
              </div>

              {/* Summary cards */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-slate-950 border border-slate-800 rounded flex justify-between">
                  <span className="text-slate-400"><MathRenderer content="Pente HF ($\omega \gg \omega_0$) :" /></span>
                  <span className="font-mono text-rose-400 font-semibold">-40 dB / décade</span>
                </div>
                <div className="p-2.5 bg-slate-950 border border-slate-800 rounded flex justify-between">
                  <span className="text-slate-400"><MathRenderer content="Déphasage à $\omega_0$ :" /></span>
                  <span className="font-mono text-amber-400 font-semibold">-90°</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setBodeQ(1 / Math.SQRT2);
                setBodeOmega0(100);
              }}
              className="w-full py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Réinitialiser au régime critique (Q = 0,707)</span>
            </button>
          </div>
        </div>
      )}

      {/* Module 3: Young Slits & Fresnel */}
      {activeModule === 'interferences' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
              <MathRenderer content="Simulation de l'écran & Profil d'intensité de Fresnel $I(x) = 2I_0(1 + \cos(2\pi x / i))$" />
            </div>

            <div className="relative w-full aspect-[16/9] bg-slate-950 rounded-lg overflow-hidden border border-slate-800/80">
              <canvas
                ref={opticsCanvasRef}
                width={800}
                height={450}
                className="w-full h-full block"
              />
            </div>

            <div className="mt-4 p-3 bg-slate-950/70 border border-slate-800 rounded-lg text-xs text-slate-300">
              <strong className="text-emerald-300">Formule de l'interfrange :</strong>{' '}
              <MathRenderer content="$i = \frac{\lambda_0 D}{a}$" />. Si vous écartez les fentes ($a \nearrow$), les franges se resserrent ($i \searrow$). Si vous éloignez l'écran ($D \nearrow$), les franges s'écartent ($i \nearrow$).
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Paramètres du Banc Optique
              </h3>

              {/* Wavelength */}
              <div className="space-y-2 mb-5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400"><MathRenderer content="Longueur d'onde $\lambda$ :" /></span>
                  <span className="font-mono text-emerald-400 font-semibold">{opticsWavelength} nm</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="700"
                  value={opticsWavelength}
                  onChange={(e) => setOpticsWavelength(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>400 nm (Violet)</span>
                  <span>532 nm (Vert)</span>
                  <span>700 nm (Rouge)</span>
                </div>
              </div>

              {/* Slit separation a */}
              <div className="space-y-2 mb-5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400"><MathRenderer content="Écartement des fentes $a$ :" /></span>
                  <span className="font-mono text-slate-300">{opticsDistanceA} mm</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.05"
                  value={opticsDistanceA}
                  onChange={(e) => setOpticsDistanceA(Number(e.target.value))}
                  className="w-full accent-slate-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                />
              </div>

              {/* Screen distance D */}
              <div className="space-y-2 mb-5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400"><MathRenderer content="Distance fentes-écran $D$ :" /></span>
                  <span className="font-mono text-slate-300">{opticsDistanceD} m</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.1"
                  value={opticsDistanceD}
                  onChange={(e) => setOpticsDistanceD(Number(e.target.value))}
                  className="w-full accent-slate-400 bg-slate-800 rounded-lg cursor-pointer h-1.5"
                />
              </div>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2 text-xs">
              <div className="text-[11px] font-mono text-slate-400">INTERFRANGE THÉORIQUE CALCULÉ :</div>
              <div className="text-xl font-mono text-emerald-400 font-bold">
                {((opticsWavelength * 1e-9 * opticsDistanceD) / (opticsDistanceA * 1e-3) * 1000).toFixed(3)} mm
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module 4: Matrix Reduction */}
      {activeModule === 'matrices' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              <MathRenderer content="Coefficients de la Matrice $A \in \mathcal{M}_2(\mathbb{R})$" />
            </h3>

            <div className="flex items-center justify-center p-6 bg-slate-950 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-serif text-slate-500">(</span>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    value={matrixA[0][0]}
                    onChange={(e) =>
                      setMatrixA([
                        [Number(e.target.value), matrixA[0][1]],
                        [matrixA[1][0], matrixA[1][1]],
                      ])
                    }
                    className="w-16 h-12 text-center text-lg font-mono font-bold bg-slate-900 border border-slate-700 rounded-lg text-indigo-400 focus:outline-none focus:border-indigo-500"
                  />
                  <input
                    type="number"
                    value={matrixA[0][1]}
                    onChange={(e) =>
                      setMatrixA([
                        [matrixA[0][0], Number(e.target.value)],
                        [matrixA[1][0], matrixA[1][1]],
                      ])
                    }
                    className="w-16 h-12 text-center text-lg font-mono font-bold bg-slate-900 border border-slate-700 rounded-lg text-indigo-400 focus:outline-none focus:border-indigo-500"
                  />
                  <input
                    type="number"
                    value={matrixA[1][0]}
                    onChange={(e) =>
                      setMatrixA([
                        [matrixA[0][0], matrixA[0][1]],
                        [Number(e.target.value), matrixA[1][1]],
                      ])
                    }
                    className="w-16 h-12 text-center text-lg font-mono font-bold bg-slate-900 border border-slate-700 rounded-lg text-indigo-400 focus:outline-none focus:border-indigo-500"
                  />
                  <input
                    type="number"
                    value={matrixA[1][1]}
                    onChange={(e) =>
                      setMatrixA([
                        [matrixA[0][0], matrixA[0][1]],
                        [matrixA[1][0], Number(e.target.value)],
                      ])
                    }
                    className="w-16 h-12 text-center text-lg font-mono font-bold bg-slate-900 border border-slate-700 rounded-lg text-indigo-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <span className="text-4xl font-serif text-slate-500">)</span>
              </div>
            </div>

            {/* Quick matrix presets */}
            <div className="space-y-2">
              <span className="text-xs text-slate-400">Matrices classiques de concours :</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() =>
                    setMatrixA([
                      [3, 1],
                      [2, 2],
                    ])
                  }
                  className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700"
                >
                  Diagonalisable ($\lambda = 1, 4$)
                </button>
                <button
                  onClick={() =>
                    setMatrixA([
                      [1, 1],
                      [0, 1],
                    ])
                  }
                  className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700"
                >
                  <MathRenderer content="Jordan / Non-diag ($\lambda = 1$)" />
                </button>
                <button
                  onClick={() =>
                    setMatrixA([
                      [0, -1],
                      [1, 0],
                    ])
                  }
                  className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700"
                >
                  <MathRenderer content="Rotation $\pi/2$ (Spectre complexe $\pm i$)" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Analyse Spectrale Rigoureuse
            </h3>

            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400"><MathRenderer content="Trace $\mathrm{Tr}(A)$ :" /></span>
                <span className="text-white font-bold">{matRes.trace}</span>
              </div>

              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400"><MathRenderer content="Déterminant $\det(A)$ :" /></span>
                <span className="text-white font-bold">{matRes.det}</span>
              </div>

              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400"><MathRenderer content="Polynôme caractéristique $\chi_A(X)$ :" /></span>
                <span className="text-indigo-400 font-bold">
                  <MathRenderer content={`$X^2 - ${matRes.trace}X + ${matRes.det}$`} />
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400"><MathRenderer content="Discriminant $\Delta = \mathrm{Tr}^2 - 4\det$ :" /></span>
                <span className="text-amber-400 font-bold">{matRes.discriminant}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400"><MathRenderer content="Spectre $\mathrm{Sp}(A)$ :" /></span>
                <span className="text-emerald-400 font-bold">
                  <MathRenderer content={`$\\{${matRes.lambda1}, ${matRes.lambda2}\\}$`} />
                </span>
              </div>
            </div>

            <div
              className={`p-3 rounded-lg border text-xs ${
                matRes.isDiag
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              }`}
            >
              <div className="font-semibold mb-1">
                {matRes.isDiag ? '✓ MATRICE DIAGONALISABLE' : '⚠ CAS PARTICULIER'}
              </div>
              <div>{matRes.comment}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveLab;
