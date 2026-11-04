import React, { useState, useEffect } from 'react';
import { COURSES_DATA, CourseChapter, Filiere, Matiere } from '../data/cpgeData';
import MathRenderer from './MathRenderer';
import { BookOpen, ChevronRight, ChevronDown, Sparkles, AlertTriangle, Printer, Search, ArrowRight } from 'lucide-react';

interface CoursesViewProps {
  onSelectExerciseChapter?: (chapitreId: string) => void;
  initialMatiere?: Matiere | 'Toutes';
  initialFiliere?: Filiere | 'Toutes';
  initialAnnee?: 'Toutes' | '1ère année' | '2ème année';
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  onSelectExerciseChapter,
  initialMatiere = 'Toutes',
  initialFiliere = 'Toutes',
  initialAnnee = 'Toutes',
}) => {
  const [selectedMatiere, setSelectedMatiere] = useState<Matiere | 'Toutes'>(initialMatiere);
  const [selectedFiliere, setSelectedFiliere] = useState<Filiere | 'Toutes'>(initialFiliere);
  const [selectedAnnee, setSelectedAnnee] = useState<'Toutes' | '1ère année' | '2ème année'>(initialAnnee);

  useEffect(() => {
    if (initialMatiere) setSelectedMatiere(initialMatiere);
  }, [initialMatiere]);

  useEffect(() => {
    if (initialFiliere) setSelectedFiliere(initialFiliere);
  }, [initialFiliere]);

  useEffect(() => {
    if (initialAnnee) setSelectedAnnee(initialAnnee);
  }, [initialAnnee]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<CourseChapter>(COURSES_DATA[0]);
  const [openDemoIndex, setOpenDemoIndex] = useState<number | null>(0);

  const matieres: (Matiere | 'Toutes')[] = ['Toutes', 'Mathématiques', 'Physique', 'Chimie', 'Informatique', 'Sciences de l\'Ingénieur'];
  const filieres: (Filiere | 'Toutes')[] = ['Toutes', 'MP', 'PC', 'PSI', 'MPI', 'MPSI', 'PCSI', 'BCPST'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchMatiere = selectedMatiere === 'Toutes' || course.matiere === selectedMatiere;
    const matchFiliere = selectedFiliere === 'Toutes' || course.filieres.includes(selectedFiliere as Filiere);
    const matchAnnee =
      selectedAnnee === 'Toutes' ||
      (selectedAnnee === '1ère année' && (
        course.annee === '1ère année' ||
        course.annee === '1ère & 2ème année' ||
        course.annee === 'Tronc commun & Spécialité' ||
        course.filieres.some((f) => f === 'MPSI' || f === 'PCSI')
      )) ||
      (selectedAnnee === '2ème année' && (
        course.annee === '2ème année' ||
        course.annee === '1ère & 2ème année' ||
        course.annee === 'Tronc commun & Spécialité' ||
        course.filieres.some((f) => f === 'MP' || f === 'PC' || f === 'PSI' || f === 'MPI')
      ));

    const matchSearch =
      searchQuery.trim() === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.keyTheorems.some((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchMatiere && matchFiliere && matchAnnee && matchSearch;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>Fiches de Cours</span>
            <span aria-hidden="true">·</span>
            <span>Programme Officiel CPGE</span>
            <span aria-hidden="true">·</span>
            <span>Démonstrations & Réflexes</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Cours & Théorèmes Fondamentaux
          </h2>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un théorème, lemme..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 shadow-sm dark:shadow-none"
          />
        </div>
      </div>

      {/* Filter Tabs */}
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
          {matieres.map((mat) => (
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

        {/* Filières */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 overflow-x-auto pb-1">
          <span className="font-medium text-slate-500 dark:text-slate-500 whitespace-nowrap shrink-0">Filière :</span>
          {filieres.map((fil) => (
            <button
              key={fil}
              onClick={() => setSelectedFiliere(fil)}
              className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap shrink-0 ${
                selectedFiliere === fil
                  ? 'bg-slate-200 dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40'
              }`}
            >
              {fil}
            </button>
          ))}
        </div>
      </div>

      {/* Layout Split: Sidebar Chapter list + Active Course Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Course Navigation List */}
        <div className="lg:col-span-4 space-y-2 max-h-[800px] overflow-y-auto pr-1">
          {filteredCourses.length === 0 ? (
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs text-slate-500 shadow-sm dark:shadow-none">
              Aucun cours ne correspond à ces filtres.
            </div>
          ) : (
            filteredCourses.map((c) => {
              const isSelected = selectedCourse?.id === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => {
                    setSelectedCourse(c);
                    setOpenDemoIndex(0);
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all shadow-sm dark:shadow-none ${
                    isSelected
                      ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-400 dark:border-indigo-500/40 text-slate-900 dark:text-white ring-1 ring-indigo-400/30'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">{c.matiere}</span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{c.annee}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">{c.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-2">{c.description}</p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                    <span>{c.keyTheorems.length} théorèmes clés</span>
                    <span aria-hidden="true">·</span>
                    <span>{c.readTime}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Detailed Course Reader */}
        {selectedCourse && (
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-6 shadow-sm dark:shadow-none">
            {/* Header bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                  <span>{selectedCourse.matiere}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCourse.annee}</span>
                  <span aria-hidden="true">·</span>
                  <span>Filières : {selectedCourse.filieres.join(', ')}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {selectedCourse.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimer la fiche</span>
                </button>
              </div>
            </div>

            {/* Prérequis */}
            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-semibold text-slate-600 dark:text-slate-400">Prérequis conseillés : </span>
              <span className="text-slate-800 dark:text-slate-300">{selectedCourse.prerequis.join(' · ')}</span>
            </div>

            {/* Sections */}
            <div className="space-y-6">
              {selectedCourse.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">{idx + 1}.</span>
                    <span>{sec.title}</span>
                  </h4>

                  <div className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-sans bg-slate-50 dark:bg-slate-950/60 p-4 rounded-lg border border-slate-200 dark:border-slate-800/80">
                    <MathRenderer content={sec.content} />
                  </div>

                  {sec.methodKicker && (
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/25 rounded-lg text-xs text-indigo-900 dark:text-indigo-200">
                      <strong>Point Méthode : </strong>
                      <MathRenderer content={sec.methodKicker} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Théorèmes Clés & Démonstrations Dépliables */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Théorèmes Fondamentaux & Démonstrations au Programme</span>
              </h4>

              <div className="space-y-3">
                {selectedCourse.keyTheorems.map((thm, idx) => {
                  const isOpen = openDemoIndex === idx;
                  return (
                    <div key={idx} className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none">
                      <div className="p-4 border-b border-slate-200 dark:border-slate-800/80">
                        <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1.5 uppercase font-mono">
                          {thm.name}
                        </div>
                        <div className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                          <MathRenderer content={thm.statement} />
                        </div>
                      </div>

                      {/* Astuce concours */}
                      <div className="p-3 bg-amber-50/70 dark:bg-slate-900/60 text-xs text-slate-700 dark:text-slate-400 border-b border-amber-100 dark:border-slate-800/60 flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-700 dark:text-amber-300">Le Réflexe Concours :</strong>{' '}
                          <MathRenderer content={thm.astuceConcours} />
                        </div>
                      </div>

                      {/* Demonstration toggle */}
                      {thm.demonstration && (
                        <div>
                          <button
                            onClick={() => setOpenDemoIndex(isOpen ? null : idx)}
                            className="w-full px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900/50 flex items-center justify-between transition-colors"
                          >
                            <span>{isOpen ? 'Masquer la démonstration' : 'Afficher la démonstration complète'}</span>
                            {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          </button>

                          {isOpen && (
                            <div className="px-4 py-3 bg-white dark:bg-slate-900/80 text-xs text-slate-800 dark:text-slate-300 font-sans border-t border-slate-200 dark:border-slate-800/60 leading-relaxed">
                              <MathRenderer content={thm.demonstration} />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pièges classiques */}
            {selectedCourse.piegesClassiques.length > 0 && (
              <div className="p-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/25 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 dark:text-rose-300 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>Pièges classiques relevés par les jurys de concours</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-rose-800 dark:text-rose-200/90 leading-relaxed">
                  {selectedCourse.piegesClassiques.map((p, i) => (
                    <li key={i}>
                      <MathRenderer content={p} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Go to exercises for this chapter */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => onSelectExerciseChapter && onSelectExerciseChapter(selectedCourse.id)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>S'entraîner sur les exercices de ce chapitre</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesView;
