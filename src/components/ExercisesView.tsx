import React, { useState, useEffect } from 'react';
import { EXERCISES_DATA, ExerciseItem, Filiere, Matiere, Difficulte } from '../data/cpgeData';
import MathRenderer from './MathRenderer';
import { ExerciseDiagram } from './ExerciseDiagram';
import { CheckCircle2, Bookmark, Timer, Lightbulb, Play, RotateCcw, Search, Star, Award, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExercisesViewProps {
  initialChapitreId?: string;
  initialMatiere?: Matiere | 'Toutes';
  initialFiliere?: Filiere | 'Toutes';
  initialAnnee?: 'Toutes' | '1ère année' | '2ème année';
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({
  initialChapitreId,
  initialMatiere = 'Toutes',
  initialFiliere = 'Toutes',
  initialAnnee = 'Toutes',
}) => {
  const [selectedMatiere, setSelectedMatiere] = useState<Matiere | 'Toutes'>(initialMatiere);
  const [selectedFiliere, setSelectedFiliere] = useState<Filiere | 'Toutes'>(initialFiliere);
  const [selectedAnnee, setSelectedAnnee] = useState<'Toutes' | '1ère année' | '2ème année'>(initialAnnee);
  const [selectedDifficulte, setSelectedDifficulte] = useState<Difficulte | 'Toutes'>('Toutes');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Storage state
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cpge_mastered_exercises');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cpge_favorite_exercises');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [onlySchema, setOnlySchema] = useState<boolean>(false);

  // Selected exercise for detail modal or active view
  const [activeExercise, setActiveExercise] = useState<ExerciseItem>(() => {
    if (initialChapitreId) {
      const found = EXERCISES_DATA.find((e) => e.chapitreId === initialChapitreId);
      if (found) return found;
    }
    return EXERCISES_DATA[0];
  });

  // State for the active exercise
  const [revealedHints, setRevealedHints] = useState<number>(0);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    if (initialChapitreId) {
      const found = EXERCISES_DATA.find((e) => e.chapitreId === initialChapitreId);
      if (found) {
        setActiveExercise(found);
      }
    }
  }, [initialChapitreId]);

  useEffect(() => {
    if (initialMatiere) setSelectedMatiere(initialMatiere);
  }, [initialMatiere]);

  useEffect(() => {
    if (initialFiliere) setSelectedFiliere(initialFiliere);
  }, [initialFiliere]);

  useEffect(() => {
    if (initialAnnee) setSelectedAnnee(initialAnnee);
  }, [initialAnnee]);

  // Reset exercise state when switching active exercise
  useEffect(() => {
    setRevealedHints(0);
    setShowSolution(false);
    setTimerSeconds(0);
    setTimerRunning(false);
  }, [activeExercise]);

  // Timer logic
  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const isAlready = prev.includes(id);
      const updated = isAlready ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('cpge_mastered_exercises', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      if (!isAlready) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      }
      return updated;
    });
  };

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) => {
      const isAlready = prev.includes(id);
      const updated = isAlready ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('cpge_favorite_exercises', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const filteredExercises = EXERCISES_DATA.filter((exo) => {
    const matchMatiere = selectedMatiere === 'Toutes' || exo.matiere === selectedMatiere;
    const matchFiliere = selectedFiliere === 'Toutes' || exo.filieres.includes(selectedFiliere as Filiere);
    const matchDiff = selectedDifficulte === 'Toutes' || exo.difficulte === selectedDifficulte;
    const matchAnnee =
      selectedAnnee === 'Toutes' ||
      (selectedAnnee === '1ère année' && (
        exo.annee === '1ère année' ||
        exo.annee === '1ère & 2ème année' ||
        exo.filieres.some((f) => f === 'MPSI' || f === 'PCSI') ||
        exo.origin.toLowerCase().includes('sup') ||
        exo.chapitreId.includes('taylor') ||
        exo.chapitreId.includes('polynomes') ||
        exo.chapitreId.includes('optique-geometrique') ||
        exo.chapitreId.includes('meca-point') ||
        exo.chapitreId.includes('electrocinetique')
      )) ||
      (selectedAnnee === '2ème année' && (
        exo.annee === '2ème année' ||
        exo.annee === '1ère & 2ème année' ||
        exo.filieres.some((f) => f === 'MP' || f === 'PC' || f === 'PSI' || f === 'MPI') ||
        exo.origin.toLowerCase().includes('mines') ||
        exo.origin.toLowerCase().includes('centrale') ||
        exo.origin.toLowerCase().includes('ens') ||
        exo.origin.toLowerCase().includes('spé') ||
        exo.chapitreId.includes('reduction') ||
        exo.chapitreId.includes('maxwell') ||
        exo.chapitreId.includes('induction') ||
        exo.chapitreId.includes('thermique')
      ));

    const matchSearch =
      searchQuery.trim() === '' ||
      exo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exo.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exo.enonce.toLowerCase().includes(searchQuery.toLowerCase());

    const matchSchema = !onlySchema || Boolean(exo.schema);

    return matchMatiere && matchFiliere && matchDiff && matchAnnee && matchSearch && matchSchema;
  });

  const renderStars = (diff: Difficulte) => {
    return (
      <div className="flex items-center gap-0.5">
        <Star className={`w-3.5 h-3.5 fill-current ${diff >= 1 ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700'}`} />
        <Star className={`w-3.5 h-3.5 fill-current ${diff >= 2 ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700'}`} />
        <Star className={`w-3.5 h-3.5 fill-current ${diff >= 3 ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700'}`} />
      </div>
    );
  };

  const getDifficultyLabel = (diff: Difficulte) => {
    switch (diff) {
      case 1:
        return 'Niveau 1 · Assimilation';
      case 2:
        return 'Niveau 2 · Classique Concours';
      case 3:
        return 'Niveau 3 · Étoile / ENS-X';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>Banque d'Exercices</span>
            <span aria-hidden="true">·</span>
            <span>Annales Corrigées & Oraux</span>
            <span aria-hidden="true">·</span>
            <span>X, ENS, Mines, Centrale</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Exercices Types & Problèmes Corrigés
          </h2>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher (ex: Lagrange, Poynting)..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 shadow-sm dark:shadow-none"
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="space-y-3">
        {/* Année Switcher (1ère année Sup vs 2ème année Spé) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto shadow-sm dark:shadow-none">
          {(['Toutes', '1ère année', '2ème année'] as const).map((an) => (
            <button
              key={an}
              onClick={() => setSelectedAnnee(an)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedAnnee === an
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
              }`}
            >
              {an === 'Toutes' ? 'Toutes les années (Sup & Spé)' : an === '1ère année' ? '1ère Année (Sup)' : '2ème Année (Spé)'}
            </button>
          ))}
        </div>

        {/* Matières */}
        <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto shadow-sm dark:shadow-none">
          {(['Toutes', 'Mathématiques', 'Physique', 'Chimie', 'Informatique', 'Sciences de l\'Ingénieur'] as (Matiere | 'Toutes')[]).map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMatiere(mat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedMatiere === mat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Difficulté :</span>
            {(['Toutes', 2, 3] as const).map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulte(d)}
                className={`px-2 py-0.5 rounded transition-colors ${
                  selectedDifficulte === d
                    ? 'bg-slate-200 dark:bg-slate-800 text-amber-700 dark:text-amber-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {d === 'Toutes' ? 'Tous niveaux (★★ et ★★★)' : d === 2 ? '★★ Concours' : '★★★ ENS / X'}
              </button>
            ))}

            <button
              onClick={() => setOnlySchema(!onlySchema)}
              className={`ml-2 px-2.5 py-1 rounded-md transition-all text-xs font-semibold flex items-center gap-1.5 ${
                onlySchema
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-500'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-750'
              }`}
            >
              <span>📐 Avec schéma</span>
              {onlySchema && <span className="text-[10px] bg-white/25 px-1 py-0.2 rounded font-mono">Filtre actif</span>}
            </button>
          </div>

          <div className="text-xs font-mono text-slate-500">
            {masteredIds.length} / {EXERCISES_DATA.length} exercices maîtrisés ({Math.round((masteredIds.length / EXERCISES_DATA.length) * 100)}%)
          </div>
        </div>
      </div>

      {/* Split Layout: Exercise Cards + Selected Exercise Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List */}
        <div className="lg:col-span-4 space-y-3 max-h-[850px] overflow-y-auto pr-1">
          {filteredExercises.length === 0 ? (
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs text-slate-500 shadow-sm dark:shadow-none">
              Aucun exercice ne correspond aux critères.
            </div>
          ) : (
            filteredExercises.map((exo) => {
              const isSelected = activeExercise.id === exo.id;
              const isMastered = masteredIds.includes(exo.id);
              const isFav = favoriteIds.includes(exo.id);
              const anneeLabel = exo.annee || (exo.filieres.some((f) => f === 'MPSI' || f === 'PCSI') ? '1ère année (Sup)' : '2ème année (Spé)');

              return (
                <div
                  key={exo.id}
                  onClick={() => setActiveExercise(exo)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all shadow-sm dark:shadow-none ${
                    isSelected
                      ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-400 dark:border-indigo-500/40 text-slate-900 dark:text-white ring-1 ring-indigo-400/30'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    <span className="font-medium text-indigo-600 dark:text-indigo-400">{exo.origin}</span>
                    <div className="flex items-center gap-1.5">
                      {isMastered && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                      {isFav && <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-current" />}
                      {renderStars(exo.difficulte)}
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">{exo.title}</h4>

                  <div className="flex items-center flex-wrap gap-2 text-[11px] text-slate-500 dark:text-slate-500">
                    <span className="font-mono text-indigo-600 dark:text-indigo-400">{anneeLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate max-w-[130px]">{exo.chapitreTitre}</span>
                    {exo.schema && (
                      <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        📐 Schéma
                      </span>
                    )}
                    <span aria-hidden="true">·</span>
                    <span>~{exo.dureeEstimeeMin} min</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Active Exercise Workbench */}
        {activeExercise && (
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-6 shadow-sm dark:shadow-none">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                  <span>{activeExercise.matiere}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeExercise.origin}</span>
                  <span aria-hidden="true">·</span>
                  <span>{getDifficultyLabel(activeExercise.difficulte)}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {activeExercise.title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => toggleFavorite(activeExercise.id)}
                  className={`p-2 rounded-lg border transition-colors ${
                    favoriteIds.includes(activeExercise.id)
                      ? 'bg-amber-50 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-300 dark:border-amber-500/40'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                  title="Ajouter aux favoris"
                >
                  <Bookmark className={`w-4 h-4 ${favoriteIds.includes(activeExercise.id) ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={() => toggleMastered(activeExercise.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border flex items-center gap-1.5 transition-colors ${
                    masteredIds.includes(activeExercise.id)
                      ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/40'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{masteredIds.includes(activeExercise.id) ? 'Maîtrisé' : 'Marquer comme réussi'}</span>
                </button>
              </div>
            </div>

            {/* Practice Timer */}
            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Timer className={`w-4 h-4 ${timerRunning ? 'text-indigo-600 dark:text-indigo-400 animate-spin' : 'text-slate-400 dark:text-slate-500'}`} />
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-500">Chronomètre d'entraînement</div>
                  <div className="text-sm font-mono font-bold text-slate-900 dark:text-white">{formatTimer(timerSeconds)}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded border border-slate-200 dark:border-slate-700 flex items-center gap-1 transition-colors"
                >
                  <Play className="w-3 h-3" />
                  {timerRunning ? 'Pause' : 'Démarrer chrono'}
                </button>
                <button
                  onClick={() => {
                    setTimerRunning(false);
                    setTimerSeconds(0);
                  }}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  title="Réinitialiser"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Énoncé */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Énoncé du Sujet
              </h4>
              <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                <MathRenderer content={activeExercise.enonce} />
              </div>

              {/* Schéma Technique d'Épreuve (Physique, Chimie, SI) */}
              {activeExercise.schema && (
                <div className="pt-1">
                  <ExerciseDiagram schema={activeExercise.schema} />
                </div>
              )}
            </div>

            {/* Indices Progressifs */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  <span>Indices de Recherche ({revealedHints} / {activeExercise.hints.length} débloqués)</span>
                </h4>

                {revealedHints < activeExercise.hints.length && (
                  <button
                    onClick={() => setRevealedHints((prev) => prev + 1)}
                    className="px-3 py-1 text-xs font-medium bg-amber-50 dark:bg-amber-500/15 hover:bg-amber-100 dark:hover:bg-amber-500/25 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 rounded-lg transition-colors"
                  >
                    Débloquer l'indice {revealedHints + 1}
                  </button>
                )}
              </div>

              {revealedHints > 0 && (
                <div className="space-y-2">
                  {activeExercise.hints.slice(0, revealedHints).map((hint, idx) => (
                    <div key={idx} className="p-3 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-lg text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed">
                      <strong className="text-amber-700 dark:text-amber-400">Indice {idx + 1} : </strong>
                      <MathRenderer content={hint} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solution toggle */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between transition-colors shadow-sm dark:shadow-none"
              >
                <span>{showSolution ? 'Masquer le corrigé détaillé' : 'Consulter la correction rédigée type concours'}</span>
                {showSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showSolution && (
                <div className="mt-4 p-5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-5">
                  {/* Etapes de calcul */}
                  <div className="space-y-4">
                    {activeExercise.correction.etapes.map((step, idx) => (
                      <div key={idx} className="space-y-2">
                        <h5 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase font-mono">
                          {step.titre}
                        </h5>
                        <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          <MathRenderer content={step.explication} />
                        </div>
                        {step.calculs && (
                          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white overflow-x-auto shadow-sm dark:shadow-none">
                            <MathRenderer content={`$$${step.calculs}$$`} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Conclusion */}
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-lg text-xs text-emerald-800 dark:text-emerald-300">
                    <strong>Conclusion : </strong>
                    <MathRenderer content={activeExercise.correction.conclusion} />
                  </div>

                  {/* Réflexe du correcteur */}
                  <div className="p-3.5 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 rounded-lg text-xs text-indigo-900 dark:text-indigo-200 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-indigo-700 dark:text-indigo-300">Le Réflexe du Correcteur :</strong>{' '}
                      <MathRenderer content={activeExercise.correction.reflexeDuCorrecteur} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExercisesView;
