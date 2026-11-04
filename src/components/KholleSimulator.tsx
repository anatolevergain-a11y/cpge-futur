import React, { useState, useEffect } from 'react';
import { KHOLLE_SUBJECTS, KholleSubject, Filiere, Matiere } from '../data/cpgeData';
import { getKholleCorrection } from '../data/khollesCorrections';
import MathRenderer from './MathRenderer';
import {
  Timer,
  Award,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  HelpCircle,
  PenTool,
  Lightbulb,
  AlertTriangle,
  MessageSquare,
  BookOpen,
  FileCheck2,
  GraduationCap,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const KholleSimulator: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<KholleSubject>(KHOLLE_SUBJECTS[0]);
  const [phase, setPhase] = useState<'intro' | 'prep' | 'passage' | 'debrief'>('intro');
  
  // Filter state for subjects
  const [filterMatiere, setFilterMatiere] = useState<Matiere | 'Toutes'>('Toutes');
  const [filterFiliere, setFilterFiliere] = useState<Filiere | 'Toutes'>('Toutes');

  // Timer state
  const [prepSeconds, setPrepSeconds] = useState<number>(selectedSubject.dureePrepMin * 60);
  const [passageSeconds, setPassageSeconds] = useState<number>(selectedSubject.dureePassageMin * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // Student blackboard notes during prep
  const [boardNotes, setBoardNotes] = useState<string>('');

  // Passage state
  const [coursStepChecked, setCoursStepChecked] = useState<boolean[]>(
    new Array(selectedSubject.questionDeCours.pointsCles.length).fill(false)
  );
  const [usedHints, setUsedHints] = useState<boolean[]>(
    new Array(selectedSubject.exerciceRecherche.indicationsKholleur.length).fill(false)
  );
  const [revealedTraps, setRevealedTraps] = useState<boolean[]>(
    new Array(selectedSubject.questionsPiegesKholleur?.length || 0).fill(false)
  );
  const [selfRating, setSelfRating] = useState({
    rigueur: 4,
    aisance: 4,
    initiative: 3,
  });

  // Correction state at the end of khôlle
  const [correctionTab, setCorrectionTab] = useState<'cours' | 'exo' | 'conseils'>('cours');
  const [showCorrection, setShowCorrection] = useState<boolean>(true);

  // Reset when changing subject
  useEffect(() => {
    setPrepSeconds(selectedSubject.dureePrepMin * 60);
    setPassageSeconds(selectedSubject.dureePassageMin * 60);
    setBoardNotes('');
    setCoursStepChecked(new Array(selectedSubject.questionDeCours.pointsCles.length).fill(false));
    setUsedHints(new Array(selectedSubject.exerciceRecherche.indicationsKholleur.length).fill(false));
    setRevealedTraps(new Array(selectedSubject.questionsPiegesKholleur?.length || 0).fill(false));
  }, [selectedSubject]);

  // Timer tick
  useEffect(() => {
    if (!timerRunning) return;

    const interval = setInterval(() => {
      if (phase === 'prep') {
        setPrepSeconds((prev) => {
          if (prev <= 1) {
            setPhase('passage');
            setTimerRunning(true);
            return 0;
          }
          return prev - 1;
        });
      } else if (phase === 'passage') {
        setPassageSeconds((prev) => {
          if (prev <= 1) {
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timerRunning, phase]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleStartPrep = () => {
    setPhase('prep');
    setPrepSeconds(selectedSubject.dureePrepMin * 60);
    setTimerRunning(true);
  };

  const handleGoToPassage = () => {
    setPhase('passage');
    setPassageSeconds(selectedSubject.dureePassageMin * 60);
    setTimerRunning(true);
  };

  const handleFinishKholle = () => {
    setTimerRunning(false);
    setPhase('debrief');
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const insertSymbol = (sym: string) => {
    setBoardNotes((prev) => prev + sym);
  };

  // Filtered subjects
  const filteredSubjects = KHOLLE_SUBJECTS.filter((s) => {
    const matchMatiere = filterMatiere === 'Toutes' || s.matiere === filterMatiere;
    const matchFiliere = filterFiliere === 'Toutes' || s.filiere === filterFiliere;
    return matchMatiere && matchFiliere;
  });

  // Score computation
  const coursScore = (coursStepChecked.filter(Boolean).length / Math.max(1, coursStepChecked.length)) * selectedSubject.questionDeCours.baremeCours;
  const penalties = usedHints.filter(Boolean).length * 1.5;
  const exoScore = Math.max(2, (selfRating.initiative / 5) * selectedSubject.exerciceRecherche.baremeExo - penalties);
  const totalScore = Math.min(20, Math.round((coursScore + exoScore) * 10) / 10);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>Interrogation Orale</span>
            <span aria-hidden="true">·</span>
            <span>Simulateur Khôlle CPGE</span>
            <span aria-hidden="true">·</span>
            <span>Conditions Concours ENS / X / Mines / Centrale</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Simulateur de Khôlle & Oraux Concours
          </h2>
        </div>

        {/* Phase Badge & Timer */}
        {(phase === 'prep' || phase === 'passage') && (
          <div className="flex items-center gap-3 p-2 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm dark:shadow-none">
            <Timer className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                {phase === 'prep' ? 'Temps de Préparation' : 'Passage au Tableau'}
              </div>
              <div className="text-xl font-mono font-bold text-slate-900 dark:text-white">
                {phase === 'prep' ? formatTime(prepSeconds) : formatTime(passageSeconds)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Intro Phase: Choose subject & instructions */}
      {phase === 'intro' && (
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 shadow-sm dark:shadow-none">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Protocole de l'épreuve orale (20 minutes effectives)
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                  En classe préparatoire, la khôlle simule fidèlement les oraux d'admission de l'École Polytechnique, de l'ENS et des concours Mines-Ponts ou Centrale. Vous disposez de <strong>10 minutes de préparation</strong> pour structurer votre démonstration de cours au brouillon, puis de <strong>20 minutes de passage</strong> où vous exposez votre question de cours et attaquez l'exercice de recherche avec les indications et relances du khôlleur.
                </p>
              </div>
            </div>

            {/* Filter selectors */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Matière :</span>
                {(['Toutes', 'Mathématiques', 'Physique', 'Chimie', 'Informatique', 'Sciences de l\'Ingénieur'] as const).map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setFilterMatiere(mat)}
                    className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 ${
                      filterMatiere === mat
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Filière :</span>
                {(['Toutes', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'] as const).map((fil) => (
                  <button
                    key={fil}
                    onClick={() => setFilterFiliere(fil)}
                    className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap shrink-0 ${
                      filterFiliere === fil
                        ? 'bg-slate-200 dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {fil}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Subjects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {filteredSubjects.map((subj) => (
                <div
                  key={subj.id}
                  onClick={() => setSelectedSubject(subj)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all shadow-sm dark:shadow-none ${
                    selectedSubject.id === subj.id
                      ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-400 dark:border-indigo-500/50 text-slate-900 dark:text-white'
                      : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">{subj.matiere} ({subj.filiere})</span>
                    <span>Prep: {subj.dureePrepMin} min · Oral: {subj.dureePassageMin} min</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{subj.titre}</h4>
                  <div className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    <MathRenderer content={subj.questionDeCours.enonce} />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleStartPrep}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Tirer le sujet & Lancer les 10 min de préparation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Prep Phase: Blackboard notes & Subject review */}
      {phase === 'prep' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: The Subject */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-4 shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase text-indigo-600 dark:text-indigo-400 font-semibold">
                Sujet de Khôlle Officiel
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {selectedSubject.matiere} · Filière {selectedSubject.filiere}
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  1. Question de Cours ({selectedSubject.questionDeCours.baremeCours} pts) :
                </div>
                <div className="text-xs text-slate-800 dark:text-slate-200">
                  <MathRenderer content={selectedSubject.questionDeCours.enonce} />
                </div>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  2. Exercice de Recherche ({selectedSubject.exerciceRecherche.baremeExo} pts) :
                </div>
                <div className="text-xs text-slate-800 dark:text-slate-200">
                  <MathRenderer content={selectedSubject.exerciceRecherche.enonce} />
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950/60 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <div className="font-semibold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                Conseils du Major pour la préparation :
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                <li>Écrivez les hypothèses rigoureusement en haut à gauche du tableau.</li>
                <li>N'écrivez pas les calculs intermédiaires triviaux : gardez de l'espace pour la conclusion encadrée.</li>
                <li>Réfléchissez à l'énoncé de l'exercice avant la fin des 10 minutes.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                onClick={handleGoToPassage}
                className="flex-1 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Passer au tableau (Interrogation)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleFinishKholle}
                className="px-4 py-2.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                title="Consulter directement la correction complète et le rapport officiel de khôlle"
              >
                <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Voir le corrigé</span>
              </button>
            </div>
          </div>

          {/* Right: Virtual Blackboard / Draft */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm text-slate-100">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <PenTool className="w-4 h-4" />
                  <span>Tableau Noir Virtuel / Brouillon de Préparation</span>
                </div>
                <span className="text-[11px] text-slate-500">Sauvegarde locale active</span>
              </div>

              {/* Quick math symbol insert buttons */}
              <div className="flex flex-wrap gap-1 mb-3">
                {['\\implies', '\\forall', '\\exists', '\\in', '\\sum', '\\int', '\\ker', '\\dim', '\\perp', '\\mathbb{R}'].map((sym) => (
                  <button
                    key={sym}
                    onClick={() => insertSymbol(` ${sym} `)}
                    className="px-2 py-0.5 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 transition-colors"
                  >
                    {sym}
                  </button>
                ))}
              </div>

              <textarea
                value={boardNotes}
                onChange={(e) => setBoardNotes(e.target.value)}
                placeholder="Rédigez votre plan de démonstration, écrivez vos formules clés et théorèmes au brouillon..."
                className="w-full h-72 p-3 text-xs font-mono bg-slate-950 border border-slate-800 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <div className="text-[11px] text-slate-400">
              Astuce : Vos notes de tableau resteront consultables pendant l'interrogation orale.
            </div>
          </div>
        </div>
      )}

      {/* Passage Phase: Interactive examination */}
      {phase === 'passage' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Interactive Checklist & Questions */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-6 shadow-sm dark:shadow-none">
            <div>
              <div className="text-xs font-mono uppercase text-indigo-600 dark:text-indigo-400 mb-1">
                Étape 1 : Présentation de la Question de Cours
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Validation des étapes par le Khôlleur
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Cochez au fur et à mesure les arguments que vous développez avec clarté et rigueur au tableau :
              </p>

              <div className="space-y-2">
                {selectedSubject.questionDeCours.pointsCles.map((point, idx) => (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      coursStepChecked[idx]
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-300 dark:border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
                        : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={coursStepChecked[idx]}
                      onChange={() => {
                        const updated = [...coursStepChecked];
                        updated[idx] = !updated[idx];
                        setCoursStepChecked(updated);
                      }}
                      className="mt-0.5 accent-emerald-500 rounded"
                    />
                    <div className="text-xs flex-1">
                      <MathRenderer content={point} />
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Questions Pièges Inopinées du Khôlleur */}
            {selectedSubject.questionsPiegesKholleur && selectedSubject.questionsPiegesKholleur.length > 0 && (
              <div className="border-t border-slate-200 dark:border-slate-800 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-rose-600 dark:text-rose-400 font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  <span>Interpellation Inopinée du Khôlleur</span>
                </div>

                {selectedSubject.questionsPiegesKholleur.map((piege, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3">
                    <div className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                      <MathRenderer content={piege.question} />
                    </div>

                    {!revealedTraps[idx] ? (
                      <button
                        onClick={() => {
                          const updated = [...revealedTraps];
                          updated[idx] = true;
                          setRevealedTraps(updated);
                        }}
                        className="px-3 py-1.5 text-xs bg-rose-50 dark:bg-rose-500/15 hover:bg-rose-100 dark:hover:bg-rose-500/25 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30 rounded-lg flex items-center gap-1.5 transition-colors"
                      >
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Répondre à l'interpellation du khôlleur (Voir la réponse modèle)</span>
                      </button>
                    ) : (
                      <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80 text-xs">
                        <div className="text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 p-2.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                          <strong>Réponse attendue : </strong>
                          <MathRenderer content={piege.reponseAttendue} />
                        </div>
                        <div className="text-rose-800 dark:text-rose-300 bg-rose-50 dark:bg-rose-500/10 p-2.5 rounded border border-rose-200 dark:border-rose-500/20">
                          <strong>Piège classique à éviter : </strong>
                          <MathRenderer content={piege.piegeAEviter} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Exercise with examiner hints */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-5 space-y-4">
              <div className="text-xs font-mono uppercase text-amber-600 dark:text-amber-400 mb-1">
                Étape 2 : Exercice de Recherche & Réactivité
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200">
                <MathRenderer content={selectedSubject.exerciceRecherche.enonce} />
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span>Demander une indication au Khôlleur (Pénalité légère mais réaliste) :</span>
                </div>

                {selectedSubject.exerciceRecherche.indicationsKholleur.map((ind, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{ind.condition}</span>
                      {!usedHints[idx] ? (
                        <button
                          onClick={() => {
                            const updated = [...usedHints];
                            updated[idx] = true;
                            setUsedHints(updated);
                          }}
                          className="px-2.5 py-1 text-[11px] bg-amber-50 dark:bg-amber-500/20 hover:bg-amber-100 dark:hover:bg-amber-500/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/40 rounded transition-colors"
                        >
                          Demander l'indication (-1.5 pt)
                        </button>
                      ) : (
                        <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400">Indication accordée</span>
                      )}
                    </div>
                    {usedHints[idx] && (
                      <div className="text-xs text-amber-900 dark:text-amber-200/90 pt-1 border-t border-slate-200 dark:border-slate-800/80">
                        <MathRenderer content={ind.aide} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleFinishKholle}
              className="w-full py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Terminer la khôlle & Obtenir le bulletin d'évaluation</span>
            </button>
          </div>

          {/* Right: Board notes reminder & Self assessment during oral */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm dark:shadow-none">
            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                Rappel de vos notes de préparation :
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 h-44 overflow-y-auto whitespace-pre-wrap">
                {boardNotes || 'Aucune note prise pendant les 10 minutes de préparation.'}
              </div>
            </div>

            {/* Self evaluation sliders */}
            <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400">
                Critères de Prestation Orale
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Rigueur des quantificateurs :</span>
                  <span className="font-mono text-slate-900 dark:text-white">{selfRating.rigueur}/5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={selfRating.rigueur}
                  onChange={(e) => setSelfRating({ ...selfRating, rigueur: Number(e.target.value) })}
                  className="w-full accent-indigo-500 bg-slate-200 dark:bg-slate-800 rounded h-1.5"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Aisance et clarté au tableau :</span>
                  <span className="font-mono text-slate-900 dark:text-white">{selfRating.aisance}/5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={selfRating.aisance}
                  onChange={(e) => setSelfRating({ ...selfRating, aisance: Number(e.target.value) })}
                  className="w-full accent-indigo-500 bg-slate-200 dark:bg-slate-800 rounded h-1.5"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Prise d'initiative sur l'exercice :</span>
                  <span className="font-mono text-slate-900 dark:text-white">{selfRating.initiative}/5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={selfRating.initiative}
                  onChange={(e) => setSelfRating({ ...selfRating, initiative: Number(e.target.value) })}
                  className="w-full accent-indigo-500 bg-slate-200 dark:bg-slate-800 rounded h-1.5"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Debrief Phase: Grade card & Examiner report */}
      {phase === 'debrief' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-6 shadow-sm dark:shadow-none">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                <span>Rapport Officiel de Khôlle</span>
                <span aria-hidden="true">·</span>
                <span>Filière {selectedSubject.filiere}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedSubject.titre}</h3>
            </div>

            {/* Final Grade Badge */}
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-xl shadow-sm dark:shadow-none">
              <Award className="w-8 h-8 text-amber-500" />
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">Note de Khôlle</div>
                <div className="text-2xl font-mono font-bold text-slate-900 dark:text-white">
                  <span className={totalScore >= 14 ? 'text-emerald-600 dark:text-emerald-400' : totalScore >= 10 ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'}>
                    {totalScore}
                  </span>
                  <span className="text-sm text-slate-400"> / 20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown & Feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400">
                Détail du Barème Concours
              </h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                  <span className="text-slate-600 dark:text-slate-400">Question de cours :</span>
                  <span className="text-slate-900 dark:text-white font-bold">{coursScore.toFixed(1)} / {selectedSubject.questionDeCours.baremeCours} pts</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                  <span className="text-slate-600 dark:text-slate-400">Exercice de recherche :</span>
                  <span className="text-slate-900 dark:text-white font-bold">{exoScore.toFixed(1)} / {selectedSubject.exerciceRecherche.baremeExo} pts</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Pénalité indices :</span>
                  <span className="text-rose-600 dark:text-rose-400">-{penalties.toFixed(1)} pts</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400">
                Appréciation du Khôlleur
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                {totalScore >= 15
                  ? "« Excellente maîtrise du cours et démonstration limpide. Bonne réactivité sur l'exercice avec un raisonnement structuré. Prestation digne de l'admissibilité ENS / Polytechnique. Bravo ! »"
                  : totalScore >= 11
                  ? "« Cours convenablement restitué. Quelques hésitations dans l'argumentation qui ont nécessité des indications, mais le candidat sait rebondir. Veillez à soigner la rigueur des quantificateurs. »"
                  : "« Des lacunes sur les énoncés exacts du cours. En khôlle, le cours doit être su sans la moindre hésitation pour pouvoir consacrer le temps à l'exercice. À reprendre attentivement. »"}
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CORRECTION OFFICIELLE ET DÉTAILLÉE DE LA KHÔLLE */}
          {/* ========================================================= */}
          {(() => {
            const correction = getKholleCorrection(selectedSubject);
            return (
              <div className="border border-indigo-200 dark:border-indigo-900/60 rounded-xl bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-950 p-6 space-y-6 shadow-sm">
                {/* Header with Title and Toggle */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-indigo-600 dark:text-indigo-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Corrigé Officiel & Rédaction Modèle d'Oral</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        Démonstration & Résolution Détaillée de la Khôlle
                      </h4>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto text-xs">
                    <button
                      onClick={() => setCorrectionTab('cours')}
                      className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
                        correctionTab === 'cours'
                          ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Question de Cours</span>
                    </button>
                    <button
                      onClick={() => setCorrectionTab('exo')}
                      className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
                        correctionTab === 'exo'
                          ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Exercice de Recherche</span>
                    </button>
                    <button
                      onClick={() => setCorrectionTab('conseils')}
                      className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
                        correctionTab === 'conseils'
                          ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Conseils & Pièges</span>
                    </button>
                  </div>
                </div>

                {/* Tab 1: Question de Cours */}
                {correctionTab === 'cours' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                      <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                        Énoncé exact de la Question de Cours ({selectedSubject.questionDeCours.baremeCours} pts)
                      </div>
                      <div className="text-xs text-slate-900 dark:text-slate-200 font-medium">
                        <MathRenderer content={selectedSubject.questionDeCours.enonce} />
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Rédaction Modèle Attendue au Tableau</span>
                      </div>
                      <div className="prose prose-sm dark:prose-invert max-w-none text-xs text-slate-800 dark:text-slate-300 leading-relaxed">
                        <MathRenderer content={correction.questionDeCours.redactionComplete} />
                      </div>
                    </div>

                    {/* Points de Vigilance */}
                    {correction.questionDeCours.pointsVigilance && correction.questionDeCours.pointsVigilance.length > 0 && (
                      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/50 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          <span>Points de Vigilance & Exigences du Jury</span>
                        </div>
                        <ul className="space-y-1.5 pl-5 list-disc text-xs text-amber-900 dark:text-amber-200/90">
                          {correction.questionDeCours.pointsVigilance.map((vigilance, i) => (
                            <li key={i}>
                              <MathRenderer content={vigilance} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 2: Exercice de Recherche */}
                {correctionTab === 'exo' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Énoncé de l'Exercice de Recherche ({selectedSubject.exerciceRecherche.baremeExo} pts)
                      </div>
                      <div className="text-xs text-slate-900 dark:text-slate-200 font-medium">
                        <MathRenderer content={selectedSubject.exerciceRecherche.enonce} />
                      </div>
                    </div>

                    {/* Démarche heuristique */}
                    <div className="p-4 bg-cyan-50/70 dark:bg-cyan-950/30 rounded-xl border border-cyan-100 dark:border-cyan-900/50 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 dark:text-cyan-300">
                        <Lightbulb className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span>Démarche Initiale & Analyse au Brouillon</span>
                      </div>
                      <div className="text-xs text-cyan-950 dark:text-cyan-200/90 whitespace-pre-wrap leading-relaxed">
                        <MathRenderer content={correction.exerciceRecherche.demarcheInitiale} />
                      </div>
                    </div>

                    {/* Solution détaillée */}
                    <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Solution Détaillée & Démonstration Complète</span>
                      </div>
                      <div className="prose prose-sm dark:prose-invert max-w-none text-xs text-slate-800 dark:text-slate-300 leading-relaxed">
                        <MathRenderer content={correction.exerciceRecherche.solutionDetaillee} />
                      </div>
                      {correction.exerciceRecherche.conclusion && (
                        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                          <span className="font-bold">Bilan & Conclusion : </span>
                          <MathRenderer content={correction.exerciceRecherche.conclusion} />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Tab 3: Conseils du Khôlleur & Pièges */}
                {correctionTab === 'conseils' && (
                  <div className="space-y-4">
                    {correction.conseilsKholleur && (
                      <div className="p-5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-900/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 dark:text-indigo-200">
                          <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          <span>Recommandations d'Oral par les Khôlleurs de CPGE</span>
                        </div>
                        <p className="text-xs text-indigo-950 dark:text-indigo-200/90 leading-relaxed">
                          {correction.conseilsKholleur}
                        </p>
                      </div>
                    )}

                    {selectedSubject.questionsPiegesKholleur && selectedSubject.questionsPiegesKholleur.length > 0 && (
                      <div className="space-y-3">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-500" />
                          <span>Questions Pièges Fréquemment Posées au Tableau</span>
                        </div>
                        <div className="space-y-3">
                          {selectedSubject.questionsPiegesKholleur.map((piege, idx) => (
                            <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                              <div className="text-xs font-bold text-slate-900 dark:text-white">
                                {piege.question}
                              </div>
                              <div className="text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                                <span className="font-bold">Réponse attendue : </span>
                                <MathRenderer content={piege.reponseAttendue} />
                              </div>
                              <div className="text-xs text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 p-2.5 rounded-lg border border-rose-100 dark:border-rose-900/40">
                                <span className="font-bold">Piège éliminatoire à éviter : </span>
                                <MathRenderer content={piege.piegeAEviter} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })()}

          <div className="pt-2 flex justify-between items-center gap-3">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Khôlle terminée · Barème officiel CPGE appliqué
            </div>
            <button
              onClick={() => {
                setPhase('intro');
                setPrepSeconds(selectedSubject.dureePrepMin * 60);
                setPassageSeconds(selectedSubject.dureePassageMin * 60);
              }}
              className="px-5 py-2 text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2 transition-colors shadow-sm dark:shadow-none"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Tirer une nouvelle khôlle</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KholleSimulator;
