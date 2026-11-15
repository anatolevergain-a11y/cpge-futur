import React, { useState, useEffect } from 'react';
import { CoursesView } from './components/CoursesView';
import { ExercisesView } from './components/ExercisesView';
import { InteractiveLab } from './components/InteractiveLab';
import { KholleSimulator } from './components/KholleSimulator';
import { MethodesView } from './components/MethodesView';
import { ConcoursCountdown } from './components/ConcoursCountdown';
import { ConcoursErrorsAndMusts } from './components/ConcoursErrorsAndMusts';
import { COURSES_DATA, EXERCISES_DATA, Filiere, Matiere } from './data/cpgeData';
import {
  BookOpen,
  CheckCircle2,
  Activity,
  Award,
  ArrowRight,
  ArrowLeft,
  Calendar,
  ShieldAlert,
  ChevronRight,
  Calculator,
  Atom,
  FlaskConical,
  Cpu,
  Wrench,
  Sparkles,
  Sun,
  Moon,
  Scale
} from 'lucide-react';

type NavTab =
  | 'home'
  | 'courses'
  | 'exercises'
  | 'lab'
  | 'kholle'
  | 'reflexes'
  | 'erreurs-musts'
  | 'countdown'
  | 'legal';

const SITE_URL = 'https://cpgefutur.com';

const TAB_TO_PATH: Record<NavTab, string> = {
  home: '/',
  courses: '/cours',
  exercises: '/exercices',
  'erreurs-musts': '/erreurs-incontournables',
  lab: '/labo',
  kholle: '/kholle',
  reflexes: '/reflexes',
  countdown: '/calendrier-concours',
  legal: '/mentions-legales',
};

function parseRouteFromLocation(): { tab: NavTab; chapterId?: string } {
  if (typeof window === 'undefined') return { tab: 'home' };
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path.startsWith('/chapitre/')) {
    const id = decodeURIComponent(path.slice('/chapitre/'.length));
    return { tab: 'courses', chapterId: id || undefined };
  }

  const entry = (Object.entries(TAB_TO_PATH) as [NavTab, string][]).find(([, p]) => p === path);
  return { tab: entry ? entry[0] : 'home' };
}

export default function App() {
  const initialRoute = parseRouteFromLocation();
  const [activeTab, setActiveTab] = useState<NavTab>(initialRoute.tab);
  const [selectedCourseChapter, setSelectedCourseChapter] = useState<string | undefined>(initialRoute.chapterId);
  const [selectedExoChapter, setSelectedExoChapter] = useState<string | undefined>(undefined);
  const [selectedFiliereFilter, setSelectedFiliereFilter] = useState<Filiere | 'Toutes'>('Toutes');
  const [selectedMatiereFilter, setSelectedMatiereFilter] = useState<Matiere | 'Toutes'>('Toutes');
  const [selectedAnneeFilter, setSelectedAnneeFilter] = useState<'Toutes' | '1ère année' | '2ème année'>('Toutes');

  // Theme State: Dark by default, persisted in localStorage
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('cpge_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // fallback
    }
    return 'dark';
  });

  useEffect(() => {
    try {
      localStorage.setItem('cpge_theme', theme);
    } catch (e) {
      console.error(e);
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Synchronisation avec les boutons Précédent / Suivant du navigateur
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseRouteFromLocation();
      setActiveTab(parsed.tab);
      setSelectedCourseChapter(parsed.chapterId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Mise à jour dynamique des métadonnées SEO (<title>, description, canonical)
  useEffect(() => {
    let title = 'CPGE Futur | Cours, Exercices et Simulations pour Prépa Scientifique';
    let description =
      'Plateforme d’excellence pour prépas scientifiques (MPSI, PCSI, MP, PC, PSI, MPI, BCPST) : cours officiels démontrés, annales corrigées, khôlles et simulations.';
    let canonicalPath = TAB_TO_PATH[activeTab];

    if (activeTab === 'courses' && selectedCourseChapter) {
      const chap = COURSES_DATA.find((c) => c.id === selectedCourseChapter);
      const chapTitle = (chap as { title?: string; titre?: string; nom?: string } | undefined)?.title
        || (chap as { title?: string; titre?: string; nom?: string } | undefined)?.titre
        || (chap as { title?: string; titre?: string; nom?: string } | undefined)?.nom
        || selectedCourseChapter;
      const matiereLabel = chap ? ` (${chap.matiere})` : '';
      title = `${chapTitle}${matiereLabel} — Cours CPGE | CPGE Futur`;
      description = `Fiche de cours complète et démonstrations sur ${chapTitle}${matiereLabel} pour les classes préparatoires scientifiques.`;
      canonicalPath = `/chapitre/${encodeURIComponent(selectedCourseChapter)}`;
    } else if (activeTab === 'courses') {
      title = 'Cours & Théorèmes CPGE (Sup & Spé) | CPGE Futur';
      description = 'Tous les chapitres du programme officiel CPGE : définitions, théorèmes démontrés et méthodes de calcul en Maths, Physique, Chimie, Informatique et SII.';
    } else if (activeTab === 'exercises') {
      title = 'Annales & Exercices Corrigés CPGE (X-ENS, Mines-Ponts, Centrale) | CPGE Futur';
      description = 'Banque d’exercices et problèmes de concours CPGE corrigés pas à pas avec indices progressifs et rédaction modèle.';
    } else if (activeTab === 'erreurs-musts') {
      title = 'Erreurs Classiques & Questions Incontournables aux Concours | CPGE Futur';
      description = 'Les pièges éliminatoires relevés dans les rapports de jurys CPGE et les questions classiques qui tombent chaque année.';
    } else if (activeTab === 'lab') {
      title = 'Labo Scientifique Interactif CPGE (Fourier, Bode, Optique) | CPGE Futur';
      description = 'Simulations scientifiques interactives pour visualiser les séries de Fourier, diagrammes de Bode, filtres RLC et interférences.';
    } else if (activeTab === 'kholle') {
      title = 'Simulateur de Khôlle CPGE Chronométré | CPGE Futur';
      description = 'Entraînez-vous aux oraux de CPGE en conditions réelles : question de cours, exercice au tableau et relances du khôlleur.';
    } else if (activeTab === 'reflexes') {
      title = 'Fiches Réflexes & Méthodes Concours CPGE | CPGE Futur';
      description = 'Les automatismes et méthodes indispensables pour résoudre rapidement les problèmes d’écrits et d’oraux en prépa.';
    } else if (activeTab === 'countdown') {
      title = 'Calendrier Officiel des Concours CPGE & Compte à Rebours | CPGE Futur';
      description = 'Dates officielles des épreuves écrites des concours X-ENS, Mines-Ponts, Centrale-Supélec, CCINP et Agro-Véto.';
    } else if (activeTab === 'legal') {
      title = 'Mentions Légales & Politique de Confidentialité | CPGE Futur';
      description = 'Mentions légales, informations sur l’éditeur, l’hébergement, la propriété intellectuelle et la gestion des données personnelles de la plateforme CPGE Futur.';
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${canonicalPath}`);
  }, [activeTab, selectedCourseChapter]);

  const navigateToTab = (tab: NavTab, chapterId?: string) => {
    setActiveTab(tab);
    setSelectedCourseChapter(chapterId);
    const nextPath =
      tab === 'courses' && chapterId
        ? `/chapitre/${encodeURIComponent(chapterId)}`
        : TAB_TO_PATH[tab];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navigateToExercisesForChapter = (chapterId: string) => {
    setSelectedExoChapter(chapterId);
    navigateToTab('exercises');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCoursesWithFilter = (
    matiere: Matiere | 'Toutes' = 'Toutes',
    filiere: Filiere | 'Toutes' = selectedFiliereFilter,
    annee: 'Toutes' | '1ère année' | '2ème année' = selectedAnneeFilter
  ) => {
    setSelectedMatiereFilter(matiere);
    setSelectedFiliereFilter(filiere);
    setSelectedAnneeFilter(annee);
    navigateToTab('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openExercisesWithFilter = (
    matiere: Matiere | 'Toutes' = 'Toutes',
    filiere: Filiere | 'Toutes' = selectedFiliereFilter,
    annee: 'Toutes' | '1ère année' | '2ème année' = selectedAnneeFilter
  ) => {
    setSelectedMatiereFilter(matiere);
    setSelectedFiliereFilter(filiere);
    setSelectedAnneeFilter(annee);
    setSelectedExoChapter(undefined);
    navigateToTab('exercises');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Live counters for selected filière & année
  const filteredCoursesCount = COURSES_DATA.filter((c) => {
    const matchFiliere = selectedFiliereFilter === 'Toutes' || c.filieres.includes(selectedFiliereFilter as Filiere);
    const matchAnnee =
      selectedAnneeFilter === 'Toutes' ||
      (selectedAnneeFilter === '1ère année' && (
        c.annee === '1ère année' ||
        c.annee === '1ère & 2ème année' ||
        c.annee === 'Tronc commun & Spécialité' ||
        c.filieres.some((f) => f === 'MPSI' || f === 'PCSI')
      )) ||
      (selectedAnneeFilter === '2ème année' && (
        c.annee === '2ème année' ||
        c.annee === '1ère & 2ème année' ||
        c.annee === 'Tronc commun & Spécialité' ||
        c.filieres.some((f) => f === 'MP' || f === 'PC' || f === 'PSI' || f === 'MPI')
      ));
    return matchFiliere && matchAnnee;
  }).length;

  const filteredExercisesCount = EXERCISES_DATA.filter((e) => {
    const matchFiliere = selectedFiliereFilter === 'Toutes' || e.filieres.includes(selectedFiliereFilter as Filiere);
    const matchAnnee =
      selectedAnneeFilter === 'Toutes' ||
      (selectedAnneeFilter === '1ère année' && (
        e.annee === '1ère année' ||
        e.annee === '1ère & 2ème année' ||
        e.filieres.some((f) => f === 'MPSI' || f === 'PCSI') ||
        e.origin.toLowerCase().includes('sup')
      )) ||
      (selectedAnneeFilter === '2ème année' && (
        e.annee === '2ème année' ||
        e.annee === '1ère & 2ème année' ||
        e.filieres.some((f) => f === 'MP' || f === 'PC' || f === 'PSI' || f === 'MPI') ||
        e.origin.toLowerCase().includes('spé') ||
        e.origin.toLowerCase().includes('mines') ||
        e.origin.toLowerCase().includes('centrale')
      ));
    return matchFiliere && matchAnnee;
  }).length;

  const matieresList: { name: Matiere; icon: React.ReactNode; color: string }[] = [
    { name: 'Mathématiques', icon: <Calculator className="w-4 h-4" />, color: 'text-indigo-600 dark:text-indigo-400' },
    { name: 'Physique', icon: <Atom className="w-4 h-4" />, color: 'text-sky-600 dark:text-sky-400' },
    { name: 'Chimie', icon: <FlaskConical className="w-4 h-4" />, color: 'text-emerald-600 dark:text-emerald-400' },
    { name: 'Informatique', icon: <Cpu className="w-4 h-4" />, color: 'text-amber-600 dark:text-amber-400' },
    { name: 'Sciences de l\'Ingénieur', icon: <Wrench className="w-4 h-4" />, color: 'text-rose-600 dark:text-rose-400' },
  ];

  const filieresList: (Filiere | 'Toutes')[] = ['Toutes', 'MP', 'PC', 'PSI', 'MPI', 'MPSI', 'PCSI', 'BCPST'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* 1. TOP BAR CONTRACT: Exact 3-zone contract */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          {/* Zone 1: Brand title wordmark */}
          <button
            onClick={() => navigateToTab('home')}
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono font-extrabold text-sm shadow-md">
              Ψ
            </div>
            <span>CPGE Futur</span>
          </button>

          {/* Zone 2: Concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <button
              onClick={() => openCoursesWithFilter()}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 dark:hover:text-white ${
                activeTab === 'courses' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
              }`}
            >
              Cours & Théorèmes
            </button>
            <button
              onClick={() => openExercisesWithFilter()}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 dark:hover:text-white ${
                activeTab === 'exercises' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
              }`}
            >
              Exercices Corrigés
            </button>
            <button
              onClick={() => navigateToTab('erreurs-musts')}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 ${
                activeTab === 'erreurs-musts' ? 'text-rose-600 dark:text-rose-400 font-bold' : ''
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
              <span>Erreurs & Incontournables</span>
            </button>
            <button
              onClick={() => navigateToTab('lab')}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 dark:hover:text-white ${
                activeTab === 'lab' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
              }`}
            >
              Labo Scientifique
            </button>
            <button
              onClick={() => navigateToTab('kholle')}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 dark:hover:text-white ${
                activeTab === 'kholle' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
              }`}
            >
              Simulateur de Khôlle
            </button>
            <button
              onClick={() => navigateToTab('reflexes')}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 dark:hover:text-white ${
                activeTab === 'reflexes' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
              }`}
            >
              Fiches Réflexes
            </button>
          </nav>

          {/* Zone 3: Theme Toggle & 1 Primary Action */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
              className="p-2 rounded-lg border transition-colors flex items-center justify-center bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => navigateToTab('countdown')}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Calendrier Concours</span>
              <span className="sm:hidden">Concours</span>
            </button>
          </div>
        </div>

        {/* Mobile quick-nav scroll bar */}
        <div className="md:hidden flex items-center gap-3 px-4 py-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/80 overflow-x-auto text-xs text-slate-600 dark:text-slate-300">
          <button
            onClick={() => navigateToTab('home')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'home' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}`}
          >
            Accueil
          </button>
          <button
            onClick={() => openCoursesWithFilter()}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'courses' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}`}
          >
            Cours
          </button>
          <button
            onClick={() => openExercisesWithFilter()}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'exercises' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}`}
          >
            Exercices
          </button>
          <button
            onClick={() => navigateToTab('erreurs-musts')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'erreurs-musts' ? 'text-rose-600 dark:text-rose-400 font-bold' : ''}`}
          >
            Erreurs & Incontournables
          </button>
          <button
            onClick={() => navigateToTab('lab')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'lab' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}`}
          >
            Labo
          </button>
          <button
            onClick={() => navigateToTab('kholle')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'kholle' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}`}
          >
            Khôlle
          </button>
          <button
            onClick={() => navigateToTab('reflexes')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'reflexes' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}`}
          >
            Réflexes
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* VIEW 1: SIMPLIFIED PAGE DE GARDE */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* HERO SECTION: Streamlined & Impactful */}
            <div className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Programme Officiel CPGE</span>
                <span aria-hidden="true">·</span>
                <span>MPSI · PCSI · MP · PC · PSI · MPI · BCPST</span>
                <span aria-hidden="true">·</span>
                <span>Grandes Écoles d'Ingénieurs & ENS</span>
              </div>

              <div className="max-w-4xl space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight [text-wrap:balance]">
                  L'excellence scientifique pour réussir les concours CPGE.
                </h1>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  La plateforme académique de révision tout-en-un pour les taupins : cours officiels démontrés, banque d'annales corrigées pas à pas (X-ENS, Mines-Ponts, Centrale-Supélec), rapports de jurys et simulateur de khôlle chronométré.
                </p>
              </div>

              {/* FILIERE & ANNEE SELECTOR: Quick Direct Filter Bar */}
              <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 shadow-sm dark:shadow-none">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">Personnalisez selon votre niveau et filière :</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-mono font-semibold">
                    {filteredCoursesCount} chapitres · {filteredExercisesCount} annales adaptées
                  </span>
                </div>

                {/* Niveau / Année */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 overflow-x-auto pb-0.5">
                  <span className="font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap shrink-0">Année :</span>
                  {(['Toutes', '1ère année', '2ème année'] as const).map((an) => (
                    <button
                      key={an}
                      onClick={() => setSelectedAnneeFilter(an)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                        selectedAnneeFilter === an
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      {an === 'Toutes' ? 'Toutes les années (Sup & Spé)' : an === '1ère année' ? '1ère Année (Sup)' : '2ème Année (Spé)'}
                    </button>
                  ))}
                </div>

                {/* Filière */}
                <div className="flex items-center gap-1.5 overflow-x-auto pt-1 border-t border-slate-100 dark:border-slate-800/60">
                  <span className="font-medium text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap shrink-0 mr-1">Filière :</span>
                  {filieresList.map((filiere) => (
                    <button
                      key={filiere}
                      onClick={() => setSelectedFiliereFilter(filiere)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                        selectedFiliereFilter === filiere
                          ? 'bg-slate-200 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
                      }`}
                    >
                      {filiere === 'Toutes' ? 'Toutes les filières' : filiere}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4 CORE PORTALS: Direct Action Grid */}
            <div className="space-y-4">
              <h2 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Accès Direct aux Espaces de Révision
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Portal 1: Cours & Démonstrations */}
                <div
                  onClick={() => openCoursesWithFilter()}
                  className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 rounded-xl space-y-3 cursor-pointer group transition-all shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{filteredCoursesCount} chapitres</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Cours & Démonstrations
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      Programme officiel : définitions, théorèmes fondamentaux démontrés et astuces des écrits.
                    </p>
                  </div>
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    <span>Consulter les cours</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Portal 2: Annales & Exercices Corrigés */}
                <div
                  onClick={() => openExercisesWithFilter()}
                  className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 rounded-xl space-y-3 cursor-pointer group transition-all shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">★ à ★★★ Étoile</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Annales & Exercices Corrigés
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      Problèmes récents des concours avec chrono d'épreuve, indices progressifs et rédaction modèle.
                    </p>
                  </div>
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>S'entraîner aux annales</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Portal 3: Erreurs & Incontournables */}
                <div
                  onClick={() => navigateToTab('erreurs-musts')}
                  className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500/50 rounded-xl space-y-3 cursor-pointer group transition-all shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400">Rapports Jurys</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      Erreurs & Incontournables
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      Les pièges éliminatoires relevés dans les copies et les questions qui tombent systématiquement.
                    </p>
                  </div>
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 font-medium">
                    <span>Éviter les erreurs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Portal 4: Simulateur de Khôlle */}
                <div
                  onClick={() => navigateToTab('kholle')}
                  className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 rounded-xl space-y-3 cursor-pointer group transition-all shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">20 min chrono</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      Simulateur de Khôlle
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      Conditions réelles d'oral : question de cours, exercice de recherche, relances pièges et note.
                    </p>
                  </div>
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-medium">
                    <span>Passer une colle</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* MATIERES FAST NAVIGATION */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Accès par Matière
                </h2>
                <span className="text-xs text-slate-500 dark:text-slate-500">Cliquez sur une matière pour filtrer instantanément</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {matieresList.map((m) => {
                  const count = COURSES_DATA.filter((c) => c.matiere === m.name).length;
                  return (
                    <button
                      key={m.name}
                      onClick={() => openCoursesWithFilter(m.name)}
                      className="p-4 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl flex flex-col justify-between text-left transition-all group shadow-sm dark:shadow-none"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 ${m.color}`}>
                          {m.icon}
                        </div>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{count} chapitres</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {m.name}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">1ère & 2ème année</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* LOWER UTILITIES STRIP: LAB & CALENDAR */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Lab card */}
              <div
                onClick={() => navigateToTab('lab')}
                className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 rounded-xl cursor-pointer group transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      Labo Scientifique Interactif
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      Fourier, filtres RLC de Bode, et fentes d'Young dynamiques.
                    </p>
                  </div>
                </div>
                <div className="pt-3 flex items-center gap-1 text-xs text-sky-600 dark:text-sky-400 font-medium">
                  <span>Lancer les simulations</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Reflexes card */}
              <div
                onClick={() => navigateToTab('reflexes')}
                className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 rounded-xl cursor-pointer group transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Fiches Réflexes Concours
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      Les automatismes indispensables pour aborder sereinement les écrits.
                    </p>
                  </div>
                </div>
                <div className="pt-3 flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                  <span>Voir les réflexes</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Countdown card */}
              <div
                onClick={() => navigateToTab('countdown')}
                className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 rounded-xl cursor-pointer group transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      Calendrier Officiel des Écrits
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      Dates officielles et compte à rebours X-ENS, Mines-Ponts, Centrale, CCINP.
                    </p>
                  </div>
                </div>
                <div className="pt-3 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-medium">
                  <span>Consulter le calendrier</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: COURSES */}
        {activeTab === 'courses' && (
          <CoursesView
            onSelectExerciseChapter={navigateToExercisesForChapter}
            initialMatiere={selectedMatiereFilter}
            initialFiliere={selectedFiliereFilter}
            initialAnnee={selectedAnneeFilter}
          />
        )}

        {/* VIEW 3: EXERCISES */}
        {activeTab === 'exercises' && (
          <ExercisesView
            initialChapitreId={selectedExoChapter}
            initialMatiere={selectedMatiereFilter}
            initialFiliere={selectedFiliereFilter}
            initialAnnee={selectedAnneeFilter}
          />
        )}

        {/* VIEW 4: LAB */}
        {activeTab === 'lab' && <InteractiveLab />}

        {/* VIEW 5: KHOLLE */}
        {activeTab === 'kholle' && <KholleSimulator />}

        {/* VIEW 6: REFLEXES */}
        {activeTab === 'reflexes' && <MethodesView />}

        {/* VIEW 7: ERREURS & QUESTIONS INCONTOURNABLES */}
        {activeTab === 'erreurs-musts' && <ConcoursErrorsAndMusts />}

        {/* VIEW 8: COUNTDOWN */}
        {activeTab === 'countdown' && <ConcoursCountdown />}

        {/* VIEW 9: MENTIONS LÉGALES */}
        {activeTab === 'legal' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-none space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                    <Scale className="w-4 h-4" />
                    <span>INFORMATIONS RÉGLEMENTAIRES & CONFIDENTIALITÉ</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                    Mentions Légales
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
                  </p>
                </div>

                <button
                  onClick={() => navigateToTab('home')}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Retour à l'accueil</span>
                </button>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <section className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    1. Éditeur du site
                  </h2>
                  <p>
                    Le site <strong>CPGE Futur</strong> (accessible à l'adresse{' '}
                    <a
                      href="https://cpgefutur.com"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      https://cpgefutur.com
                    </a>
                    ) est une plateforme éducative gratuite dédiée aux étudiants des classes préparatoires aux grandes écoles scientifiques (MPSI, PCSI, MP, PC, PSI, MPI, BCPST).
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                    <li>
                      <strong>Responsable de la publication :</strong> [À compléter : Votre Nom / Prénom ou Dénomination]
                    </li>
                    <li>
                      <strong>Contact électronique :</strong> [À compléter : contact@cpgefutur.com]
                    </li>
                    <li>
                      <strong>Statut :</strong> Éditeur particulier / Projet pédagogique indépendant à vocation non lucrative
                    </li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    2. Hébergement
                  </h2>
                  <p>
                    Le site est hébergé par la société <strong>Vercel Inc.</strong>, située au 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (Site web :{' '}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      https://vercel.com
                    </a>
                    ).
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    3. Propriété intellectuelle
                  </h2>
                  <p>
                    L'ensemble des ressources pédagogiques, fiches de cours, démonstrations, annales corrigées, fiches réflexes, simulations interactives et code source présents sur <strong>CPGE Futur</strong> sont protégés par le droit de la propriété intellectuelle.
                  </p>
                  <p>
                    La consultation, le téléchargement et l'impression des contenus sont autorisés pour un usage strictement personnel, étudiant et éducatif. Toute reproduction, diffusion ou exploitation commerciale sans accord préalable de l'éditeur est interdite.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    4. Données personnelles, stockage local & Cookies
                  </h2>
                  <p>
                    <strong>CPGE Futur</strong> ne requiert aucune création de compte nominatif et ne collecte aucune donnée personnelle directement sur ses serveurs. Vos préférences d'interface (notamment le choix entre le mode sombre et le mode clair) sont enregistrées uniquement localement sur votre appareil via le stockage interne de votre navigateur (<em>localStorage</em>).
                  </p>
                  <p>
                    Afin de financer la gratuité intégrale de la plateforme et d'en mesurer l'audience, le site utilise des services tiers susceptibles de déposer des cookies :
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                    <li>
                      <strong>Google Analytics (GA4) :</strong> mesure d'audience anonyme permettant d'améliorer l'ergonomie et les contenus pédagogiques.
                    </li>
                    <li>
                      <strong>Google AdSense :</strong> diffusion d'annonces publicitaires non intrusives. Google utilise des cookies pour diffuser des annonces adaptées aux centres d'intérêt des utilisateurs. Vous pouvez désactiver la personnalisation des annonces depuis les{' '}
                      <a
                        href="https://adssettings.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Paramètres des annonces Google
                      </a>
                      .
                    </li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    5. Limitation de responsabilité
                  </h2>
                  <p>
                    Les cours, démonstrations et corrigés d'annales proposés sur <strong>CPGE Futur</strong> sont rédigés en conformité avec les programmes officiels des classes préparatoires scientifiques à des fins d'accompagnement académique. Malgré le soin apporté à leur vérification, l'éditeur ne saurait être tenu responsable d'éventuelles erreurs ou omissions.
                  </p>
                </section>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-10 mt-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-800 dark:text-slate-300">CPGE Futur</span>
            <span aria-hidden="true">·</span>
            <span>Classes Préparatoires aux Grandes Écoles Scientifiques</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
            <span>MPSI</span>
            <span>PCSI</span>
            <span>MP / MP*</span>
            <span>PC / PC*</span>
            <span>PSI / PSI*</span>
            <span>MPI / MPI*</span>
            <span>BCPST</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>Conçu avec rigueur mathématique et physique pour les concours.</span>
            <span aria-hidden="true">·</span>
            <a
              href="/mentions-legales"
              onClick={(e) => {
                e.preventDefault();
                navigateToTab('legal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:underline transition-colors ${
                activeTab === 'legal'
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              Mentions légales
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}